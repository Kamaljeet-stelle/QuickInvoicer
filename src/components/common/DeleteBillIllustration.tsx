import React from 'react';
import { SvgXml } from 'react-native-svg';
import { deleteBillIllustrationXml } from '../../assets/svg/deleteBillIllustrationXml';

type DeleteBillIllustrationProps = {
  width?: number;
  height?: number;
};

export function DeleteBillIllustration({
  width = 150,
  height = 130,
}: DeleteBillIllustrationProps) {
  return <SvgXml xml={deleteBillIllustrationXml} width={width} height={height} />;
}
