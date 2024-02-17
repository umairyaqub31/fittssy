import React from 'react';
import {View, Modal, ScrollView} from 'react-native';
import {padding} from '@theme';
import {AddButton, SwipeHeader, Text, Wrapper} from '@components';
import {useTheme} from '@react-navigation/native';
import useStyles from './styles';
import {navigate} from '@services';
import HomeTopTabs from '../../../routes/tabs/homeTopTabs';

const Home = () => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  const handleCreateNew = () => {
    navigate('CreateNew', '');
  };
  return (
    <Wrapper isTop isPaddingH>
      <SwipeHeader />
      <View style={padding.Horizontal_20}>
        <View style={styles.text}>
          <Text size={22} regular color={colors.text}>
            Welcome back,
          </Text>
          <Text size={24} semiBold color={colors.primary}>
            Sarah!
          </Text>
        </View>
      </View>
      <HomeTopTabs />
      <View style={styles.buttonView}>
        <AddButton center title={'Create New'} onPress={handleCreateNew} />
      </View>
    </Wrapper>
  );
};

export default Home;
