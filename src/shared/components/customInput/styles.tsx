import {StyleSheet} from 'react-native';
import {RF} from '@theme';
const useStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    InputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: '#1A3D7C',
    },
    label: {
      fontWeight: 'bold',
    },
    input: {
      flex: 1,
      color: '#1A3D7C',
      alignItems: 'center',
    },
    errorInput: {
      borderColor: 'red',
    },
    errorText: {
      color: 'red',
      fontSize: RF(12),
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '500',
    },
  });

export default useStyles;
