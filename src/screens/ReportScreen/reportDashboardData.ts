import type { HomeTranslationKey } from '../../locales';

export type ReportTopStat = {
  labelKey: HomeTranslationKey;
  value: string;
  icon: 'TotalSales' | 'Collected' | 'DueAmount' | 'TotalDue' | 'TotalReports' | 'TotalCustomer';
  iconBg: string;
};

export const REPORT_TOP_STATS: ReportTopStat[] = [
  { value: '100', labelKey: 'todaySales', icon: 'TotalSales', iconBg: '#1F9A8E' },
    { value: '25+', labelKey: 'collected', icon: 'Collected', iconBg: '#1F9A8E' },
    { value: '$250', labelKey: 'dueAmount', icon: 'DueAmount', iconBg: '#1F9A8E' },
    { value: '86243.36', labelKey: 'totalDue', icon: 'TotalDue', iconBg: '#1F9A8E' },
    { value: '192', labelKey: 'totalReports', icon: 'TotalReports', iconBg: '#1F9A8E' },
    { value: '192', labelKey: 'totalCustomer', icon: 'TotalCustomer', iconBg: '#1F9A8E' },
];
