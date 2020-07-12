import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/Colors';
import {moderateScale} from 'react-native-size-matters';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    // flexDirection: 'column',
    // alignContent: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  modalScreen: {
    bottom: 0,
    position: 'absolute',
    height: '60%',
    backgroundColor: Colors.primary.main,
    width: width,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  indicator: {
    width: 50,
    height: 20,
    backgroundColor: Colors.primary.light,
    borderRadius: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    marginTop: -25,
  },
  loginBoxTitle: {
    alignSelf: 'center',
    fontWeight: '700',
    fontSize: moderateScale(20),
  },
  title: {
    flexDirection: 'row',
    marginVertical: moderateScale(70),
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  newAcountText: {
    flexDirection: 'column',
    marginVertical: moderateScale(20),
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 200,
    // width: width,
  },
  errorText: {
    color: 'red',
    marginLeft: moderateScale(10),
  },
  buttonsContainer: {
    width: '100%',
    height: 250,
    justifyContent: 'space-between',
  },
  socialContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  socialButton: {
    backgroundColor: Colors.primary.light,
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 10,
  },
});
