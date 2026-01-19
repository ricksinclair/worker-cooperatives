import { Component } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { PageNavComponent } from '../../components/page-nav/page-nav.component';

@Component({
  selector: 'app-financing-and-capital',
  standalone: true,
  imports: [MarkdownComponent, PageNavComponent],
  templateUrl: './financing-and-capital.component.html',
  styleUrl: '../page.styles.scss'
})
export class FinancingAndCapitalComponent {}
