/**
 * Pill segmented control for the report chart section.
 * @format
 */

import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

export type ReportChartTab = 'statistics' | 'monthly';

type ChartSegmentTabsProps = {
  activeTab: ReportChartTab;
  onTabChange: (tab: ReportChartTab) => void;
  statisticsLabel: string;
  monthlyLabel: string;
};

export function ChartSegmentTabs({
  activeTab,
  onTabChange,
  statisticsLabel,
  monthlyLabel,
}: ChartSegmentTabsProps) {
  return (
    <View style={styles.chartTabBar}>
      <Pressable
        style={[styles.chartTab, activeTab === 'statistics' ? styles.chartTabActive : null]}
        onPress={() => onTabChange('statistics')}
        accessibilityRole="tab"
        accessibilityState={{ selected: activeTab === 'statistics' }}>
        <Text style={styles.chartTabText}>{statisticsLabel}</Text>
      </Pressable>
      <Pressable
        style={[styles.chartTab, activeTab === 'monthly' ? styles.chartTabActive : null]}
        onPress={() => onTabChange('monthly')}
        accessibilityRole="tab"
        accessibilityState={{ selected: activeTab === 'monthly' }}>
        <Text style={styles.chartTabText}>{monthlyLabel}</Text>
      </Pressable>
    </View>
  );
}
