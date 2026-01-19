import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

interface NavItem {
  label: string;
  path: string;
  description: string;
}

@Component({
  selector: 'app-page-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './page-nav.component.html',
  styleUrl: './page-nav.component.scss'
})
export class PageNavComponent {
  router = inject(Router);

  navItems: NavItem[] = [
    { label: 'Home', path: '/', description: 'Introduction & overview' },
    { label: 'What Is a Co-op?', path: '/what-is-a-worker-coop', description: 'Definition & principles' },
    { label: 'How It Works', path: '/how-coops-work', description: 'Structure & operations' },
    { label: 'Start a Co-op', path: '/start', description: 'Step-by-step guide' },
    { label: 'Financing', path: '/financing', description: 'Capital & funding' },
    { label: 'Governance', path: '/governance', description: 'Bylaws & decision-making' },
    { label: 'Case Studies', path: '/examples', description: 'Real-world success stories' },
    { label: 'State Guides', path: '/states', description: 'State-specific resources' },
    { label: 'FAQ', path: '/faq', description: 'Common questions answered' },
  ];

  isActive(path: string): boolean {
    return this.router.url === path;
  }
}
