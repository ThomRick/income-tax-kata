import { expect } from 'chai';
import { IncomeTaxCalculator } from '../src/income-tax.calculator';

describe('IncomeTaxCalculator', () => {
  let calculator: IncomeTaxCalculator;
  beforeEach(() => calculator = new IncomeTaxCalculator());
  describe('calculateTax()', () => {
    it('no income returns 0', () => {
      expect(calculator.calculate(0)).to.be.equal(0);
    });
    it('negative income returns 0', () => {
      expect(calculator.calculate(-1)).to.be.equal(0);
    });
    it('income of 50,000,000 should return 2,500,000', () => {
      expect(calculator.calculate(50000000)).to.be.equal(2500000);
    });
    it('income of 75,000,000 should return 6,250,000', () => {
      expect(calculator.calculate(75000000)).to.be.equal(6250000);
    });
    it('income of 750,000,000 should return 170,000,000', () => {
      expect(calculator.calculate(750000000)).to.be.equal(170000000);
    });
  });
});