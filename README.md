# RavdecJs - javascript implementation of ravdec

Ravdec is a module written in python, which is based on a <b>Lossless Data Compression Algorithm</b> designed by [Ravin Kumar](https://mr-ravin.github.io) on 19 September, 2016.This compression algorithm have a fixed compression ratio of 1.1429 in all possible cases, It accepts data of following format: alphabets,numbers, and symbols.It can be  used where the machine generates data at a very fast rate, that it became difficult for other algorithms to calculate the propability of a symbol, as data keeps on getting large, and is transmitted over the network with a much faster rate. In this case also,  the above module, and algorithm gives the same compression ratio.

### Ravdec- LossLess Data Compression

##### Algorithm Designer, and Module Developer: [Ravin Kumar](https://mr-ravin.github.io)

This compression algorithm have a fixed compression ratio of 1.1429 in all possible cases, It accepts data 
of following format: alphabets,numbers, and symbols.
Example: It can compress 1 GB to 896 MB.

### Application of Ravdec 

It can be  used where the machine generates data at a very fast rate, that it became difficult for other algorithms to calculate the propability of a symbol, as data keeps on getting large, and is transmitted over the network with a much faster rate. In this case also, the above module, and algorithm gives the same compression ratio.

NOTE- The data that is to be compressed should have length of multiple of 8.(i.e 8 elements, or 16
elemnts or 24...so on)
 
- net_compression("data to be compressed of length of multiple of 8 ") - To compress the  original data to transmit, that is
   needed to be  transmitted.
- net_decompression(" previously compressed data")  - To decompress the previously compressed data, that is received.

It is used where the machine generates data at a very fast rate, that it became difficult for other algorithms to calculate the propability of a symbol, as data keeps on getting large, and is transmitted over the network with a much faster rate.

#### Example:

```
const ravdec=require("./ravdec.js");
ravdec_obj=new ravdec();
// for compression
var compressed_data=ravdec_obj.compression("ASDFGHJK");

// note- data to be compressed should have length of multiple of 8.
// (i.e 8 elements, or 16 elemnts or 24...so on) for decompression

var decompressed_data=ravdec_obj.decompression("previously compressed data");

```

#### Application of this module:

It can be  used where the machine generates data at a very fast rate, that it became difficult for other algorithms to calculate the probability of a symbol, as data keeps on getting large, and is transmitted over the network with a much faster rate. In this case also, the above module, and algorithm gives the same compression ratio.

#### Installation using npm:
```
npm install 
```

#### Do visit: 
Ravdec: Python implementation of ravdec. [repository here](https://github.com/mr-ravin/ravdec)

---

```python
Copyright (c) 2016-2021 Ravin Kumar
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
