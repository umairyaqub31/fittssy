import {RF} from '@theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  txt: {
    marginTop: RF(20),
    fontWeight: '600',
    fontSize: RF(14),
  },
  view: {
    marginLeft: RF(25),
  },
  ml: {
    marginLeft: RF(20),
    marginTop: RF(20),
  },
  btn: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  txtView: {
    width: RF(126),
    height: RF(43),
    backgroundColor: '#36D8AA',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
