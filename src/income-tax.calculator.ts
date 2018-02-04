export class IncomeTaxCalculator {
  constructor() {}

  public calculate(income: number): number {
    if (income < 0) {
      return 0;
    } else if (income >= 0 && income <= 50000000) {
      return this.apply(income, (5 / 100));
    } else if (income > 50000000 && income <= 250000000) {
      return this.apply((5 / 100), 50000000) + this.apply((15 / 100), income - 50000000);
    } else if (income > 250000000 && income <= 500000000) {
      return this.apply((5 / 100), 50000000) + this.apply((15 / 100), 200000000) + this.apply((25 / 100), income - 250000000);
    } else {
      return this.apply((5 / 100), 50000000) + this.apply((15 / 100), 200000000) + this.apply((25 / 100), 250000000) + this.apply((30 / 100), income - 500000000);
    }
  }

  private apply(taxRate: number, amount: number): number {
    return taxRate * amount;
  }
}