/**
 * Single row in the Review Sales report list.
 * @format
 */

import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { colors } from '../../theme/colors';
import { styles } from '../ReportScreen/styles';
import { images } from '../../theme/images';

type ReviewSalesCardProps = {
  title: string;
  description: string;
  onPress?: () => void;
};

export function ReviewSalesCard({ title, description, onPress }: ReviewSalesCardProps) {
  return (
    <Pressable
      style={styles.reviewCard}
      onPress={onPress}
      disabled={!onPress}
      accessibilityRole="button"
      accessibilityLabel={title}>
      <View style={styles.reviewCardText}>
        <View style={styles.reviewCardTextContent}>
          <Text style={styles.reviewCardTitle}>{title}</Text>
          <Text style={styles.reviewCardDesc}>{description}</Text>
        </View>
        <Image source={images.ArrowRightWith} style={styles.arrowRightWith} />
      </View>
    </Pressable>
  );
}
