import {
  Image,
  ImageBackground,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {flex, margin, RF, SCREEN_WIDTH} from '@theme';
import {plus, apple, google, Mask, Visa, check} from '@assets';
import Modal from 'react-native-modal';
import {
  AuthButtons,
  BackHeader,
  CheckBox,
  Line,
  PrimaryButton,
  Text,
  Wrapper,
} from '@components';
import {useTheme} from '@react-navigation/native';
import {navigate} from '@services';
import {cardData, paymentMethod} from '@utils';
const PaymentCard = ({route}: any) => {
  const {plan} = route.params;
  console.log(plan, '.....item');

  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState('Apple Pay');

  const handleModal = () => {
    setModalVisible(!modalVisible);
  };
  const handleCheckbox = (title: any) => {
    setSelected(title);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Wrapper>
        <BackHeader title={'Payment'} />
        <View style={margin.top_32}>
          <Text size={16} semiBold>
            Payment Method
          </Text>
          <View style={styles.MainContainer}>
            <Pressable style={styles.ImageViewContainer} onPress={handleModal}>
              <Image
                source={plus}
                tintColor={colors.text}
                style={{width: RF(16), height: RF(16)}}
              />
            </Pressable>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={cardData}
              contentContainerStyle={{paddingRight: 40}}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.touchableStyles}
                  onPress={() => navigate('EditPaymentCard', '')}>
                  <ImageBackground
                    source={Mask}
                    style={styles.backgroundStyles}>
                    <View style={styles.ImageContainer}>
                      <Image source={Visa} style={styles.ImageStyles} />
                      <View style={styles.ContainerStyles}>
                        <Text semiBold color={colors.white}>
                          ••••2048
                        </Text>
                        <View style={styles.logoView}>
                          <Image
                            source={check}
                            style={{
                              width: RF(8),
                              height: RF(8),
                              resizeMode: 'contain',
                            }}
                          />
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>

        <Text size={16} semiBold>
          Order Details
        </Text>
        <Line marginVertical={12} />

        <Text size={16} semiBold color={colors.primary}>
          {plan?.title}
        </Text>
        <Text size={12} style={margin.Vertical_4}>
          {plan?.desc}
        </Text>
        <Text size={12} semiBold>
          Oct 20, 2023 (Wednesday) - 09:30 AM
        </Text>
        <Line marginVertical={12} />
        <View style={flex.rowBetween}>
          <Text size={16} semiBold>
            Estimated Cost
          </Text>
          <Text size={18} bold color={colors.primary}>
            $ 0.99
            <Text color={colors.primary}>/m</Text>
          </Text>
        </View>
        <AuthButtons
          src={google}
          title={'Google Pay'}
          style={margin.Vertical_16}
        />
        <AuthButtons src={apple} title={'Apple Pay'} style={margin.bottom_24} />
        <PrimaryButton title={'Confirm'} />
        <Modal isVisible={modalVisible}>
          <View style={styles.card}>
            <Text size={16} semiBold style={margin.bottom_20}>
              Add Payment Method
            </Text>
            <FlatList
              data={paymentMethod}
              renderItem={({item, index}: any) => {
                return (
                  <>
                    <CheckBox
                      onPress={handleCheckbox}
                      selected={selected}
                      textStyle={margin.left_8}
                      title={item.title}
                    />
                    {index == 2 ? null : <Line />}
                  </>
                );
              }}
            />
            <View style={[flex.rowCenter, {gap: 25}, margin.top_20]}>
              <Text
                size={16}
                semiBold
                color={colors.grayText}
                onPress={handleModal}>
                Cancel
              </Text>
              <Pressable style={styles.save} onPress={handleModal}>
                <Text size={16} semiBold color={colors.white}>
                  Save
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </Wrapper>
    </ScrollView>
  );
};

export default PaymentCard;
const useStyles = (colors: any) =>
  StyleSheet.create({
    Container: {
      marginHorizontal: RF(20),
      marginTop: RF(20),
      flexDirection: 'row',
      alignItems: 'center',
    },
    save: {
      height: RF(40),
      width: RF(120),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      backgroundColor: colors.primary,
    },
    card: {
      paddingTop: RF(20),
      paddingHorizontal: RF(14),
      paddingBottom: RF(32),
      backgroundColor: colors.background,
      borderRadius: 20,
    },
    ViewContainer: {
      width: RF(46),
      height: RF(46),
      backgroundColor: 'rgba(246, 246, 246, 1)',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: RF(24),
    },
    ImageView: {width: RF(8), height: RF(12)},
    MainContainer: {
      flexDirection: 'row',
      width: SCREEN_WIDTH,
      alignItems: 'center',
      marginVertical: RF(20),
      gap: RF(8),
    },
    ImageViewContainer: {
      width: RF(62),
      height: RF(115),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: RF(16),
      backgroundColor: colors.card,
    },
    touchableStyles: {
      width: RF(181),
      height: RF(115),
      overflow: 'hidden',
      borderRadius: RF(16),
      marginRight: RF(8),
    },
    backgroundStyles: {width: '100%', height: '100%'},
    ImageContainer: {
      paddingHorizontal: RF(16),
      paddingVertical: RF(16),
    },
    ImageStyles: {
      width: RF(50),
      height: RF(16),
      resizeMode: 'contain',
      alignSelf: 'flex-end',
    },
    ContainerStyles: {
      marginTop: RF(45),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logoView: {
      width: RF(24),
      height: RF(24),
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: RF(8),
    },
  });
