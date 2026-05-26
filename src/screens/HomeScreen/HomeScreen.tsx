/**
 * Home dashboard screen aligned to latest mobile reference.
 * @format
 */

import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback } from 'react';
import type { RootStackParamList } from '../../types/navigation';
import { Image, ImageBackground, Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { HOME_TRANSLATIONS, type HomeTranslationKey } from '../../locales';
import { QUICK_LINKS, SALES_CARDS, TOP_STATS } from './homeDashboardData';
import { styles } from './styles';
import { images } from '../../theme/images';
import { Header } from '../../components/common/Header';
import { AppButton } from '../../components/common/AppButton';
import { colors } from '../../theme/colors';

type HomeScreenProps = {
  onCreateInvoice?: () => void;
};

export function HomeScreen({ onCreateInvoice }: HomeScreenProps = {}) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const insets = useSafeAreaInsets();

  const openCreateInvoice = useCallback(() => {
    if (onCreateInvoice) {
      onCreateInvoice();
    } else {
      navigation.navigate('CreateInvoice');
    }
  }, [navigation, onCreateInvoice]);

  const t = useCallback(
    (key: HomeTranslationKey) => HOME_TRANSLATIONS.en[key] ?? key,
    [],
  );

  return (
    <View style={styles.root}>
      <Header isUserLoggedIn={true} />
      <ScrollView
        style={styles.content}
        bounces={false}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <ImageBackground source={images.LinearBG} style={styles.statsPanel}>
          <View style={styles.statsPanelContainer}>
            {TOP_STATS.map((row, index) => {
              const isLastColumn = index % 3 === 2;
              const isLastRow = index >= TOP_STATS.length - 3;
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

        <View style={styles.quickGrid}>
          <Text style={styles.sectionTitle}>{t('quickLinkTitle')}</Text>
          <View style={styles.quickGridContainer}>
            {QUICK_LINKS.map(item => (
              <View key={item.key} style={styles.quickItem}>
                <View style={[styles.quickCircle, { backgroundColor: item.bg }]}>
                  <MaterialDesignIcons name={item.icon} size={30} color={item.iconColor} />
                </View>
                <Text style={styles.quickLabel}>{t(item.labelKey)}</Text>
              </View>
            ))}
          </View>

        </View>

        <View style={styles.allSalesHeader}>
          <Text style={styles.sectionTitle}>{t('allSalesTitle')}</Text>
        </View>
        {SALES_CARDS.map(card => (
          <View key={card.id} style={styles.saleCard}>
            <View style={styles.saleTop}>
              <Text style={styles.saleClient}>{card.clientName}</Text>
              <View style={styles.saleBadge}>
                <Text style={styles.saleBadgeText}>{t('saleStatus')}</Text>
              </View>
              <View style={styles.saleActions}>
                <MaterialDesignIcons name="printer-outline" size={22} color={colors.lightGrey} />
                <MaterialDesignIcons name="share-variant-outline" size={22} color={colors.lightGrey} />
                <MaterialDesignIcons name="dots-vertical" size={22} color={colors.lightGrey} />
              </View>
            </View>
            <View style={styles.saleBottom}>
              <View>
                <Text style={styles.saleCaption}>{card.id}</Text>
                <Text style={styles.saleMeta}>20 Feb, 25</Text>
              </View>
              <View>
                <Text style={styles.saleCaption}>{t('totalLabel')}</Text>
                <Text style={styles.saleMeta}>Rs.0.00</Text>
              </View>
              <View>
                <Text style={styles.saleCaption}>{t('balanceLabel')}</Text>
                <Text style={styles.saleMeta}>Rs.0.00</Text>
              </View>
            </View>
          </View>
        ))}

        <View style={styles.addNewBtnContainer}>
          <AppButton
            title={t('addNew')}
            onPress={openCreateInvoice}
            style={styles.addNewBtn}
            textStyle={styles.addNewText} />
        </View>


      </ScrollView>
    </View>
  );
}
