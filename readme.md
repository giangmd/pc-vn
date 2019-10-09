# Provinces Cities of Vietnam

A small package to help get Province, City, Wards of Vietnam

## Install

    npm install pc-vn --save-dev

## Functions
| Function                                 | Desciption                                          |
| ---------------------------------------  | --------------------------------------------------- |
| getProvinces()                           | Get all province                                    |
| getDistricts()                           | Get all district                                    |
| getWards()                               | Get all ward                                        |
| getDistrictsByProvinceCode(provinceCode) | Get districts by province code(from getProvinces()) |
| getWardsByDistrictCode(districtCode)     | Get wards by district code(from getDistricts())     |
| getWardsByProvinceCode(provinceCode)     | Get wards by province code(from getProvinces())     |

## How to use
  Require to your function need to use

    const pcVN = require('pc-vn')
    const provinces = pcVN.getProvinces()

### The MIT License (MIT)

Copyright (c) <2019> Mai Dong Giang

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.