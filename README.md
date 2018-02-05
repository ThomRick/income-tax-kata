# income-tax-kata
[![CircleCI](https://circleci.com/gh/ThomRick/income-tax-kata.svg?style=svg)](https://circleci.com/gh/ThomRick/income-tax-kata)

Income tax calculation Kata

## Illustration :

In 2014, there are 4 edges which have their own tax rate:
* From Rp 0 to Rp 50,000,000 the tax rate is 5%.
* From Rp 50,000,000 to Rp 250,000,000 the tax rate is 15%.
* From Rp 250,000,000 to Rp 500,000,000 the tax rate is 25%.
* Above 500,000,000 the tax rate is 30%.

Examples:

1) If your annual taxable income is Rp 75,000,000.
Your annual income tax amount will be:
5% * 50,000,000 + 15% * 25,000,000 =
   2,500,000    +     3,750,000    = Rp 6,250,000

2) If your annual taxable income is Rp 750,000,000,
 Your annual income tax amount will be:
 5% * 50,000,000 + 15% * 200,000,000 + 25% * 250,000,000 + 30% * 250,000,000 =
     2,500,000   +     30,000,000    +    62,500,000     +    75,000,000     = Rp 170,000,000

**Task** : Write a program in TDD to calculate the annual income tax above.

## Usage :

### With Node.js

Requirements :
* Node.js 8.9 or higher
    
Run :
* `npm install`
* `make`
* `node index.js <income>`

### With Docker

Requirements:
* Docker 17.05 or higher

Run :
* `docker build -t <image_name> .`
* `docker run <image_name> <income>`