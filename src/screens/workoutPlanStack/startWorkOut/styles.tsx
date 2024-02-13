import {RF} from '@theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {alignItems: 'center', justifyContent: 'center'},
  viewBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: RF(20),
    justifyContent: 'space-between',
  },
  image: {height: RF(444), width: '100%'},
  img: {width: RF(290), height: RF(434), marginTop: RF(20)},
  container: {
    marginTop: RF(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
