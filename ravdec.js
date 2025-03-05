const fs = require('fs');

const version = '1.1.3';

function checkCompressibility(asciiValue, char) {
    if (asciiValue > 127) {
        throw new Error(`Not Compressible for character: ${char} - Acceptable ASCII range: 0-127.`);
    }
}

function checkDataLengthThreshold(enforced8CharInput, data) {
    if (!enforced8CharInput && data.length < 24) {
        throw new Error("Minimum 24 characters should be present when enforced8CharInput is set to false.");
    }
}

function get7BitBinaryRepresentation(data, bitLength = 8) {
    let fullBinaryData = '';
    for (let char of data) {
        const asciiValue = char.charCodeAt(0);
        checkCompressibility(asciiValue, char);
        let binaryData = asciiValue.toString(2).padStart(bitLength, '0').slice(1);
        fullBinaryData += binaryData;
    }
    return fullBinaryData;
}

function binaryToCompressedText(binaryData, bitLength = 8) {
    let compressedText = '';
    for (let i = 0; i < binaryData.length; i += bitLength) {
        let byte = binaryData.slice(i, i + bitLength).padEnd(bitLength, '0');
        compressedText += String.fromCharCode(parseInt(byte, 2));
    }
    return compressedText;
}

function compressedTextToBinary(compressedText, bitLength = 8) {
    let binaryData = '';
    for (let char of compressedText) {
        binaryData += char.charCodeAt(0).toString(2).padStart(bitLength, '0');
    }
    return binaryData;
}

function getTextFrom7BitBinaryRepresentation(fullBinaryData, bit7Length = 7) {
    let originalText = '';
    for (let i = 0; i < fullBinaryData.length; i += bit7Length) {
        let binary7bitData = fullBinaryData.slice(i, i + bit7Length);
        if (binary7bitData.length < bit7Length) break;
        let binary8bitData = '0' + binary7bitData;
        originalText += String.fromCharCode(parseInt(binary8bitData, 2));
    }
    return originalText;
}

function compression(data, key = "text", enforced8CharInput = false, bitLength = 8) {
    if (!data) return data;
    checkDataLengthThreshold(enforced8CharInput, data);
    let binaryString = get7BitBinaryRepresentation(data);
    let compressedText;
    if (!enforced8CharInput) {
        let padLength = (bitLength - (binaryString.length % bitLength)) % bitLength;
        binaryString += "0".repeat(padLength);
        compressedText = `${padLength}#${binaryToCompressedText(binaryString)}`;
    } else {
        compressedText = binaryToCompressedText(binaryString);
    }
    return key === "binary" ? binaryString : compressedText;
}

function decompression(compressedText, key = "text", enforced8CharInput = false) {
    if (!compressedText) return compressedText;
    let padLength = 0;
    if (!enforced8CharInput && compressedText[1] === "#") {
        let parts = compressedText.split("#", 2);
        padLength = parseInt(parts[0], 10);
        compressedText = parts[1];
    }
    let binaryString = compressedTextToBinary(compressedText);
    if (padLength > 0 && padLength < binaryString.length) {
        binaryString = binaryString.slice(0, -padLength);
    }
    return key === "binary" ? binaryString : getTextFrom7BitBinaryRepresentation(binaryString);
}

function file_compression(filename, enforced8CharInput = false) {
    let data = fs.readFileSync(filename, 'utf-8');
    let compressedText = compression(data, 8, "text", enforced8CharInput);
    fs.writeFileSync(`${filename}.rdc`, compressedText, 'utf-8');
}

function file_decompression(filename, enforced8CharInput = false) {
    let data = fs.readFileSync(filename, 'utf-8');
    let decompressedText = decompression(data, "text", enforced8CharInput);
    let writeFilename = filename.endsWith(".rdc") ? filename.slice(0, -4) : `${filename}_decompressed`;
    fs.writeFileSync(writeFilename, decompressedText, 'utf-8');
}

module.exports = { compression, decompression, file_compression, file_decompression, version };
