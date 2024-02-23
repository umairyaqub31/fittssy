import {StyleSheet, Pressable, View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  BorderGradientCard,
  CheckBox,
  PrimaryButton,
  Text,
  Wrapper,
} from '@components';
import {useTheme} from '@react-navigation/native';
import {margin, padding, RF} from '@theme';
import {planData} from '@utils';
import {navigate} from '@services';

const SelectPlan = () => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  const [selected, setSelected] = useState('');
  const [list, setList] = useState('');
  const handleSelect = (item: any) => {
    setList(item);
    setSelected(item.title);
  };
  console.log(list);

  return (
    <Wrapper>
      <Text size={23} semiBold>
        Become premium
      </Text>
      <Text size={16} color={colors.primary} style={margin.top_8}>
        Get unlimited access
      </Text>
      <FlatList
        data={planData}
        renderItem={({item}) => {
          return (
            <Pressable style={margin.top_24} onPress={() => handleSelect(item)}>
              <BorderGradientCard
                bgColor={
                  selected == item.title
                    ? colors.primaryOpacity
                    : colors.background
                }
                colors={
                  selected == item.title
                    ? colors.gradientCard
                    : ['#F0F0F0', '#F0F0F0']
                }
                mainCardStyle={{height: RF(84)}}
                innerStyle={{padding: RF(16)}}>
                <CheckBox
                  disabled={true}
                  selected={selected}
                  item={item.title}
                  renderContent={() => (
                    <View style={padding.left_16}>
                      <Text size={14} semiBold>
                        {item.title}
                      </Text>
                      <Text size={10} style={margin.top_8}>
                        {item.desc}
                      </Text>
                      <View style={styles.priceView}>
                        <Text style={margin.right_4}>£</Text>
                        <Text semiBold>{item.price}</Text>
                        <Text>{item.perplan}</Text>
                      </View>
                    </View>
                  )}
                />
              </BorderGradientCard>
            </Pressable>
          );
        }}
      />
      <PrimaryButton
        containerStyle={{width: 263}}
        onPress={() => navigate('Payment', {plan: list})}
        title={'Subscribe Now'}
      />
    </Wrapper>
  );
};

export default SelectPlan;

const useStyles = (colors: any) =>
  StyleSheet.create({
    checkText: {
      fontSize: RF(18),
      marginLeft: RF(16),
    },
    priceView: {
      position: 'absolute',
      right: 0,
      alignItems: 'center',
      top: 12,
      alignSelf: 'center',
      flexDirection: 'row',
    },
  });
