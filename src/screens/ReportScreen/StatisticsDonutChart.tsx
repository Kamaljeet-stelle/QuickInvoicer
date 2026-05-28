/**
 * Donut chart + legend for the Statistics Report tab.
 * @format
 */

import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import type { HomeTranslationKey } from '../../locales';
import {
  STATISTICS_CHART_DRAW_ORDER,
  type StatisticsChartSegment,
} from './reportStatisticsChartData';
import { styles } from './styles';

const CHART_SIZE = 148;
const STROKE_WIDTH = 26;

type StatisticsDonutChartProps = {
  segments: StatisticsChartSegment[];
  labelFor: (key: HomeTranslationKey) => string;
};

export function StatisticsDonutChart({ segments, labelFor }: StatisticsDonutChartProps) {
  const total = useMemo(
    () => segments.reduce((sum, segment) => sum + segment.value, 0),
    [segments],
  );

  const drawSegments = useMemo(() => {
    const order = [...STATISTICS_CHART_DRAW_ORDER];
    return [...segments].sort(
      (a, b) => order.indexOf(a.id as (typeof order)[number]) - order.indexOf(b.id as (typeof order)[number]),
    );
  }, [segments]);

  const radius = (CHART_SIZE - STROKE_WIDTH) / 2;
  const center = CHART_SIZE / 2;
  const circumference = 2 * Math.PI * radius;

  let rotation = -90;

  return (
    <View style={styles.statisticsChartCard}>
      <View style={styles.statisticsChartRow}>
        <Svg width={CHART_SIZE} height={CHART_SIZE}>
          {drawSegments.map(segment => {
            const portion = total > 0 ? segment.value / total : 0;
            const dashLength = circumference * portion;
            const segmentRotation = rotation;

            rotation += portion * 360;

            return (
              <Circle
                key={segment.id}
                cx={center}
                cy={center}
                r={radius}
                stroke={segment.color}
                strokeWidth={STROKE_WIDTH}
                fill="transparent"
                strokeDasharray={`${dashLength} ${circumference - dashLength}`}
                strokeLinecap="butt"
                transform={`rotate(${segmentRotation} ${center} ${center})`}
              />
            );
          })}
        </Svg>

        <View style={styles.statisticsLegend}>
          {segments.map(segment => (
            <View key={segment.id} style={styles.statisticsLegendRow}>
              <View style={[styles.statisticsLegendSwatch, { backgroundColor: segment.color }]} />
              <View style={styles.statisticsLegendText}>
                <Text style={styles.statisticsLegendLabel}>{labelFor(segment.labelKey)}</Text>
                <Text style={styles.statisticsLegendValue}>{segment.displayValue}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
