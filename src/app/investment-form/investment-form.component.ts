import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResultComponent } from '../investment-result/investment-result.component';
import { Investment } from '../interfaces/investment';

@Component({
  selector: 'app-investment-form',
  standalone: true,
  imports: [FormsModule, InvestmentResultComponent],
  templateUrl: './investment-form.component.html',
  styleUrl: './investment-form.component.scss',
})
export class InvestmentFormComponent {
  initialAmount!: number;
  annualRate!: number;
  expectedReturn!: number;
  duration!: number;
  investmentResults: Investment[] = [];
  constructor() {
    this.getResults();
    this.getDataForm();
  }
  calculateInvestment() {
    this.investmentResults = [];
    let amount = this.initialAmount;
    const formData = {
      initialAmount: this.initialAmount,
      annualRate: this.annualRate,
      expectedReturn: this.expectedReturn,
      duration: this.duration,
    };
    for (let year = 1; year <= this.duration; year++) {
      const yearlyRate = this.annualRate / 100;
      const returnRate = this.expectedReturn / 100;
      amount += amount * yearlyRate;
      const returnAmount = amount * returnRate;
      amount += returnAmount;
      this.investmentResults.push({
        year,
        amount: parseFloat(amount.toFixed(2)),
      });
    }
    localStorage.setItem(
      'investmentResults',
      JSON.stringify(this.investmentResults)
    );
    localStorage.setItem('formData', JSON.stringify(formData));
  }

  getResults() {
    const investmentResults = localStorage.getItem('investmentResults');
    if (investmentResults) {
      this.investmentResults = JSON.parse(investmentResults);
    }
  }
  getDataForm() {
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      const formData = JSON.parse(savedFormData);
      this.initialAmount = formData.initialAmount;
      this.annualRate = formData.annualRate;
      this.expectedReturn = formData.expectedReturn;
      this.duration = formData.duration;
    }
  }
  resetForm() {
    this.investmentResults = [];
    localStorage.removeItem('investmentResults');
    localStorage.removeItem('formData');
  }
}
