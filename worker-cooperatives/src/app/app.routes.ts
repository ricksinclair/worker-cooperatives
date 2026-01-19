import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WhatIsAWorkerCoopComponent } from './pages/what-is-a-worker-coop/what-is-a-worker-coop.component';
import { HowCoopsWorkComponent } from './pages/how-coops-work/how-coops-work.component';
import { FinancingAndCapitalComponent } from './pages/financing-and-capital/financing-and-capital.component';
import { GovernanceAndByLawsComponent } from './pages/governance-and-by-laws/governance-and-by-laws.component';
import { CaseStudiesComponent } from './pages/case-studies/case-studies.component';
import { StartACoopComponent } from './pages/start-a-coop/start-a-coop.component';
import { FaqComponent } from './pages/faq/faq.component';
import { StatesComponent } from './pages/states/states.component';
import { StateDetailComponent } from './pages/states/state-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Worker Cooperatives - The Future of Work'
  },
  {
    path: 'what-is-a-worker-coop',
    component: WhatIsAWorkerCoopComponent,
    title: 'What Is a Worker Cooperative?'
  },
  {
    path: 'how-coops-work',
    component: HowCoopsWorkComponent,
    title: 'How Worker Cooperatives Work'
  },
  {
    path: 'financing',
    component: FinancingAndCapitalComponent,
    title: 'Financing & Capital for Worker Cooperatives'
  },
  {
    path: 'governance',
    component: GovernanceAndByLawsComponent,
    title: 'Governance & Bylaws'
  },
  {
    path: 'examples',
    component: CaseStudiesComponent,
    title: 'Case Studies & Success Stories'
  },
  {
    path: 'start',
    component: StartACoopComponent,
    title: 'Start a Worker Cooperative'
  },
  {
    path: 'faq',
    component: FaqComponent,
    title: 'Frequently Asked Questions'
  },
  {
    path: 'states',
    component: StatesComponent,
    title: 'State-by-State Guides'
  },
  {
    path: 'states/:state',
    component: StateDetailComponent,
    title: 'State Guide'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
