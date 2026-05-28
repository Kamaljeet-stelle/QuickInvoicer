import React, { useMemo, useState } from 'react';
import {
  Animated,
  I18nManager,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  type StyleProp,
  type TextInputProps,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

type FloatingLabelInputProps = {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  inputRef?: React.RefObject<TextInput | null>;
  error?: boolean;
  rightAccessory?: React.ReactNode;
  backgroundColor?: string;
  fieldStyle?: StyleProp<TextStyle>;
  /** When true, field is press-only (no keyboard) — use with dropdown accessory. */
  isDropdown?: boolean;
  /** Renders a menu below the field when set (takes precedence over onDropdownPress). */
  dropdownOptions?: readonly string[];
  onDropdownPress?: () => void;
  textStyle?: StyleProp<TextStyle>;
} & Omit<TextInputProps, 'style' | 'value' | 'onChangeText' | 'placeholder'>;

export function FloatingLabelInput({
  label,
  value,
  onChangeText,
  containerStyle,
  inputRef,
  error = false,
  rightAccessory,
  onFocus,
  onBlur,
  backgroundColor = '#FFFFFF',
  fieldStyle,
  isDropdown = false,
  dropdownOptions,
  onDropdownPress,
  textStyle,
  ...inputProps
}: FloatingLabelInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const floatProgress = useMemo(() => new Animated.Value(value ? 1 : 0), []);
  const isFloating = isFocused || Boolean(value);

  const animateLabel = (toValue: 0 | 1) => {
    Animated.timing(floatProgress, {
      toValue,
      duration: 170,
      useNativeDriver: false,
    }).start();
  };

  const handleFocus: TextInputProps['onFocus'] = e => {
    setIsFocused(true);
    animateLabel(1);
    onFocus?.(e);
  };

  const handleBlur: TextInputProps['onBlur'] = e => {
    setIsFocused(false);
    if (!value) {
      animateLabel(0);
    }
    onBlur?.(e);
  };

  const hasInlineDropdown = Boolean(isDropdown && dropdownOptions?.length);

  const handleDropdownPress = () => {
    setIsFocused(true);
    animateLabel(1);
    if (hasInlineDropdown) {
      setDropdownVisible(open => !open);
      return;
    }
    onDropdownPress?.();
  };

  const handleSelectOption = (option: string) => {
    onChangeText(option);
    setDropdownVisible(false);
    setIsFocused(true);
    animateLabel(1);
  };

  const labelTop = floatProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [14, -10],
  });

  const labelFontSize = floatProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [13, 11],
  });

  const labelColor = error ? colors.red : colors.greyColor;

  return (
    <View style={[styles.container, containerStyle]}>
      <View
        style={[
          styles.shell,
          inputProps.multiline ? styles.shellMultiline : null,
          error ? styles.shellError : null,
        ]}>
        <Animated.Text
          style={[
            styles.label,
            {
              top: labelTop,
              fontSize: labelFontSize,
              color: labelColor,
              backgroundColor: backgroundColor,
            },
            fieldStyle,
          ]}>
          {label}
        </Animated.Text>

        {isDropdown ? (
          <Pressable
            style={styles.dropdownPressable}
            onPress={handleDropdownPress}
            accessibilityRole="button"
            accessibilityLabel={label}
            accessibilityState={{ expanded: dropdownVisible || isFocused }}>
            <Text
              style={[
                styles.input,
                styles.dropdownValue,
                I18nManager.isRTL ? styles.inputRtl : styles.inputLtr,
              ]}
              numberOfLines={1}>
              {value || (isFloating ? '' : '')}
            </Text>
            {rightAccessory ? (
              <View style={styles.rightAccessory}>{rightAccessory}</View>
            ) : null}
          </Pressable>
        ) : (
          <>
            <TextInput
              ref={inputRef}
              style={[
                styles.input,
                inputProps.multiline ? styles.inputMultiline : null,
                I18nManager.isRTL ? styles.inputRtl : styles.inputLtr,
                textStyle,
              ]}
              hitSlop={8}
              value={value}
              onChangeText={onChangeText}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder={isFloating ? '' : label}
              placeholderTextColor="transparent"
              {...inputProps}
            />
            {rightAccessory ? (
              <View style={styles.rightAccessory}>{rightAccessory}</View>
            ) : null}
          </>
        )}
      </View>

      {hasInlineDropdown && dropdownVisible ? (
        <View style={styles.dropdownMenu}>
          {dropdownOptions!.map((option, index) => {
            const selected = value === option;
            const isLast = index === dropdownOptions!.length - 1;
            return (
              <Pressable
                key={option}
                style={[
                  styles.dropdownItem,
                  isLast && styles.dropdownItemLast,
                  selected && styles.dropdownItemSelected,
                ]}
                onPress={() => handleSelectOption(option)}
                accessibilityRole="menuitem"
                accessibilityState={{ selected }}>
                <Text
                  style={[
                    styles.dropdownItemText,
                    selected && styles.dropdownItemTextSelected,
                  ]}>
                  {option}
                </Text>
              </Pressable>
            );
          })}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  shell: {
    minHeight: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#C9CDD4',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  shellMultiline: {
    minHeight: 88,
    alignItems: 'flex-start',
    paddingTop: 12,
  },
  shellError: {
    borderColor: colors.red,
  },
  label: {
    position: 'absolute',
    left: 20,
    paddingHorizontal: 6,
    backgroundColor: '#FFFFFF',
    fontFamily: fonts.neueHaasRoman,
    zIndex: 1,
  },
  input: {
    flex: 1,
    fontSize: 33 / 1.8,
    color: colors.textColor,
    fontFamily: fonts.neueHaasRoman,
    paddingVertical: 10,
  },
  inputMultiline: {
    minHeight: 72,
    textAlignVertical: 'top',
    paddingTop: 12,
  },
  dropdownPressable: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 50,
  },
  dropdownValue: {
    paddingVertical: 10,
  },
  inputLtr: {
    textAlign: 'left',
  },
  inputRtl: {
    textAlign: 'right',
  },
  rightAccessory: {
    paddingRight: 10,
  },
  dropdownMenu: {
    marginTop: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C9CDD4',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    zIndex: 10,
  },
  dropdownItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E7EB',
  },
  dropdownItemLast: {
    borderBottomWidth: 0,
  },
  dropdownItemSelected: {
    backgroundColor: '#E6F7F5',
  },
  dropdownItemText: {
    fontSize: 16,
    color: colors.textColor,
    fontFamily: fonts.neueHaasRoman,
  },
  dropdownItemTextSelected: {
    fontFamily: fonts.neueHaasBold,
    fontWeight: '600',
    color: colors.header,
  },
});
