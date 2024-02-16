import {StyleSheet, View, Modal} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  BackHeader,
  CheckBox,
  Line,
  PrimaryButton,
  Text,
  Wrapper,
} from '@components';
import {darkThemeStyle, defaultTheme, margin, RF} from '@theme';
import ToggleSwitch from 'toggle-switch-react-native';
import {useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {stat} from '@assets';
import {setIsDarkEnabled} from '@redux';
import Routes from 'routes/routes';
import {useModal} from '@hooks';

const AppMode = ({navigation}: any) => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  const [toggle2, setToggle2] = useState(false);
  const [selected, setSelected] = useState(false);
  const {isDarkEnabled} = useSelector((state: any) => state.root.user);
  console.log('dark.....', isDarkEnabled);

  const {isModalVisible, openModal, closeModal} = useModal();

  const handleAuto = (title: any) => {
    setSelected(!selected);
  };
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(setIsDarkEnabled(!isDarkEnabled));
  };
  const handleChange2 = () => {
    openModal();
  };

  const modalCheckbox = () => {};

  return (
    <Wrapper isTop>
      <BackHeader title={'App Mode'} startIcon navigation={navigation} />
      <View style={margin.top_32}>
        <ToggleSwitch
          isOn={isDarkEnabled}
          onColor={colors.primary}
          offColor={colors.card}
          circleColor={isDarkEnabled ? colors.white : '#000'}
          label="Dark"
          trackOffStyle={styles.trackOff}
          trackOnStyle={{position: 'absolute', right: 0}}
          thumbOnStyle={styles.onThumb}
          thumbOffStyle={{backgroundColor: '#000'}}
          labelStyle={styles.label}
          size="medium"
          onToggle={handleChange}
        />
        <Line />
        <CheckBox
          onPress={handleAuto}
          selected={selected}
          title={'Auto'}
          square={true}
          containerStyle={styles.checkBoxContainer}
        />
        <Line />
        <ToggleSwitch
          isOn={toggle2}
          onColor={colors.primary}
          offColor={colors.card}
          circleColor={isDarkEnabled ? colors.white : '#000'}
          label="Custom"
          trackOffStyle={styles.trackOff}
          trackOnStyle={{position: 'absolute', right: 0}}
          thumbOnStyle={styles.onThumb}
          thumbOffStyle={{backgroundColor: '#000'}}
          labelStyle={styles.label}
          size="medium"
          onToggle={handleChange2}
        />
      </View>
      <Modal visible={isModalVisible} transparent>
        <View style={styles.fadeView}>
          <View style={styles.card}>
            <Text size={18} semiBold style={margin.bottom_32}>
              Select Custom Mode
            </Text>
            <CheckBox title={'Girly Mode'} textStyle={styles.text} />
            <Line />
            <CheckBox title={'Macho Mode'} textStyle={styles.text} />
            <View style={styles.viewBtn}>
              <PrimaryButton
                height={40}
                width={120}
                title={'Cancel'}
                bgColor={'transparent'}
              />
              <PrimaryButton
                height={40}
                width={120}
                title={'Skip'}
                textColor={colors.white}
              />
            </View>
          </View>
        </View>
      </Modal>
    </Wrapper>
  );
};

export default AppMode;

const useStyles = (colors: any) =>
  StyleSheet.create({
    label: {
      color: colors.text,
      fontFamily: 'Montserrat-SemiBold',
      fontSize: RF(16),
      marginLeft: 0,
    },
    onThumb: {
      backgroundColor: colors.white,
    },
    trackOff: {
      position: 'absolute',
      right: 0,
    },
    checkBoxContainer: {
      justifyContent: 'space-between',
      flexDirection: 'row-reverse',
    },
    fadeView: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.4)',
      padding: RF(20),
      justifyContent: 'center',
    },
    card: {
      backgroundColor: '#fff',
      paddingTop: RF(20),
      padding: RF(12),
      borderRadius: 12,
    },
    text: {
      marginLeft: RF(10),
    },
    viewBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: RF(30),
      gap: 16,
    },
  });
