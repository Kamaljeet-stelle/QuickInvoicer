/**
 * Monthly bar chart + pending/unpaid summary for the Monthly Sales tab.
 * @format
 */

import React from 'react';
import { Text, View } from 'react-native';
import type { HomeTranslationKey } from '../../locales';
import {
  MONTHLY_BAR_MAX_HEIGHT,
  MONTHLY_SALES_BARS,
  MONTHLY_SALES_SUMMARY,
  type MonthlyBar,
  type MonthlySummaryStat,
} from './reportMonthlySalesChartData';
import { ProgressRing } from './ProgressRing';
import { styles } from './styles';

type MonthlySalesChartProps = {
  bars?: MonthlyBar[];
  summary?: MonthlySummaryStat[];
  labelFor: (key: HomeTranslationKey) => string;
};

export function MonthlySalesChart({
  bars = MONTHLY_SALES_BARS,
  summary = MONTHLY_SALES_SUMMARY,
  labelFor,
}: MonthlySalesChartProps) {
  return (
    <View style={styles.monthlyChartCard}>
      <View style={styles.monthlyBarChart}>
        {bars.map(bar => (
          <View key={bar.id} style={styles.monthlyBarColumn}>
            <View style={[styles.monthlyBarTrack, { height: MONTHLY_BAR_MAX_HEIGHT }]}>
              <View
                style={[
                  styles.monthlyBarFill,
                  {
                    height: MONTHLY_BAR_MAX_HEIGHT * bar.fillRatio,
                    backgroundColor: bar.color,
                  },
                ]}
              />
            </View>
            <Text style={styles.monthlyBarLabel}>{bar.label}</Text>
          </View>
        ))}
      </View>

      <View style={styles.monthlyChartDivider} />

      <View style={styles.monthlySummaryRow}>
        {summary.map(item => (
          <View key={item.id} style={styles.monthlySummaryItem}>
            <ProgressRing progress={item.progress} color={item.color} />
            <View style={styles.monthlySummaryText}>
              <Text style={styles.monthlySummaryLabel}>{labelFor(item.labelKey)}</Text>
              <Text style={styles.monthlySummaryValue}>{item.displayValue}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
