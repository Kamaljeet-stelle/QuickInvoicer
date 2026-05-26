/**
 * Label + tappable row that opens the system date calendar (Android dialog / iOS sheet).
 * @format
 */

import React, { useCallback, useMemo, useState } from 'react';
import {
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { formatDdMmYyyy, parseDdMmYyyy } from '../../utils/ddMmYyyyDate';

type DateTimePickerModule = typeof import('@react-native-community/datetimepicker');

type FormLabeledDateInputProps = {
  label: string;
  value: string;
  placeholder: string;
  onChange: (ddMmYyyy: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  /** Screen reader label for the calendar trigger */
  calendarAccessibilityLabel: string;
  /** iOS modal primary action */
  doneLabel: string;
  dismissSheetAccessibilityLabel: string;
};

export function FormLabeledDateInput({
  label,
  value,
  placeholder,
  onChange,
  containerStyle,
  calendarAccessibilityLabel,
  doneLabel,
  dismissSheetAccessibilityLabel,
}: FormLabeledDateInputProps) {
  const pickerMod = useMemo((): DateTimePickerModule => {
    // Lazy require avoids Metro/Hermes init ordering issues that can leave this file's exports undefined.
    return require('@react-native-community/datetimepicker');
  }, []);

  const DateTimePicker = pickerMod.default;
  const { DateTimePickerAndroid } = pickerMod;

  const [iosOpen, setIosOpen] = useState(false);
  const [iosPending, setIosPending] = useState(() => parseDdMmYyyy(value) ?? new Date());

  const openPicker = useCallback(() => {
    const base = parseDdMmYyyy(value) ?? new Date();

    if (Platform.OS === 'android') {
      DateTimePickerAndroid.open({
        value: base,
        mode: 'date',
        display: 'default',
        onValueChange: (_e, selected) => {
          onChange(formatDdMmYyyy(selected));
        },
      });
      return;
    }

    setIosPending(base);
    setIosOpen(true);
  }, [DateTimePickerAndroid, onChange, value]);

  const commitIos = useCallback(() => {
    onChange(formatDdMmYyyy(iosPending));
    setIosOpen(false);
  }, [iosPending, onChange]);

  const dismissIos = useCallback(() => {
    setIosOpen(false);
  }, []);

  const displayText = value.trim() ? value : placeholder;
  const isPlaceholder = !value.trim();

  return (
    <View style={[styles.wrap, containerStyle]}>
      {/* <Text style={styles.label}>{label}</Text> */}
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={calendarAccessibilityLabel}
        onPress={openPicker}
        style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}>
        <Text style={[styles.valueText, isPlaceholder && styles.placeholderText]} numberOfLines={1}>
          {displayText}
        </Text>
        <MaterialDesignIcons name="calendar-month-outline" size={22} color="#143B8A" />
      </Pressable>

      {Platform.OS === 'ios' ? (
        <Modal visible={iosOpen} animationType="slide" transparent onRequestClose={dismissIos}>
          <View style={styles.modalBackdrop}>
            <Pressable
              style={styles.modalBackdropHit}
              onPress={dismissIos}
              accessibilityLabel={dismissSheetAccessibilityLabel}
            />
            <View style={styles.modalSheet}>
              <DateTimePicker
                value={iosPending}
                mode="date"
                display="inline"
                onValueChange={(_e, d) => setIosPending(d)}
                themeVariant="light"
              />
              <Pressable style={styles.doneBtn} onPress={commitIos}>
                <Text style={styles.doneBtnText}>{doneLabel}</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      ) : null}
    </View>
  );
}

export default FormLabeledDateInput;

const styles = StyleSheet.create({
  wrap: {
    marginBottom: 12,
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    color: '#4B5563',
    textTransform: 'uppercase',
    marginBottom: 6,
    letterSpacing: 0.3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 10,
    minHeight: 58,
  },
  rowPressed: {
    opacity: 0.88,
  },
  valueText: {
    flex: 1,
    fontSize: 15,
    color: '#111827',
    marginRight: 8,
  },
  placeholderText: {
    color: '#9CA3AF',
  },
  modalBackdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  modalBackdropHit: {
    flex: 1,
  },
  modalSheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    paddingBottom: 24,
    paddingTop: 8,
  },
  doneBtn: {
    marginHorizontal: 16,
    marginTop: 8,
    backgroundColor: '#143B8A',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  doneBtnText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
});
