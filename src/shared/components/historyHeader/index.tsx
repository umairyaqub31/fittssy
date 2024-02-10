import {StyleSheet, View} from 'react-native';
import React from 'react';
import Text from '../text';
import {useTheme} from '@react-navigation/native';

interface Props {
  title?: any;
}

const HistoryHeader = (props: Partial<Props>) => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  const {title} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.titleText} size={18} regular>
        {title}
      </Text>
    </View>
  );
};

export default HistoryHeader;

const useStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderColor: colors.primary,
    },
    titleText: {
      color: colors.primary,
    },
  });
