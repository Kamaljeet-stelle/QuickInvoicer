import React from 'react';
import { Animated, Pressable, ScrollView, Text, View } from 'react-native';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { styles } from './styles';

type DrawerIconName = React.ComponentProps<typeof MaterialDesignIcons>['name'];

export type DrawerItem = {
  key: string;
  label: string;
  icon: DrawerIconName;
};

type DrawerScreenProps = {
  topPadding: number;
  translateX: Animated.Value;
  title: string;
  closeLabel: string;
  items: DrawerItem[];
  onClose: () => void;
  onSelectItem: (key: string) => void;
};

export function DrawerScreen({
  topPadding,
  translateX,
  title,
  closeLabel,
  items,
  onClose,
  onSelectItem,
}: DrawerScreenProps) {
  return (
    <Animated.View
      style={[
        styles.drawer,
        { paddingTop: topPadding, transform: [{ translateX }] },
      ]}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerTitle}>{title}</Text>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={closeLabel}
          onPress={onClose}
          hitSlop={10}>
          <MaterialDesignIcons name="close" style={styles.drawerClose} />
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {items.map(item => (
          <Pressable
            key={item.key}
            style={styles.drawerItem}
            onPress={() => onSelectItem(item.key)}>
            <View style={styles.drawerItemIcon}>
              <MaterialDesignIcons name={item.icon} size={19} color="#FFFFFF" />
            </View>
            <Text style={styles.drawerItemText}>{item.label}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </Animated.View>
  );
}
