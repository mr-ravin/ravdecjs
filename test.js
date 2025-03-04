const { compression, decompression } = require('./ravdec'); // Import your module

const text1 = "Hello, this is a compression test!";
console.log("Original Text:", text1);

// Compress the text
const compressed1 = compression(text1);
console.log("Compressed:", compressed1);

// Decompress the text
const decompressed1 = decompression(compressed1);
console.log("Decompressed:", decompressed1);

// Check if decompressed matches original
console.log("When enforced8CharInput = false, Is success :", text1 === decompressed1);

const text2 = "Ravdec !";
console.log("Original Text:", text2);

// Compress the text
const compressed2 = compression(text2, "text", true, 8);
console.log("Compressed:", compressed2);

// Decompress the text
const decompressed2 = decompression(compressed2, "text", true);
console.log("Decompressed:", decompressed2);

// Check if decompressed matches original
console.log("When enforced8CharInput = true, Is success:", text2 === decompressed2);