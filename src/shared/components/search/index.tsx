import {RF} from '@theme';
import React from 'react';
import {search} from '@assets';
import {useTheme} from '@react-navigation/native';
import {Image, Pressable, StyleSheet, TextInput} from 'react-native';

const Search = ({onSubmitEditing}: {onSubmitEditing?: any}) => {
  const theme: any = useTheme();
  const styles = useStyles(theme.colors);

  return (
    <Pressable style={styles.main}>
      <TextInput
        placeholder="Search"
        style={styles.input}
        onSubmitEditing={onSubmitEditing}
        placeholderTextColor={theme?.colors?.grey}
      />
      <Image source={search} style={styles.img} />
    </Pressable>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    main: {
      borderWidth: 1,
      height: RF(48),
      width: '100%',
      borderRadius: 35,
      // marginHorizontal: RF(25),
      marginVertical: RF(20),
      borderColor: colors?.lightGray,
      flexDirection: 'row',
      alignItems: 'center',
    },
    img: {
      width: RF(20),
      height: RF(20),
    },
    input: {
      fontSize: RF(14),
      fontWeight: '600',
      marginLeft: RF(20),
      width: '80%',
      color: colors.text,
    },
  });
export default Search;
