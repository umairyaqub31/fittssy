import {RF} from '@theme';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

const ToggleButton = ({toggle, onToggle}: {toggle?: any; onToggle?: any}) => {
  const theme: any = useTheme();
  const styles = useStyles(theme);

  return (
    <Pressable
      style={[
        styles.main,
        {borderColor: toggle ? theme?.colors?.primary : theme?.colors?.gray},
      ]}
      onPress={onToggle}>
      {toggle ? <View style={styles.inner} /> : null}
    </Pressable>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    main: {
      width: RF(22),
      height: RF(22),
      borderWidth: 1,

      borderRadius: 100,
      marginVertical: RF(20),
      alignItems: 'center',
      justifyContent: 'center',
    },
    inner: {
      width: RF(12),
      height: RF(12),
      borderRadius: 100,

      backgroundColor: colors?.colors?.primary,
    },
  });

export default ToggleButton;
