import { Component } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { PageNavComponent } from '../../components/page-nav/page-nav.component';
import { EquityCalculatorComponent } from '../../components/equity-calculator/equity-calculator.component';

@Component({
  selector: 'app-how-coops-work',
  standalone: true,
  imports: [MarkdownComponent, PageNavComponent, EquityCalculatorComponent],
  templateUrl: './how-coops-work.component.html',
  styleUrl: '../page.styles.scss'
})
export class HowCoopsWorkComponent {}
