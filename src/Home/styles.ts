import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.GRAY_600,
  },
  subContainer: {
    backgroundColor: COLORS.GRAY_700,
    height: 173,
  },
  input: {
    flex: 1,
    backgroundColor: COLORS.GRAY_500,
    height: 54,
    borderRadius: 5,
    color: COLORS.GRAY_100,
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  form: {
    with: '100%',
    flexDirection: 'row',
    padding: 24,
    marginTop: 40,
  },
  logo: {
    flex: 1,
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: COLORS.BLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerList: {
    flexDirection: 'row',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
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
    with: '100%',
    borderRadius: 20,
    backgroundColor: COLORS.GRAY_400,
    width: 25,
    height: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyTextTitle: {
    color: COLORS.GRAY_300,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 16,
  },
  emptyTextSubTitle: {
    color: COLORS.GRAY_300,
    textAlign: 'center',
    fontSize: 14,
  },
  line: {
    height: 2,
    backgroundColor: COLORS.GRAY_500,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
  },
});
