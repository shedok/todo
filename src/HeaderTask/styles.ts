import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export const styles = StyleSheet.create({
  headerList: {
    flexDirection: 'row',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textHeaderListNew: {
    color: COLORS.BLUE,
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 17,
    paddingRight: 5,
  },
  containerAlert: {
    flexDirection: 'row',
  },
  textHeaderListCompleted: {
    color: COLORS.PURPLE,
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 17,
  },
  alert: {
    color: COLORS.GRAY_200,
    fontSize: 14,
    fontWeight: 'bold',
  },
  alertView: {
    borderRadius: 20,
    backgroundColor: COLORS.GRAY_400,
    width: 25,
    height: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
