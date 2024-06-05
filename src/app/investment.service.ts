import { Injectable, signal } from '@angular/core';
import { AnnualData } from './components/investment-results/investment-results.model';
import { InvestmentInput } from './investment-input.model';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  results = signal<AnnualData[]>([]);
  calculateInvestmentResults(data: InvestmentInput) {
    const { initialInvestment, annualInvestment, duration, expectedReturn } =
      data;
    const annualData: AnnualData[] = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.results.set(annualData);
  }
}
