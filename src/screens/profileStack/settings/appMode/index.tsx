import {StyleSheet, View, Modal, Image} from 'react-native';
import React, {useState} from 'react';
import {
  BackHeader,
  CheckBox,
  CustomSwitch,
  Line,
  PrimaryButton,
  Text,
  Wrapper,
} from '@components';
import {margin, RF} from '@theme';
import {useTheme} from '@react-navigation/native';

const AppMode = ({navigation}: any) => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState(false);
  const [customTheme, setCustomTheme] = useState('Girly Mode');
  const [modalVisible, setModalVisible] = useState(false);
  // const {isModalVisible, openModal, closeModal} = useModal();

  const handleAuto = (title: any) => {
    setSelected(!selected);
  };

  const handleChange = () => {
    if (toggle == true) {
      setToggle(!toggle);
    } else {
      setModalVisible(true);
    }
  };

  const handleCancel = () => {
    setModalVisible(!modalVisible);
  };

  const handleConfirm = () => {
    setToggle(!toggle);
    setModalVisible(!modalVisible);
  };

  const modalCheckbox = (title: any) => {
    setCustomTheme(title);
  };

  return (
    <Wrapper isTop>
      <BackHeader title={'App Mode'} startIcon navigation={navigation} />
      <View style={margin.top_32}>
        <CustomSwitch mode={'dark'} />
        <Line />
        <CheckBox
          onPress={handleAuto}
          selected={selected}
          title={'Auto'}
          f_size={16}
          f_weight={'600'}
          square={true}
          containerStyle={styles.checkBoxContainer}
        />
        <Line />
        <CustomSwitch
          lablel={'Custom'}
          mode={'light'}
          initialState={toggle}
          onPress={handleChange}
        />
      </View>
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.fadeView}>
          <View style={styles.card}>
            <Text size={18} semiBold style={margin.bottom_32}>
              Select Custom Mode
            </Text>
            <CheckBox
              onPress={modalCheckbox}
              selected={customTheme}
              title={'Girly Mode'}
              textStyle={styles.text}
            />
            <Line />
            <CheckBox
              onPress={modalCheckbox}
              selected={customTheme}
              title={'Macho Mode'}
              textStyle={styles.text}
            />
            <View style={styles.viewBtn}>
              <PrimaryButton
                onPress={handleCancel}
                height={40}
                width={120}
                title={'Cancel'}
                textColor={colors.grayText}
                bgColor={'transparent'}
              />
              <PrimaryButton
                onPress={handleConfirm}
                height={40}
                width={120}
                title={'Confirm'}
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
    onThumb: {},
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
      backgroundColor: colors.card,
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
