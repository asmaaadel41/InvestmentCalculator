import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InvestmentFormComponent } from './investment-form/investment-form.component';
import { InvestmentResultComponent } from './investment-result/investment-result.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    InvestmentFormComponent,
    InvestmentResultComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'investment-calculator';
}
