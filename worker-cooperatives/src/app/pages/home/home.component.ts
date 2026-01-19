import { Component } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MarkdownComponent],
  template: `
    <article class="home-page">
      <markdown src="assets/content/home.md"></markdown>
    </article>
  `,
  styles: [`
    .home-page {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem 1.5rem 4rem;

      :host ::ng-deep {
        h1:first-child {
          margin-top: 0;
        }

        /* Hero section styling */
        h1 {
          font-size: 2.75rem;
          line-height: 1.2;
        }

        h2 {
          margin-top: 3rem;
        }

        /* Stats styling */
        ul {
          list-style: none;
          padding-left: 0;

          li {
            position: relative;
            padding-left: 1.5rem;
            margin: 0.75em 0;

            &::before {
              content: '';
              position: absolute;
              left: 0;
              top: 0.5em;
              width: 6px;
              height: 6px;
              background-color: var(--accent-color);
              border-radius: 50%;
            }
          }
        }

        /* Footnotes styling */
        .footnotes {
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-color);
          font-size: 0.875rem;
          color: var(--text-secondary);

          ol {
            padding-left: 1.5rem;
          }
        }

        sup {
          font-size: 0.75em;

          a {
            text-decoration: none;
          }
        }

        /* CTA buttons in markdown */
        a[href^="/"] {
          font-weight: 500;
        }
      }
    }
  `]
})
export class HomeComponent {}
