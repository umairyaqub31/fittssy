import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {
  AddButton,
  HistoryHeader,
  PlanBox,
  PrimaryButton,
  Text,
  Wrapper,
} from '@components';
import {plan} from '@utils';
import {useTheme} from '@react-navigation/native';
import {flex, margin, RF} from '@theme';
import {copy} from '@assets';
import {navigate} from '@services';

const MyPlans = () => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const [select, setSelect] = useState('All');

  const handleCreateNew = () => {
    navigate('CreateNew', '');
  };
  const handleCopyPrevious = () => {};

  return (
    <Wrapper>
      <HistoryHeader title={'MyPlans'} />
      <View style={[flex.rowCenter, margin.Vertical_16, {gap: RF(40)}]}>
        <Text
          color={select == 'Current' ? colors.primary : colors.grayText}
          onPress={() => setSelect('Current')}>
          Current
        </Text>
        <Text
          onPress={() => setSelect('All')}
          color={select == 'All' ? colors.primary : colors.grayText}>
          All
        </Text>
      </View>
      <PrimaryButton
        title={'Create Personal Workout Plan'}
        textColor={colors.white}
      />

      <View style={margin.top_20}>
        <FlatList
          data={plan}
          style={{height: '58%'}}
          renderItem={({item, index}: any) => {
            return (
              <PlanBox
                label={item?.label}
                description={item?.description}
                status={item?.status}
              />
            );
          }}
        />
      </View>
      <View style={[flex.rowCenter, {gap: RF(60)}]}>
        <AddButton title={'Create New'} onPress={handleCreateNew} />
        <AddButton
          title={'Copy Previous'}
          source={copy}
          onPress={handleCopyPrevious}
        />
      </View>
    </Wrapper>
  );
};

export default MyPlans;

const styles = StyleSheet.create({});
