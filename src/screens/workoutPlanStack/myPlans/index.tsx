import {StyleSheet, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {AllPlan, Current, HistoryHeader, Text, Wrapper} from '@components';
import {useTheme} from '@react-navigation/native';
import {flex, margin, RF} from '@theme';
import {navigate} from '@services';

const MyPlans = () => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const [select, setSelect] = useState('All');
  const [selected, setSelected] = useState<any>();

  const handleCard = (item: any) => {
    setSelected(item.id);
    navigate('StartWorkOut', '');
  };
  return (
    <Wrapper isTop>
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
      {select == 'All' && <AllPlan />}

      {select == 'Current' && (
        <Current onPress={handleCard} selected={selected} />
      )}
    </Wrapper>
  );
};

export default MyPlans;

const styles = StyleSheet.create({
  text: {
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#AEADAD',
    paddingVertical: RF(18),
  },
  fadeView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: RF(20),
    justifyContent: 'flex-end',
  },
  card: {
    backgroundColor: '#fff',
    paddingTop: RF(12),
    borderRadius: 12,
    marginTop: RF(8),
  },
});
