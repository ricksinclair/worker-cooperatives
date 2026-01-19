import { Component } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { PageNavComponent } from '../../components/page-nav/page-nav.component';

@Component({
  selector: 'app-governance-and-by-laws',
  standalone: true,
  imports: [MarkdownComponent, PageNavComponent],
  templateUrl: './governance-and-by-laws.component.html',
  styleUrl: '../page.styles.scss'
})
export class GovernanceAndByLawsComponent {}
