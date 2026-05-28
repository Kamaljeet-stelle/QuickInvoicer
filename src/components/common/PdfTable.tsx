/**
 * Horizontally scrollable data table for invoice / PDF previews.
 * @format
 */

import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

export type PdfTableProps = {
  columns: readonly string[];
  /** Each row must match `columns` length (left → right). */
  rows: readonly (readonly string[])[];
  columnWidth?: number;
  headerBackgroundColor?: string;
};

export function PdfTable({
  columns,
  rows,
  columnWidth = 72,
  headerBackgroundColor = '#333333',
}: PdfTableProps) {
  const cellStyle = [styles.cell, { width: columnWidth }];

  return (
    <ScrollView
      horizontal
      bounces={false}
      showsHorizontalScrollIndicator
      style={styles.scroll}>
      <View>
        <View style={[styles.headerRow, { backgroundColor: headerBackgroundColor }]}>
          {columns.map(col => (
            <Text key={col} style={[styles.headerCell, cellStyle]} numberOfLines={2}>
              {col}
            </Text>
          ))}
        </View>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.dataRow}>
            {row.map((value, cellIndex) => (
              <Text key={`${rowIndex}-${cellIndex}`} style={cellStyle}>
                {value}
              </Text>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    marginBottom: 10,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#333333',
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
  dataRow: {
    flexDirection: 'row',
    backgroundColor: '#E8F4FD',
    paddingVertical: 6,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#D4E8F5',
  },
  headerCell: {
    fontSize: 8,
    fontFamily: fonts.neueHaasBold,
    fontWeight: '700',
    color: colors.whiteColor,
    paddingHorizontal: 2,
  },
  cell: {
    fontSize: 8,
    fontFamily: fonts.neueHaasRoman,
    color: colors.textColor,
    paddingHorizontal: 2,
  },
});
