import { Component } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { PageNavComponent } from '../../components/page-nav/page-nav.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [MarkdownComponent, PageNavComponent],
  templateUrl: './faq.component.html',
  styleUrl: '../page.styles.scss'
})
export class FaqComponent {}
