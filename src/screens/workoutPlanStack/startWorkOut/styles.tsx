import {RF} from '@theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {alignItems: 'flex-end', justifyContent: 'center', height: RF(450)},
  viewBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: RF(20),
    justifyContent: 'space-between',
  },
  image: {width: '100%', marginTop: RF(-50)},
  img: {
    width: '100%',
    height: '90%',
    alignSelf: 'baseline',
    resizeMode: 'contain',
  },
  container: {
    marginTop: RF(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
