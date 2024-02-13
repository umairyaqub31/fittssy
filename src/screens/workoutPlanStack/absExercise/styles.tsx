import {RF} from '@theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: RF(30),
  },
  img: {width: RF(6), height: RF(12)},
  view: {
    marginTop: RF(10),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  txtView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: RF(40),
    marginTop: RF(20),
  },
  m: {
    width: RF(20),
    height: RF(2),
  },
  p: {
    width: RF(20),
    height: RF(10),
  },
  innerView: {
    width: RF(44),
    height: RF(44),
    borderWidth: 1,
    marginTop: RF(40),
    borderRadius: 100,
    alignItems: 'center',
    marginBottom: RF(10),
    borderColor: '#D1D1D1',
    justifyContent: 'center',
  },
  line: {
    height: 1,
    backgroundColor: '#EAEAEA',
    marginTop: RF(10),
  },
});

export default styles;
