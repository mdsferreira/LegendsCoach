import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/Colors';
import {moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    padding: moderateScale(20),
  },
  loginBoxTitle: {
    alignSelf: 'center',
    fontWeight: '700',
    fontSize: moderateScale(20),
  },
  title: {
    flexDirection: 'row',
    marginBottom: moderateScale(50),
    alignSelf: 'flex-start',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  newAcountText: {
    flexDirection: 'row',
    marginVertical: moderateScale(50),
    alignSelf: 'center',
  },
});
