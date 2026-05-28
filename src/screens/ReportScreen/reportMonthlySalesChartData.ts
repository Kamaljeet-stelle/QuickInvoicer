import type { HomeTranslationKey } from '../../locales';

export type MonthlyBar = {
  id: string;
  label: string;
  /** 0–1 height ratio for the filled portion */
  fillRatio: number;
  color: string;
};

export type MonthlySummaryStat = {
  id: string;
  labelKey: HomeTranslationKey;
  displayValue: string;
  /** 0–1 progress on the ring */
  progress: number;
  color: string;
};

const TEAL = '#009688';
const CORAL = '#F87171';

/** Twelve months with alternating teal / coral fills (sample data). */
export const MONTHLY_SALES_BARS: MonthlyBar[] = [
  { id: 'jan', label: 'J', fillRatio: 0.72, color: TEAL },
  { id: 'feb', label: 'F', fillRatio: 0.45, color: CORAL },
  { id: 'mar', label: 'M', fillRatio: 0.88, color: TEAL },
  { id: 'apr', label: 'A', fillRatio: 0.55, color: CORAL },
  { id: 'may', label: 'M', fillRatio: 0.65, color: TEAL },
  { id: 'jun', label: 'J', fillRatio: 0.38, color: CORAL },
  { id: 'jul', label: 'J', fillRatio: 0.92, color: TEAL },
  { id: 'aug', label: 'A', fillRatio: 0.48, color: CORAL },
  { id: 'sep', label: 'S', fillRatio: 0.78, color: TEAL },
  { id: 'oct', label: 'O', fillRatio: 0.52, color: CORAL },
  { id: 'nov', label: 'N', fillRatio: 0.68, color: TEAL },
  { id: 'dec', label: 'D', fillRatio: 0.82, color: CORAL },
];

export const MONTHLY_SALES_SUMMARY: MonthlySummaryStat[] = [
  {
    id: 'pending',
    labelKey: 'reportChartPending',
    displayValue: '$2,430.00',
    progress: 0.4,
    color: '#1E3A8A',
  },
  {
    id: 'unpaid',
    labelKey: 'reportChartUnpaid',
    displayValue: '$1,760.00',
    progress: 0.25,
    color: CORAL,
  },
];

export const MONTHLY_BAR_MAX_HEIGHT = 100;
