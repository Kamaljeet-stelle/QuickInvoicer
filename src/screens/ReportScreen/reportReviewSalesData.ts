import type { HomeTranslationKey } from '../../locales';

export type ReportReviewSalesItem = {
  id: string;
  titleKey: HomeTranslationKey;
  descriptionKey: HomeTranslationKey;
};

export const REPORT_REVIEW_SALES_ITEMS: ReportReviewSalesItem[] = [
  {
    id: 'salesList',
    titleKey: 'reportSalesListTitle',
    descriptionKey: 'reportSalesListDesc',
  },
  {
    id: 'salesWithTax',
    titleKey: 'reportSalesWithTaxTitle',
    descriptionKey: 'reportSalesWithTaxDesc',
  },
  {
    id: 'salesByProduct',
    titleKey: 'reportSalesByProductTitle',
    descriptionKey: 'reportSalesByProductDesc',
  },
  {
    id: 'productList',
    titleKey: 'reportProductListTitle',
    descriptionKey: 'reportProductListDesc',
  },
  {
    id: 'expenseByCategory',
    titleKey: 'reportExpenseByCategoryTitle',
    descriptionKey: 'reportExpenseByCategoryDesc',
  },
  {
    id: 'expenseByMode',
    titleKey: 'reportExpenseByModeTitle',
    descriptionKey: 'reportExpenseByModeDesc',
  },
];
