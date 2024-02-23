import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {PrimaryButton, Text, Wrapper} from '@components';
import {useTheme} from '@react-navigation/native';
import {margin, RF} from '@theme';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Modal} from 'react-native';
import {useModal} from '@hooks';
import {navigate} from '@services';
const VerificatioOTP = () => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  const {isModalVisible, closeModal, openModal} = useModal();
  const handleVerify = () => {
    openModal();
    setTimeout(() => {
      closeModal();
      navigate('Login', '');
    }, 3000);
  };

  return (
    <Wrapper>
      <Text semiBold size={22} color={colors.text}>
        Verification
      </Text>
      <Text color={colors.grayText} style={[margin.top_4, margin.bottom_24]}>
        Please, check your phone for PIN code.
      </Text>
      <OTPInputView
        style={{height: RF(70)}}
        pinCount={6}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={code => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      />
      <View style={margin.top_24}>
        <PrimaryButton
          onPress={handleVerify}
          title={'Send'}
          textColor={colors.theme}
        />
      </View>
      <Text
        center
        medium
        color={colors.grayText}
        style={[margin.top_16]}
        belowLine="1">
        Resend PIN code
      </Text>
      <Modal visible={isModalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.card}>
            <Text size={18} semiBold color={colors.text}>
              New Pin
            </Text>
            <Text regular color={colors.grayText} center style={margin.top_12}>
              New pin was sent to your email address. Please, check it and type
              it here!
            </Text>
          </View>
        </View>
      </Modal>
    </Wrapper>
  );
};

export default VerificatioOTP;

const useStyles = (colors: any) =>
  StyleSheet.create({
    borderStyleBase: {
      width: 30,
      height: 45,
    },

    borderStyleHighLighted: {
      borderColor: colors.primary,
    },

    underlineStyleBase: {
      width: 45,
      height: 45,
      borderWidth: 0,
      fontSize: RF(24),
      color: colors.text,
      fontFamily: 'Montserrat-SemiBold',
      borderBottomWidth: 2,
    },

    underlineStyleHighLighted: {
      borderColor: '#03DAC6',
    },
    modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.8)',
      justifyContent: 'center',
      padding: RF(20),
    },
    card: {
      height: RF(170),
      width: '100%',
      backgroundColor: colors.card,
      padding: RF(30),
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
