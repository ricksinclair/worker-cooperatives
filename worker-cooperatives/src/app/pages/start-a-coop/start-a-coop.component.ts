import { Component } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { PageNavComponent } from '../../components/page-nav/page-nav.component';

@Component({
  selector: 'app-start-a-coop',
  standalone: true,
  imports: [MarkdownComponent, PageNavComponent],
  templateUrl: './start-a-coop.component.html',
  styleUrl: '../page.styles.scss'
})
export class StartACoopComponent {}
