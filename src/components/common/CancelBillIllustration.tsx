import React from 'react';
import { SvgXml } from 'react-native-svg';
import { cancelBillIllustrationXml } from '../../assets/svg/cancelBillIllustrationXml';

type CancelBillIllustrationProps = {
  width?: number;
  height?: number;
};

export function CancelBillIllustration({
  width = 154,
  height = 154,
}: CancelBillIllustrationProps) {
  return <SvgXml xml={cancelBillIllustrationXml} width={width} height={height} />;
}
