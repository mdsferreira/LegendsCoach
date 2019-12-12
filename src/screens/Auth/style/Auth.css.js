import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

export const styles = StyleSheet.create({
  loginBoxTitle: {
    alignSelf: 'center',
    fontWeight: '700',
    fontSize: 20,
  },
  title: {
    flexDirection: 'row',
    marginBottom: 50,
    // alignSelf: 'flex-start',
  },
  titleText: {
    color: Colors.gold,
    fontFamily: 'monospace',
    fontWeight: '700',
    fontSize: 30,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  newAcountText: {
    flexDirection: 'row',
    marginVertical: 50,
  },
});
