/**
 * Small circular progress indicator for monthly sales summary.
 * @format
 */

import React from 'react';
import Svg, { Circle } from 'react-native-svg';

const SIZE = 52;
const STROKE = 5;

type ProgressRingProps = {
  progress: number;
  color: string;
  trackColor?: string;
};

export function ProgressRing({
  progress,
  color,
  trackColor = '#E5E7EB',
}: ProgressRingProps) {
  const radius = (SIZE - STROKE) / 2;
  const center = SIZE / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.min(1, Math.max(0, progress));
  const dashLength = circumference * clamped;

  return (
    <Svg width={SIZE} height={SIZE}>
      <Circle
        cx={center}
        cy={center}
        r={radius}
        stroke={trackColor}
        strokeWidth={STROKE}
        fill="transparent"
      />
      <Circle
        cx={center}
        cy={center}
        r={radius}
        stroke={color}
        strokeWidth={STROKE}
        fill="transparent"
        strokeDasharray={`${dashLength} ${circumference - dashLength}`}
        strokeLinecap="round"
        transform={`rotate(-90 ${center} ${center})`}
      />
    </Svg>
  );
}
