import {RF} from '@theme';
import {tick} from '@assets';
import React, {useState} from 'react';
import {BackHeader, Gradient, Search, Text} from '@components';
import {FlatList, Image, Pressable, StyleSheet, View} from 'react-native';

interface Props {
  data?: any;
  title?: any;
  endIcon?: any;
  gradient?: any;
  onOpen?: (i?: any, n?: any) => void;
}

const SearchToSelect = (props: Partial<Props>) => {
  const {title, endIcon, data, gradient, onOpen} = props;
  const [selected, setSelected] = useState<any>();
  const [selectick, setSelecTick] = useState<any>();
  const [selectedGradient, setSelectedGradient] = useState<any>();

  const onSubmitEditing = () => {};

  const onSelectGradient = (item: any, index: any) => {
    setSelectedGradient(index);
    onOpen(item, index);
    // if (item == 'Exercise') {
    //   navigate('Exercise', '');
    // } else if (item == 'Workout') {
    //   navigate('WorkOut', '');
    // } else if (item == 'Workout Plan') {
    //   navigate('Workout_Plan', '');
    // }
  };
  const onSelect = (item: any, index: any) => {
    setSelected(index);
    setSelecTick(index);
    onOpen(item, index);
  };

  return (
    <View>
      <BackHeader title={title} endIcon={endIcon} />
      <Search onSubmitEditing={onSubmitEditing} />

      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <>
              {gradient ? (
                <Pressable
                  style={styles.pressable}
                  onPress={() => onSelectGradient(item, index)}>
                  <Gradient clrs={selectedGradient == index ? true : false}>
                    <Text
                      semiBold
                      style={styles.txt}
                      color={selectedGradient == index ? 'white' : 'black'}>
                      {item?.title}
                    </Text>
                  </Gradient>
                </Pressable>
              ) : (
                <Pressable
                  style={styles.pressable_g}
                  onPress={() => onSelect(item, index)}>
                  <Text
                    semiBold
                    style={styles.txt}
                    color={selectick == index ? 'black' : 'black'}>
                    {item?.title}
                  </Text>
                  <>
                    {selected == index && (
                      <Image source={tick} style={styles.tick} />
                    )}
                  </>
                </Pressable>
              )}
              <View style={gradient ? styles.view : styles._view} />
            </>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tick: {
    width: RF(12),
    height: RF(10),
    marginRight: RF(32),
    marginTop: RF(20),
  },
  pressable_g: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pressable: {
    justifyContent: 'center',
  },
  txt: {marginLeft: RF(28), marginTop: RF(20)},
  view: {
    height: 1,
    backgroundColor: '#EAEAEA',
    marginHorizontal: RF(20),
  },
  _view: {
    height: 1,
    backgroundColor: '#EAEAEA',
    marginHorizontal: RF(20),
    marginTop: RF(20),
  },
});

export default SearchToSelect;
