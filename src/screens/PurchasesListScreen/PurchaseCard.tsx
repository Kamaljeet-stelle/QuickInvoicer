/**
 * Purchase list row card.
 * @format
 */

import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  Dimensions,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { HOME_TRANSLATIONS, type HomeTranslationKey } from '../../locales';
import { formatCurrency } from '../../utils/formatCurrency';
import type { PurchaseListItem } from './purchasesListData';
import type { PurchaseMenuItem } from './purchaseMenuData';
import { styles } from './styles';

type AnchorRect = { x: number; y: number; width: number; height: number };

const MENU_WIDTH = 200;
const MENU_GAP = 4;
const SCREEN_PAD = 8;

type PurchaseCardProps = {
  purchase: PurchaseListItem;
  menuItems: PurchaseMenuItem[];
  onMenuItemPress?: (item: PurchaseMenuItem, purchase: PurchaseListItem) => void;
};

function computePopoverPosition(anchor: AnchorRect) {
  const { width: sw, height: sh } = Dimensions.get('window');
  const top = anchor.y + anchor.height + MENU_GAP;
  let left = anchor.x + anchor.width - MENU_WIDTH;
  if (left < SCREEN_PAD) {
    left = SCREEN_PAD;
  }
  if (left + MENU_WIDTH > sw - SCREEN_PAD) {
    left = sw - MENU_WIDTH - SCREEN_PAD;
  }
  const maxMenuHeight = Math.min(360, sh * 0.55);
  return { top, left, width: MENU_WIDTH, maxHeight: maxMenuHeight };
}

function formatPurchaseDisplayDate(d: Date): string {
  const day = d.getDate();
  const month = d.toLocaleString('en-IN', { month: 'short' });
  const yy = String(d.getFullYear()).slice(-2);
  return `${day} ${month}, ${yy}`;
}

export function PurchaseCard({ purchase, menuItems, onMenuItemPress }: PurchaseCardProps) {
  const dotAnchorRef = useRef<View>(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [anchor, setAnchor] = useState<AnchorRect | null>(null);

  const t = useCallback(
    (key: HomeTranslationKey) => HOME_TRANSLATIONS.en[key] ?? key,
    [],
  );

  const popoverStyle = useMemo(() => {
    if (!anchor) {
      return null;
    }
    return computePopoverPosition(anchor);
  }, [anchor]);

  const openMenu = useCallback(() => {
    requestAnimationFrame(() => {
      dotAnchorRef.current?.measureInWindow((x, y, width, height) => {
        setAnchor({ x, y, width, height });
        setMenuVisible(true);
      });
    });
  }, []);

  const closeMenu = useCallback(() => {
    setMenuVisible(false);
    setAnchor(null);
  }, []);

  const amountStr = formatCurrency(purchase.amount, 'INR', 'en-IN');
  const balanceStr = formatCurrency(purchase.balance, 'INR', 'en-IN');

  return (
    <View style={styles.purchaseCard}>
      <View style={styles.purchaseCardTop}>
        <View style={styles.purchaseCardLeft}>
          <Text style={styles.purchaseCardMeta}>
            {t('purchaseIdPrefix')}
            {purchase.purchaseNumber}
          </Text>
          <Text style={styles.purchaseCardName} numberOfLines={1}>
            {purchase.customerName}
          </Text>
          <Text style={styles.purchaseCardContact} numberOfLines={1}>
            {t('invoiceContactPrefix')}
            {purchase.contactMasked}
          </Text>
        </View>
        <View style={styles.purchaseCardRight}>
          <View style={styles.purchaseCardRightRow}>
            <View style={styles.purchasePaidBadge}>
              <Text style={styles.purchasePaidBadgeText}>{t('invoiceStatusPaid')}</Text>
            </View>
            <View ref={dotAnchorRef} collapsable={false}>
              <TouchableOpacity
                style={styles.purchaseCardIconBtn}
                onPress={openMenu}
                accessibilityRole="button"
                accessibilityLabel={t('invoiceMoreA11y')}
                hitSlop={{ top: 8, bottom: 8, left: 4, right: 4 }}>
                <MaterialDesignIcons name="dots-vertical" size={22} color="#666666" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.purchaseCardDivider} />

      <View style={styles.purchaseCardSummary}>
        <View style={styles.purchaseCardSummaryCol}>
          <Text style={styles.purchaseCardSummaryLabel}>{t('dateLabel')}</Text>
          <Text style={styles.purchaseCardSummaryValue}>
            {formatPurchaseDisplayDate(purchase.date)}
          </Text>
        </View>
        <View style={styles.purchaseCardSummaryCol}>
          <Text style={styles.purchaseCardSummaryLabel}>{t('purchaseAmountLabel')}</Text>
          <Text style={styles.purchaseCardSummaryValue} numberOfLines={1}>
            {amountStr}
          </Text>
        </View>
        <View style={styles.purchaseCardSummaryCol}>
          <Text style={styles.purchaseCardSummaryLabel}>{t('balanceLabel')}</Text>
          <Text style={styles.purchaseCardSummaryValue} numberOfLines={1}>
            {balanceStr}
          </Text>
        </View>
      </View>

      <Modal
        visible={menuVisible}
        transparent
        animationType="fade"
        onRequestClose={closeMenu}
        statusBarTranslucent>
        <View style={styles.purchaseMenuRoot} pointerEvents="box-none">
          <Pressable style={styles.purchaseMenuBackdrop} onPress={closeMenu} />
          {popoverStyle ? (
            <View
              style={[styles.purchaseMenuPopover, popoverStyle]}
              pointerEvents="box-none">
              <ScrollView
                bounces={false}
                keyboardShouldPersistTaps="handled"
                nestedScrollEnabled
                style={{ maxHeight: popoverStyle.maxHeight }}
                showsVerticalScrollIndicator={menuItems.length > 6}>
                {menuItems.map((item, index) => (
                  <TouchableOpacity
                    key={item.id}
                    activeOpacity={0.7}
                    style={styles.purchaseMenuRow}
                    onPress={() => {
                      onMenuItemPress?.(item, purchase);
                      closeMenu();
                    }}>
                    <Text style={styles.purchaseMenuRowText}>{item.title}</Text>
                    {index < menuItems.length - 1 ? (
                      <View style={styles.purchaseMenuRowDivider} />
                    ) : null}
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          ) : null}
        </View>
      </Modal>
    </View>
  );
}
