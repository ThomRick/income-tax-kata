export class IncomeTaxCalculator {
  private FIRST_EDGE_TAX_RATE = (5 / 100);
  private SECOND_EDGE_TAX_RATE = (15 / 100);
  private THIRD_EDGE_TAX_RATE = (25 / 100);
  private FOURTH_EDGE_TAX_RATE = (30 / 100);

  constructor() {}

  public calculate(income: number): number {
    if (income < 0) return 0;
    else if (this.isInFirstEdge(income)) return this.applyFirstEdgeTaxLogic(income);
    else if (this.isInSecondEdge(income)) return this.applySecondEdgeTaxLogic(income);
    else if (this.isInThirdEdge(income)) return this.applyThirdEdgeTaxLogic(income);
    else return this.applyFourthEdgeTaxLogic(income);
  }

  private isInFirstEdge(income: number) {
    return income >= 0 && income <= 50000000;
  }

  private applyFirstEdgeTaxLogic(income: number): number {
    return this.apply(this.FIRST_EDGE_TAX_RATE, income);
  }

  private isInSecondEdge(income: number) {
    return income > 50000000 && income <= 250000000;
  }

  private applySecondEdgeTaxLogic(income: number): number {
    return this.apply(this.FIRST_EDGE_TAX_RATE, 50000000) +
           this.apply((this.SECOND_EDGE_TAX_RATE), income - 50000000);
  }

  private isInThirdEdge(income: number) {
    return income > 250000000 && income <= 500000000;
  }

  private applyThirdEdgeTaxLogic(income: number): number {
    return this.apply(this.FIRST_EDGE_TAX_RATE, 50000000) +
           this.apply((this.SECOND_EDGE_TAX_RATE), 200000000) +
           this.apply((this.THIRD_EDGE_TAX_RATE), income - 250000000);
  }

  private applyFourthEdgeTaxLogic(income: number): number {
    return this.apply(this.FIRST_EDGE_TAX_RATE, 50000000) +
           this.apply((this.SECOND_EDGE_TAX_RATE), 200000000) +
           this.apply((this.THIRD_EDGE_TAX_RATE), 250000000) +
           this.apply(this.FOURTH_EDGE_TAX_RATE, income - 500000000)
  }

  private apply(taxRate: number, amount: number): number {
    return taxRate * amount;
  }
}