import React from 'react';
import {RF} from '@theme';
import {
  View,
  Image,
  Pressable,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {navigate} from '@services';
import {cross, line, p_link, plus} from '@assets';
import {BackHeader, CrunchBox, PrimaryButton, Text, Wrapper} from '@components';

const EditWorkOut = () => {
  const onSave = () => {};
  const onAddExr = () => {};
  const onStart = () => {};

  return (
    <Wrapper>
      <View style={{flex: 1}}>
        <BackHeader
          edit
          width={'65%'}
          onEdit={onSave}
          endTitle={'Save'}
          title={'Edit Workout'}
        />
        <CrunchBox
          swap
          src={cross}
          editWorkout
          onPressSwap={() =>
            navigate('SearchWorkOut', {title: 'Select Category'})
          }
        />
        <Section />
        <CrunchBox src={cross} swap editWorkout mt={2} />
      </View>
      <View style={{justifyContent: 'flex-end'}}>
        <PrimaryButton
          title={'Start Workout'}
          textColor={'white'}
          onPress={onStart}
        />
      </View>
    </Wrapper>
  );
};

const Section = ({onAddExr}: {onAddExr?: any}) => {
  return (
    <View style={styles.outerView}>
      <View style={styles.press}>
        <Pressable style={styles.innerView} onPress={onAddExr}>
          <Image source={plus} style={styles.pImg} />
        </Pressable>
        <View style={styles.v}>
          <Text size={14} regular>
            Add Exercise
          </Text>
        </View>
      </View>

      <ImageBackground source={line} style={styles.l}>
        <Image source={p_link} style={styles._link} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  press: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  _link: {
    width: RF(34),
    height: RF(34),
  },
  l: {
    width: RF(1),
    height: RF(53),
    marginRight: RF(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  v: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: RF(10),
  },
  pImg: {
    width: RF(14),
    height: RF(14),
  },
  outerView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -20,
    marginHorizontal: RF(30),
  },
  innerView: {
    width: RF(24),
    height: RF(24),
    borderWidth: 1,
    // marginTop: RF(40),
    borderRadius: 100,
    alignItems: 'center',
    // marginBottom: RF(10),
    borderColor: '#D1D1D1',
    justifyContent: 'center',
  },
  btnView: {
    justifyContent: 'flex-end',
    flex: 1,
  },
});

export default EditWorkOut;
