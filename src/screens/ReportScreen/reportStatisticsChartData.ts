import type { HomeTranslationKey } from '../../locales';

export type StatisticsChartSegment = {
  id: string;
  value: number;
  displayValue: string;
  color: string;
  labelKey: HomeTranslationKey;
};

/** Clockwise draw order on the donut (purchases = largest red arc). */
export const STATISTICS_CHART_DRAW_ORDER = ['purchases', 'expenses', 'products'] as const;

/** Sample data aligned to the Statistics Report donut design. */
export const STATISTICS_CHART_SEGMENTS: StatisticsChartSegment[] = [
  {
    id: 'expenses',
    value: 2482,
    displayValue: '2.482$',
    color: '#6EE7B7',
    labelKey: 'reportChartExpenses',
  },
  {
    id: 'products',
    value: 2374,
    displayValue: '2.374$',
    color: '#FB923C',
    labelKey: 'reportChartProducts',
  },
  {
    id: 'purchases',
    value: 4263,
    displayValue: '4.263$',
    color: '#DC2626',
    labelKey: 'reportChartPurchases',
  },
];
