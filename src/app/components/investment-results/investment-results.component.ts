import { Component, computed, inject } from '@angular/core';
import { isEmpty } from 'lodash';
import { InvestmentService } from '../../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentResultService = inject(InvestmentService);

  results = computed(() => this.investmentResultService.results);
  isArrayEmpty = computed(() => isEmpty(this.results()()));
}
