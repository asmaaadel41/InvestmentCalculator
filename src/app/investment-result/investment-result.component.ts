import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  exportAs: 'InvestmentResultComponent',
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.scss',
})
export class InvestmentResultComponent {
  @Input({ required: true }) investmentResults: any[] = [];
}
