import { StyleSheet } from 'react-native';

export const DRAWER_WIDTH = 270;

export const styles = StyleSheet.create({
  drawer: {
    width: DRAWER_WIDTH,
    height: '100%',
    backgroundColor: '#152630',
    borderRightWidth: 1,
    borderRightColor: '#1F3442',
  },
  drawerHeader: {
    minHeight: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    marginBottom: 8,
  },
  drawerTitle: {
    color: '#DDE8F1',
    fontSize: 16,
    fontWeight: '700',
  },
  drawerClose: {
    color: '#2E6AF5',
    fontSize: 28,
  },
  drawerItem: {
    minHeight: 46,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#29404F',
  },
  drawerItemIcon: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  drawerItemText: {
    color: '#FFFFFF',
    fontSize: 16.5,
    fontWeight: '500',
  },
});
