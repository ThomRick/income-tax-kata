const IncomeTaxCalculator = require('./lib/income-tax.calculator').IncomeTaxCalculator;
const calculator = new IncomeTaxCalculator();
const income = process.argv[2];
console.log('- - - - - - - - - - - - - - - - - - - -');
console.log('|       Income Tax Calculator         |');
console.log('- - - - - - - - - - - - - - - - - - - -');
console.log(`income : ${ income } => tax = ${ calculator.calculate(income) }`);
