import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface MemberInput {
  name: string;
  hoursWorked: number;
}

interface MemberResult {
  name: string;
  hoursWorked: number;
  patronagePercent: number;
  allocation: number;
  retained: number;
  distributed: number;
}

interface YearProjection {
  year: number;
  annualRetained: number;
  cumulativeEquity: number;
  interestEarned: number;
}

@Component({
  selector: 'app-equity-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './equity-calculator.component.html',
  styleUrl: './equity-calculator.component.scss'
})
export class EquityCalculatorComponent {
  isOpen = signal(false);

  // Inputs
  netSurplus = signal(50000);
  retentionPercent = signal(70);
  annualGrowthRate = signal(3); // Annual surplus growth rate
  interestRate = signal(2); // Interest on retained capital
  projectionYears = signal(30);
  initialBuyIn = signal(1000);
  members = signal<MemberInput[]>([
    { name: 'Member 1', hoursWorked: 2000 },
    { name: 'Member 2', hoursWorked: 2000 },
    { name: 'Member 3', hoursWorked: 1500 },
  ]);

  // Selected member for projection (index)
  selectedMemberIndex = signal(0);

  // Computed values
  totalHours = computed(() =>
    this.members().reduce((sum, m) => sum + m.hoursWorked, 0)
  );

  results = computed<MemberResult[]>(() => {
    const total = this.totalHours();
    const surplus = this.netSurplus();
    const retention = this.retentionPercent() / 100;

    if (total === 0) return [];

    return this.members().map(member => {
      const patronagePercent = (member.hoursWorked / total) * 100;
      const allocation = (member.hoursWorked / total) * surplus;
      const retained = allocation * retention;
      const distributed = allocation * (1 - retention);

      return {
        name: member.name,
        hoursWorked: member.hoursWorked,
        patronagePercent,
        allocation,
        retained,
        distributed
      };
    });
  });

  totalDistributed = computed(() =>
    this.results().reduce((sum, r) => sum + r.distributed, 0)
  );

  totalRetained = computed(() =>
    this.results().reduce((sum, r) => sum + r.retained, 0)
  );

  // Long-term projection for selected member
  projection = computed<YearProjection[]>(() => {
    const results = this.results();
    const memberIndex = this.selectedMemberIndex();
    if (results.length === 0 || memberIndex >= results.length) return [];

    const member = results[memberIndex];
    const years = this.projectionYears();
    const growthRate = this.annualGrowthRate() / 100;
    const interest = this.interestRate() / 100;
    const buyIn = this.initialBuyIn();

    const projections: YearProjection[] = [];
    let cumulativeEquity = buyIn;
    let currentRetained = member.retained;

    for (let year = 1; year <= years; year++) {
      // Interest on previous balance
      const interestEarned = cumulativeEquity * interest;

      // Add this year's retained patronage (grows with surplus growth rate)
      const annualRetained = currentRetained * Math.pow(1 + growthRate, year - 1);

      cumulativeEquity = cumulativeEquity + interestEarned + annualRetained;

      projections.push({
        year,
        annualRetained,
        cumulativeEquity,
        interestEarned
      });
    }

    return projections;
  });

  // Key milestones for display
  milestones = computed(() => {
    const proj = this.projection();
    if (proj.length === 0) return [];

    const milestoneYears = [5, 10, 15, 20, 25, 30, 35, 40].filter(y => y <= this.projectionYears());
    return milestoneYears.map(y => proj[y - 1]).filter(p => p !== undefined);
  });

  // Chart data (percentage heights for bars)
  chartData = computed(() => {
    const proj = this.projection();
    if (proj.length === 0) return [];

    const maxEquity = Math.max(...proj.map(p => p.cumulativeEquity));

    // Sample every few years for the chart to avoid overcrowding
    const step = Math.max(1, Math.floor(proj.length / 20));
    return proj
      .filter((_, i) => i % step === 0 || i === proj.length - 1)
      .map(p => ({
        year: p.year,
        equity: p.cumulativeEquity,
        heightPercent: (p.cumulativeEquity / maxEquity) * 100
      }));
  });

  finalEquity = computed(() => {
    const proj = this.projection();
    return proj.length > 0 ? proj[proj.length - 1].cumulativeEquity : 0;
  });

  open() {
    this.isOpen.set(true);
  }

  close() {
    this.isOpen.set(false);
  }

  addMember() {
    const current = this.members();
    this.members.set([
      ...current,
      { name: `Member ${current.length + 1}`, hoursWorked: 2000 }
    ]);
  }

  removeMember(index: number) {
    const current = this.members();
    if (current.length > 1) {
      this.members.set(current.filter((_, i) => i !== index));
    }
  }

  updateMember(index: number, field: 'name' | 'hoursWorked', value: string | number) {
    const current = [...this.members()];
    if (field === 'hoursWorked') {
      current[index] = { ...current[index], hoursWorked: Number(value) || 0 };
    } else {
      current[index] = { ...current[index], name: String(value) };
    }
    this.members.set(current);
  }

  updateSurplus(value: number) {
    this.netSurplus.set(value || 0);
  }

  updateRetention(value: number) {
    this.retentionPercent.set(Math.min(100, Math.max(0, value || 0)));
  }

  updateGrowthRate(value: number) {
    this.annualGrowthRate.set(Math.min(20, Math.max(0, value || 0)));
  }

  updateInterestRate(value: number) {
    this.interestRate.set(Math.min(10, Math.max(0, value || 0)));
  }

  updateProjectionYears(value: number) {
    this.projectionYears.set(Math.min(40, Math.max(5, value || 30)));
  }

  updateBuyIn(value: number) {
    this.initialBuyIn.set(value || 0);
  }

  updateSelectedMember(index: number) {
    this.selectedMemberIndex.set(index);
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  }

  formatPercent(value: number): string {
    return value.toFixed(1) + '%';
  }
}
