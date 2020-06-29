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
  inputContainer: {
    alignSelf: 'center',
    fontSize: moderateScale(20),
    backgroundColor: Colors.secondary.main,
    color: Colors.secondary.contrastText,
    width: '90%',
    marginLeft: 10,
    marginRight: 10,
    height: 50,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleView: {
    flexDirection: 'row',
    marginBottom: moderateScale(50),
    alignSelf: 'flex-start',
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(20),
    backgroundColor: Colors.primary.dark,
    width: '100%',
  },
  titleText: {
    color: Colors.primary.contrastText,
    fontSize: moderateScale(45),
    fontFamily: 'Roboto',
  },
  searchIcon: {
    color: Colors.secondary.contrastText,
  },
  seriesContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 20,
  },
  seriesInfo: {
    height: 50,
    width: 300,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  seriesName: {
    fontSize: 14,
    color: Colors.text.body,
    fontFamily: 'verdana',
  },
  seriesDescription: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  seriesDescriptionText: {
    fontSize: 20,
    color: Colors.primary.contrastText,
    fontWeight: 'bold',
  },
});
