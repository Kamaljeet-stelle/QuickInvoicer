import React, { useMemo, useState } from 'react';
import {
  Animated,
  I18nManager,
  StyleSheet,
  TextInput,
  View,
  type StyleProp,
  type TextInputProps,
  type ViewStyle,
} from 'react-native';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

type FloatingLabelInputProps = {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  inputRef?: React.RefObject<TextInput | null>;
  error?: boolean;
  rightAccessory?: React.ReactNode;
  backgroundColor?: string;
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
  ...inputProps
}: FloatingLabelInputProps) {
  const [isFocused, setIsFocused] = useState(false);
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
      <View style={[styles.shell, error ? styles.shellError : null]}>
        <Animated.Text
          style={[
            styles.label,
            {
              top: labelTop,
              fontSize: labelFontSize,
              color: labelColor,
              backgroundColor: backgroundColor,
            },
          ]}>
          {label}
        </Animated.Text>
        <TextInput
          ref={inputRef}
          style={[styles.input, I18nManager.isRTL ? styles.inputRtl : styles.inputLtr]}
          hitSlop={8}
          value={value}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={isFloating ? '' : label}
          placeholderTextColor="transparent"
          {...inputProps}
        />
        {rightAccessory ?
          <View style={styles.rightAccessory}>
            {rightAccessory}
          </View> : null}
      </View>
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
  inputLtr: {
    textAlign: 'left',
  },
  inputRtl: {
    textAlign: 'right',
  },
  rightAccessory: {
    paddingRight: 10,
  },
});
