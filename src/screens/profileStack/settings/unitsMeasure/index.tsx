import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {BackHeader, CheckBox, Line, Wrapper} from '@components';
import {margin} from '@theme';

const UnitMeasure = ({navigation}: any) => {
  const [selected, setSelected] = useState('Imperial');
  const handleCheckBox = (title: any) => {
    setSelected(title);
  };

  return (
    <Wrapper isTop>
      <BackHeader
        width={'80%'}
        title={'Default Units of Measure'}
        startIcon
        navigation={navigation}
      />
      <View style={margin.top_32}>
        <CheckBox
          onPress={handleCheckBox}
          selected={selected}
          title={'Metric'}
          containerStyle={styles.checkBoxContainer}
        />
        <Line />
        <CheckBox
          onPress={handleCheckBox}
          selected={selected}
          title={'Imperial'}
          containerStyle={styles.checkBoxContainer}
        />
      </View>
    </Wrapper>
  );
};

export default UnitMeasure;

const styles = StyleSheet.create({
  checkBoxContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
  },
});
