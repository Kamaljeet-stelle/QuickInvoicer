import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#DFE3E8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingBottom: 12,
    backgroundColor: colors.header,
  },
  statIcon: {
    width: 40,
    height: 40,
  },
  avatarBtn: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameWrap: {
    flex: 1,
    marginLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  headerName: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: fonts.neueHaasBold,
    fontWeight: '700',
    marginHorizontal: 10
  },
  headerActions: {
    flexDirection: 'row',
    gap: 8,
  },
  headerIconBtn: {
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGreen,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 14,
  },
  statsPanel: {
    // borderRadius: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // paddingVertical: 10,
    // paddingHorizontal: 4,
    padding:20,
  },
  statsPanelContainer: {
    backgroundColor: colors.statsPanelContainer,
    width:'100%',
    flexWrap: 'wrap',
    flexDirection:'row',
    padding:15,
    borderRadius:15
  },
  statCell: {
    width: '33.33%',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: colors.whiteColor,
    padding:10,
  },
  statCellNoRightBorder: {
    borderRightWidth: 0,
  },
  statCellNoBottomBorder: {
    borderBottomWidth: 0,
  },
  statIconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  statValue: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: fonts.neueHaasBold,
    fontWeight: '700',
  },
  statLabel: {
    marginTop: 1,
    fontSize: 12,
    color: colors.textColor,
  },
  sectionTitle: {
    margin: 10,
    color: colors.textColor,
    fontSize: 22,
    fontWeight: '800',
  },
  quickGrid: {
    paddingTop: 8,
    paddingHorizontal: 10,
    backgroundColor: '#F4F5F6',
  },
  quickItem: {
    width: '25%',
    alignItems: 'center',
    marginBottom: 14,
  },
  quickCircle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  quickLabel: {
    color: '#1F2937',
    fontSize: 10.5,
    fontWeight: '600',
  },
  allSalesHeader: {
    marginTop: 2,
  },
  saleCard: {
    marginHorizontal: 10,
    backgroundColor: '#F8F8F8',
    borderWidth: 0.3,
    borderColor: colors.borderColor,
    borderRadius: 15,
    marginBottom: 8,
    paddingVertical: 10,
  },
  saleTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 0.2,
    paddingVertical: 10,
    borderBottomColor: colors.borderColor,
    backgroundColor:colors.whiteColor,
  },
  saleClient: {
    fontSize: 20,
    color: colors.textColor,
    fontWeight: '700',
    flex: 1,
    paddingHorizontal: 10,
  },
  saleBadge: {
    backgroundColor: '#1B9A8D',
    paddingHorizontal: 8,
    minHeight: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saleBadgeText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '700',
  },
  saleActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginHorizontal: 10,
  },
  saleBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor:'#F8F8F8',
  },
  saleCaption: {
    color: '#737373',
    fontSize: 16,
    fontWeight: '600',
  },
  saleMeta: {
    color: '#1F2937',
    fontSize: 13,
    fontWeight: '600',
  },
  addNewBtn: {
    borderRadius: 40,
    paddingHorizontal:20,
    paddingVertical: 10,
    marginVertical: 15,
    backgroundColor: colors.red,
  },
  addNewText: {
    color: colors.whiteColor,
    fontSize: 18,
    fontWeight: '700',
  },
  quickGridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  addNewBtnContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  // bottom tab is provided by navigation/BottomTabs.tsx
});
