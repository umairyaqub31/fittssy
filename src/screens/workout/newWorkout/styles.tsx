import {RF} from '@theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  pImg: {
    width: RF(30),
    height: RF(30),
  },
  outerView: {alignItems: 'center', flex: 1},
  innerView: {
    width: RF(58),
    height: RF(58),
    borderWidth: 1,
    marginTop: RF(40),
    borderRadius: 100,
    alignItems: 'center',
    marginBottom: RF(10),
    borderColor: '#D1D1D1',
    justifyContent: 'center',
  },
  btnView: {
    justifyContent: 'flex-end',
    flex: 1,
  },
});

export default styles;
