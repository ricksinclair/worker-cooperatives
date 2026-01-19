import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageNavComponent } from '../../components/page-nav/page-nav.component';

interface State {
  name: string;
  slug: string;
  hasDedicatedStatute: boolean;
}

@Component({
  selector: 'app-states',
  standalone: true,
  imports: [RouterLink, PageNavComponent],
  templateUrl: './states.component.html',
  styleUrl: './states.component.scss'
})
export class StatesComponent {
  statesWithStatutes: State[] = [
    { name: 'California', slug: 'california', hasDedicatedStatute: true },
    { name: 'Colorado', slug: 'colorado', hasDedicatedStatute: true },
    { name: 'Connecticut', slug: 'connecticut', hasDedicatedStatute: true },
    { name: 'Illinois', slug: 'illinois', hasDedicatedStatute: true },
    { name: 'Maine', slug: 'maine', hasDedicatedStatute: true },
    { name: 'Maryland', slug: 'maryland', hasDedicatedStatute: true },
    { name: 'Massachusetts', slug: 'massachusetts', hasDedicatedStatute: true },
    { name: 'Minnesota', slug: 'minnesota', hasDedicatedStatute: true },
    { name: 'New York', slug: 'new-york', hasDedicatedStatute: true },
    { name: 'North Carolina', slug: 'north-carolina', hasDedicatedStatute: true },
    { name: 'Oregon', slug: 'oregon', hasDedicatedStatute: true },
    { name: 'Pennsylvania', slug: 'pennsylvania', hasDedicatedStatute: true },
    { name: 'Rhode Island', slug: 'rhode-island', hasDedicatedStatute: true },
    { name: 'Vermont', slug: 'vermont', hasDedicatedStatute: true },
    { name: 'Virginia', slug: 'virginia', hasDedicatedStatute: true },
    { name: 'Wisconsin', slug: 'wisconsin', hasDedicatedStatute: true },
  ];

  allStates: State[] = [
    { name: 'Alabama', slug: 'alabama', hasDedicatedStatute: false },
    { name: 'Alaska', slug: 'alaska', hasDedicatedStatute: false },
    { name: 'Arizona', slug: 'arizona', hasDedicatedStatute: false },
    { name: 'Arkansas', slug: 'arkansas', hasDedicatedStatute: false },
    { name: 'California', slug: 'california', hasDedicatedStatute: true },
    { name: 'Colorado', slug: 'colorado', hasDedicatedStatute: true },
    { name: 'Connecticut', slug: 'connecticut', hasDedicatedStatute: true },
    { name: 'Delaware', slug: 'delaware', hasDedicatedStatute: false },
    { name: 'Florida', slug: 'florida', hasDedicatedStatute: false },
    { name: 'Georgia', slug: 'georgia', hasDedicatedStatute: false },
    { name: 'Hawaii', slug: 'hawaii', hasDedicatedStatute: false },
    { name: 'Idaho', slug: 'idaho', hasDedicatedStatute: false },
    { name: 'Illinois', slug: 'illinois', hasDedicatedStatute: true },
    { name: 'Indiana', slug: 'indiana', hasDedicatedStatute: false },
    { name: 'Iowa', slug: 'iowa', hasDedicatedStatute: false },
    { name: 'Kansas', slug: 'kansas', hasDedicatedStatute: false },
    { name: 'Kentucky', slug: 'kentucky', hasDedicatedStatute: false },
    { name: 'Louisiana', slug: 'louisiana', hasDedicatedStatute: false },
    { name: 'Maine', slug: 'maine', hasDedicatedStatute: true },
    { name: 'Maryland', slug: 'maryland', hasDedicatedStatute: true },
    { name: 'Massachusetts', slug: 'massachusetts', hasDedicatedStatute: true },
    { name: 'Michigan', slug: 'michigan', hasDedicatedStatute: false },
    { name: 'Minnesota', slug: 'minnesota', hasDedicatedStatute: true },
    { name: 'Mississippi', slug: 'mississippi', hasDedicatedStatute: false },
    { name: 'Missouri', slug: 'missouri', hasDedicatedStatute: false },
    { name: 'Montana', slug: 'montana', hasDedicatedStatute: false },
    { name: 'Nebraska', slug: 'nebraska', hasDedicatedStatute: false },
    { name: 'Nevada', slug: 'nevada', hasDedicatedStatute: false },
    { name: 'New Hampshire', slug: 'new-hampshire', hasDedicatedStatute: false },
    { name: 'New Jersey', slug: 'new-jersey', hasDedicatedStatute: false },
    { name: 'New Mexico', slug: 'new-mexico', hasDedicatedStatute: false },
    { name: 'New York', slug: 'new-york', hasDedicatedStatute: true },
    { name: 'North Carolina', slug: 'north-carolina', hasDedicatedStatute: true },
    { name: 'North Dakota', slug: 'north-dakota', hasDedicatedStatute: false },
    { name: 'Ohio', slug: 'ohio', hasDedicatedStatute: false },
    { name: 'Oklahoma', slug: 'oklahoma', hasDedicatedStatute: false },
    { name: 'Oregon', slug: 'oregon', hasDedicatedStatute: true },
    { name: 'Pennsylvania', slug: 'pennsylvania', hasDedicatedStatute: true },
    { name: 'Rhode Island', slug: 'rhode-island', hasDedicatedStatute: true },
    { name: 'South Carolina', slug: 'south-carolina', hasDedicatedStatute: false },
    { name: 'South Dakota', slug: 'south-dakota', hasDedicatedStatute: false },
    { name: 'Tennessee', slug: 'tennessee', hasDedicatedStatute: false },
    { name: 'Texas', slug: 'texas', hasDedicatedStatute: false },
    { name: 'Utah', slug: 'utah', hasDedicatedStatute: false },
    { name: 'Vermont', slug: 'vermont', hasDedicatedStatute: true },
    { name: 'Virginia', slug: 'virginia', hasDedicatedStatute: true },
    { name: 'Washington', slug: 'washington', hasDedicatedStatute: false },
    { name: 'West Virginia', slug: 'west-virginia', hasDedicatedStatute: false },
    { name: 'Wisconsin', slug: 'wisconsin', hasDedicatedStatute: true },
    { name: 'Wyoming', slug: 'wyoming', hasDedicatedStatute: false },
  ];
}
