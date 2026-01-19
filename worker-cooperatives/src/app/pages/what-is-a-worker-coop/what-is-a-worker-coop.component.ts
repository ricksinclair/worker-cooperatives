import { Component } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { PageNavComponent } from '../../components/page-nav/page-nav.component';

@Component({
  selector: 'app-what-is-a-worker-coop',
  standalone: true,
  imports: [MarkdownComponent, PageNavComponent],
  templateUrl: './what-is-a-worker-coop.component.html',
  styleUrl: '../page.styles.scss'
})
export class WhatIsAWorkerCoopComponent {}
