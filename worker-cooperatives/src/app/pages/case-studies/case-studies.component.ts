import { Component } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { PageNavComponent } from '../../components/page-nav/page-nav.component';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [MarkdownComponent, PageNavComponent],
  templateUrl: './case-studies.component.html',
  styleUrl: '../page.styles.scss'
})
export class CaseStudiesComponent {}
