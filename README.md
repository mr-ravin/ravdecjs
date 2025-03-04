# 📦 **RavdecJS - Lossless Data Compression**

## 🔹 **Overview**
RavdecJS is a JavaScript module implementing a **lossless data compression** algorithm designed by [Ravin Kumar](https://mr-ravin.github.io) on **September 19, 2016**. This algorithm is designed exclusively for **textual data**, including **alphabets, numbers, and symbols**. The algorithm offers two modes:

- When `enforced8CharInput=true`, the length of input data must be exactly divisible by **8**, ensuring a **fixed compression ratio of 1.1429**.
- When `enforced8CharInput=false`, the compression ratio starts at **1.0435** for a **24-character input** (minimum required length) and increases with input size, approaching **1.1429** for larger inputs.

---
## 🔧 **Development Details**
- **👨‍💻 Developer:** [Ravin Kumar](https://mr-ravin.github.io)  
- **💄 NPM Package:** [https://www.npmjs.com/package/ravdecjs](https://www.npmjs.com/package/ravdecjs)
- **📂 GitHub Repository:** [https://github.com/mr-ravin/ravdecjs/](https://github.com/mr-ravin/ravdecjs/)
- **🌐 Python Implementation:** [https://github.com/mr-ravin/ravdec/](https://github.com/mr-ravin/ravdec/)

---
## 📊 **Compression Ratio**

### ✅ **When `enforced8CharInput=false`**
- Compression ratio starts at **1.0435** for a **24-character input** (minimum required length).
- Gradually increases, reaching **1.14** at **912-character length**, and further approaches **1.1429** as input size increases.
- Ideal for handling variable-length text data while still achieving efficient compression.

### 🚀 **When `enforced8CharInput=true`**
- Original data length must be exactly divisible by **8**, ensuring a **fixed compression ratio of 1.1429**.
- Much faster, making it suitable for **high-speed data compression**.
- Best for **real-time systems** where data is continuously growing and **frequency-based algorithms are time-consuming**.

---
## ⏳ **Complexity Analysis**

### **1️⃣ `enforced8CharInput = true`**
✅ **Time Complexity: O(n)**
✅ **Fixed Compression Ratio (1.1429)**
✅ **Ideal for continuously growing data**

### **2️⃣ `enforced8CharInput = false`**
📌 **Time Complexity: O(n) (with minor overhead)**
📌 **Compression ratio varies (~1.04 - 1.1429)**
📌 **Needs Padding Overhead**

### 📌 **Comparison Table**
| Mode | Time Complexity | Compression Ratio | Padding Overhead | Best Use Case |
|------|---------------|-----------------|----------------|---------------|
| `enforced8CharInput = true` | **O(n)** | **Fixed (1.1429)** | ❌ No Padding | **High-speed data streams** |
| `enforced8CharInput = false` | **O(n) (with minor overhead)** | **Variable (~1.04 - 1.1429)** | ✅ Needs Padding | **General text compression** |

---
## 🎯 **Use Cases**
- **📜 Log File Compression:** Reduces storage space while maintaining quick retrieval.
- **⚡ High-Speed Data Transmission:** Faster processing with `enforced8CharInput=true`.
- **📈 Fixed Compression Ratio Scenarios:** Ideal for predictable compression requirements.
- **📁 Data Archiving:** Efficient text storage without losing information.
- **⏳ Real-Time Compression:** `enforced8CharInput=true` ensures immediate compression without extra calculations.

---
## 🚀 **Features**
✅ **Fixed compression ratio** up to **1.1429** for `enforced8CharInput=true`.
✅ **Supports alphabets, numbers, and symbols**.
✅ **Optimized for real-time and high-speed data transmission**.

---
## 🛠️ **Functions**

### 📌 `file_compression(filename, enforced8CharInput=false)`
Compresses a text file and saves the compressed data with the `.rdc` extension.

### 📌 `file_decompression(filename, enforced8CharInput=false)`
Decompresses a previously compressed `.rdc` file back to its original form.

### 📌 `compression(data, key="text", enforced8CharInput=false, bitLength=8)`
Compresses a string using **7-bit storage**, returning a compressed string.

### 📌 `decompression(compressedText, key="text", enforced8CharInput=false)`
Decompresses a compressed string back to its original form.

---
## 📥 **Installation**

Install via npm:

```sh
npm install ravdecjs
```
Install directly from GitHub
```sh
npm install mr-ravin/ravdecjs
```

---
## 🗜️ **Example Usage**

### ✍ **Compressing and Decompressing Text**
```javascript
const { compression, decompression } = require('ravdecjs');

// When enforced8CharInput=true

const text1 = "Ravdec !"; // Length of data is divisible by 8
const compressed1 = compression(text1, "text", true);
const decompressed1 = decompression(compressed1, "text", true);

console.log("Compressed:", compressed1);
console.log("Decompressed:", decompressed1);
console.log("Success:", text1 === decompressed1);

// When enforced8CharInput=false (minimum 24 characters required)

const text2 = "R".repeat(25);
const compressed2 = compression(text2);
const decompressed2 = decompression(compressed2);

console.log("Compressed:", compressed2);
console.log("Decompressed:", decompressed2);
console.log("Success:", text2 === decompressed2);
```

### 📂 **Compressing and Decompressing Files**
```javascript
const { file_compression, file_decompression } = require('ravdecjs');

const originalFile = "inputfile.txt";

// Compress a file
file_compression(originalFile);

// Decompress the previously compressed file
file_decompression(originalFile + ".rdc");
```

---
## 📜 **Copyright License**
```python
Copyright (c) 2016 Ravin Kumar
Website: https://mr-ravin.github.io

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation 
files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, 
modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the 
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the 
Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE 
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
