import {StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import {BackHeader, CheckBox, Line, Wrapper} from '@components';
import {margin} from '@theme';

const data = [
  {id: 0, title: 'Google Pixel Watch'},
  {id: 1, title: 'Apple Watch'},
  {id: 2, title: 'Samsung Watch'},
];

const ThirdParty = ({navigation}: any) => {
  const [selected, setSelected] = useState('');

  const onPress = (title: any) => {
    console.log(title, '.....title');
    setSelected(title);
  };

  return (
    <Wrapper isTop>
      <BackHeader
        title={'Connect 3rd party'}
        startIcon
        navigation={navigation}
      />
      <FlatList
        data={data}
        style={margin.top_32}
        renderItem={({item}: any) => (
          <>
            <CheckBox
              title={item.title}
              selected={selected}
              onPress={onPress}
              containerStyle={styles.checkContainer}
            />
            <Line />
          </>
        )}
      />
    </Wrapper>
  );
};

export default ThirdParty;

const styles = StyleSheet.create({
  checkContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
  },
});
