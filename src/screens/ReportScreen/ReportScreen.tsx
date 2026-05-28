/**
 * Report tab — dashboard summary and Review Sales list.
 * @format
 */

import React, { useCallback, useState } from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import { Header } from '../../components/common/Header';
import { HOME_TRANSLATIONS, type HomeTranslationKey } from '../../locales';
import { images } from '../../theme/images';
import { REPORT_REVIEW_SALES_ITEMS } from './reportReviewSalesData';
import { REPORT_TOP_STATS } from './reportDashboardData';
import { ChartSegmentTabs, type ReportChartTab } from './ChartSegmentTabs';
import { STATISTICS_CHART_SEGMENTS } from './reportStatisticsChartData';
import { MonthlySalesChart } from './MonthlySalesChart';
import { StatisticsDonutChart } from './StatisticsDonutChart';
import { ReviewSalesCard } from './ReviewSalesCard';
import { styles } from './styles';

export function ReportScreen() {
  const [chartTab, setChartTab] = useState<ReportChartTab>('statistics');

  const t = useCallback(
    (key: HomeTranslationKey) => HOME_TRANSLATIONS.en[key] ?? key,
    [],
  );

  return (
    <View style={styles.root}>
      <Header isUserLoggedIn />

      <ScrollView
        style={styles.scroll}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        <ImageBackground source={images.LinearBG} style={styles.statsPanel}>
          <View style={styles.statsPanelInner}>
            {REPORT_TOP_STATS.map((row, index) => {
              const isLastColumn = index % 3 === 2;
              const isLastRow = index >= REPORT_TOP_STATS.length - 3;
              return (
                <View
                  key={row.labelKey}
                  style={[
                    styles.statCell,
                    isLastColumn ? styles.statCellNoRightBorder : null,
                    isLastRow ? styles.statCellNoBottomBorder : null,
                  ]}>
                  <View style={[styles.statIconCircle, { backgroundColor: row.iconBg }]}>
                    <Image source={images[row.icon]} style={styles.statIcon} />
                  </View>
                  <Text style={styles.statValue}>{row.value}</Text>
                  <Text style={styles.statLabel}>{t(row.labelKey)}</Text>
                </View>
              );
            })}
          </View>
        </ImageBackground>

        <View style={styles.chartSection}>
          <ChartSegmentTabs
            activeTab={chartTab}
            onTabChange={setChartTab}
            statisticsLabel={t('reportChartTabStatistics')}
            monthlyLabel={t('reportChartTabMonthlySales')}
          />
          {chartTab === 'statistics' ? (
            <StatisticsDonutChart segments={STATISTICS_CHART_SEGMENTS} labelFor={t} />
          ) : (
            <MonthlySalesChart labelFor={t} />
          )}
        </View>

        <View style={styles.reviewSection}>
          <Text style={styles.reviewSectionTitle}>{t('reportReviewSalesTitle')}</Text>
          {REPORT_REVIEW_SALES_ITEMS.map(item => (
            <ReviewSalesCard
              key={item.id}
              title={t(item.titleKey)}
              description={t(item.descriptionKey)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
