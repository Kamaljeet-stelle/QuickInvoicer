/**
 * Invoice list row matching dashboard invoice card layout.
 * @format
 */

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
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

import { HOME_TRANSLATIONS, type HomeTranslationKey } from '../../locales';
import { formatCurrency } from '../../utils/formatCurrency';
import { styles } from './styles';

export type InvoiceListItem = {
  id: string;
  invoiceNumber: string;
  customerName: string;
  contactMasked: string;
  date: Date;
  total: number;
  balance: number;
  status: 'paid';
};

export type InvoiceMenuItem = {
  id: string;
  title: string;
};

type AnchorRect = { x: number; y: number; width: number; height: number };

const MENU_WIDTH = 200;
const MENU_GAP = 4;
const SCREEN_PAD = 8;

type InvoiceCardProps = {
  invoice: InvoiceListItem;
  menuItems: InvoiceMenuItem[];
  onMenuItemPress?: (item: InvoiceMenuItem) => void;
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

export function InvoiceCard({ invoice, menuItems, onMenuItemPress }: InvoiceCardProps) {
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

  const totalStr = formatCurrency(invoice.total, 'INR', 'en-IN');
  const balanceStr = formatCurrency(invoice.balance, 'INR', 'en-IN');

  return (
    <View style={styles.invoiceCard}>
      <View style={styles.invoiceCardTop}>
        <View style={styles.invoiceCardLeft}>
          <Text style={styles.invoiceCardMeta}>
            {t('invoiceIdPrefix')}
            {invoice.invoiceNumber}
          </Text>
          <Text style={styles.invoiceCardName} numberOfLines={1}>
            {invoice.customerName}
          </Text>
          <Text style={styles.invoiceCardContact} numberOfLines={1}>
            {t('invoiceContactPrefix')}
            {invoice.contactMasked}
          </Text>
        </View>
        <View style={styles.invoiceCardRight}>
          <View style={styles.invoiceCardActions}>
            <TouchableOpacity
              style={styles.invoiceCardIconBtn}
              accessibilityRole="button"
              accessibilityLabel={t('invoicePrintA11y')}
              hitSlop={{ top: 8, bottom: 8, left: 4, right: 4 }}>
              <MaterialDesignIcons name="printer" size={20} color="#666666" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.invoiceCardIconBtn}
              accessibilityRole="button"
              accessibilityLabel={t('invoiceShareA11y')}
              hitSlop={{ top: 8, bottom: 8, left: 4, right: 4 }}>
              <MaterialDesignIcons name="share-variant" size={20} color="#666666" />
            </TouchableOpacity>
            <View ref={dotAnchorRef} collapsable={false}>
              <TouchableOpacity
                onPress={openMenu}
                style={styles.invoiceCardIconBtn}
                accessibilityRole="button"
                accessibilityLabel={t('invoiceMoreA11y')}
                hitSlop={{ top: 8, bottom: 8, left: 4, right: 4 }}>
                <MaterialDesignIcons name="dots-vertical" size={20} color="#666666" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.invoicePaidBadge}>
            <Text style={styles.invoicePaidBadgeText}>{t('invoiceStatusPaid')}</Text>
          </View>
        </View>
      </View>

      <View style={styles.invoiceCardDivider} />

      <View style={styles.invoiceCardSummary}>
        <View>
          <Text style={styles.invoiceCardSummaryLabel}>{t('dateLabel')}</Text>
          <Text style={styles.invoiceCardSummaryValue}>
            {formatInvoiceDisplayDate(invoice.date)}
          </Text>
        </View>
        <View>
          <Text style={styles.invoiceCardSummaryLabel}>{t('totalLabel')}</Text>
          <Text style={styles.invoiceCardSummaryValue} numberOfLines={1}>
            {totalStr}
          </Text>
        </View>
        <View>
          <Text style={styles.invoiceCardSummaryLabel}>{t('balanceLabel')}</Text>
          <Text style={styles.invoiceCardSummaryValue} numberOfLines={1}>
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
        <View style={styles.invoiceMenuRoot} pointerEvents="box-none">
          <Pressable style={styles.invoiceMenuBackdrop} onPress={closeMenu} />
          {popoverStyle ? (
            <View
              style={[styles.invoiceMenuPopover, popoverStyle]}
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
                    style={styles.invoiceMenuRow}
                    onPress={() => {
                      onMenuItemPress?.(item);
                      closeMenu();
                    }}>
                    <Text style={styles.invoiceMenuRowText}>{item.title}</Text>
                    {index < menuItems.length - 1 ? (
                      <View style={styles.invoiceMenuRowDivider} />
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

function formatInvoiceDisplayDate(d: Date): string {
  const day = d.getDate();
  const month = d.toLocaleString('en-IN', { month: 'short' });
  const yy = String(d.getFullYear()).slice(-2);
  return `${day} ${month}, ${yy}`;
}
