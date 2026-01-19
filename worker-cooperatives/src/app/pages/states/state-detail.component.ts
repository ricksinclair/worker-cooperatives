import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { MarkdownComponent } from 'ngx-markdown';
import { PageNavComponent } from '../../components/page-nav/page-nav.component';

@Component({
  selector: 'app-state-detail',
  standalone: true,
  imports: [MarkdownComponent, RouterLink, PageNavComponent],
  templateUrl: './state-detail.component.html',
  styleUrl: './state-detail.component.scss'
})
export class StateDetailComponent {
  private route = inject(ActivatedRoute);

  private stateSlug = toSignal(
    this.route.paramMap.pipe(map(params => params.get('state') || ''))
  );

  stateName = computed(() => {
    const slug = this.stateSlug();
    if (!slug) return '';
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  });

  markdownPath = computed(() => {
    const slug = this.stateSlug();
    return slug ? `assets/content/states/${slug}.md` : '';
  });
}
