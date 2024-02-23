import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  BackHeader,
  CustomInput,
  Line,
  PrimaryButton,
  Text,
  VISACard,
  Wrapper,
} from '@components';
import {flex, icon, margin, RF} from '@theme';
import {useTheme} from '@react-navigation/native';
import {del, edit} from '@assets';

const EditPaymentCard = () => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  const [editInput, setEditInput] = useState(false);
  const [cardDetails, setCarddetails] = useState({
    name: 'Megan Smith',
    cardNumber: '5120 - 3256 - 6589 - 2084',
    expiry: '01/24',
    cvc: '696',
  }); // Add state for card holder name

  const handleEdit = () => {
    console.log('ssss');
    setEditInput(!editInput);
  };
  const handleNameChange = (newName: any, title: any) => {
    if (title === 'name') {
      setCarddetails(prevDetails => ({
        ...prevDetails,
        name: newName,
      }));
    }
    if (title === 'cardNumber') {
      setCarddetails(prevDetails => ({
        ...prevDetails,
        cardNumber: newName,
      }));
    }
    if (title === 'expiry') {
      setCarddetails(prevDetails => ({
        ...prevDetails,
        expiry: newName,
      }));
    }
  };
  console.log(cardDetails, '......cardDetails');

  return (
    <Wrapper>
      <BackHeader title={'Edit Card'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <VISACard
          cardHolderName="Megan Smith"
          cardNumber="5124 3256 6589 2048"
        />
        <View style={styles.curverCard}>
          <Text size={16} medium>
            Cardholder Name
          </Text>
          <View style={{...flex.rowSimple}}>
            <TextInput
              style={styles.input}
              editable={editInput}
              value={cardDetails.name} // Use the state variable for the value
              onChangeText={text => handleNameChange(text, 'name')}
            />
            <Pressable onPress={handleEdit}>
              <Image source={edit} style={icon._16} />
            </Pressable>
          </View>
          <Line />
          <Text size={16} medium>
            Card Number
          </Text>
          <View style={{...flex.rowSimple}}>
            <TextInput
              style={styles.input}
              editable={editInput}
              inputMode={'numeric'}
              value={cardDetails?.cardNumber}
              onChangeText={text => handleNameChange(text, 'cardNumber')}
            />
            <Pressable onPress={handleEdit}>
              <Image source={edit} style={icon._16} />
            </Pressable>
          </View>
          <Line />
          <View style={flex.rowBetween}>
            <View>
              <Text size={16} medium>
                Expiry
                <Text size={12} medium>
                  (MM/YY)
                </Text>
              </Text>
              <View style={{...flex.rowSimple}}>
                <TextInput
                  style={styles.input}
                  editable={editInput}
                  value={cardDetails.expiry}
                  onChangeText={text => handleNameChange(text, 'expiry')}
                />
                <Pressable onPress={handleEdit}>
                  <Image source={edit} style={icon._16} />
                </Pressable>
              </View>
            </View>
            <Line vertical />

            <View>
              <Text size={16} medium>
                CVC
              </Text>
              <View style={{...flex.rowSimple}}>
                <TextInput
                  style={styles.input}
                  editable={editInput}
                  value={cardDetails.expiry}
                  onChangeText={text => handleNameChange(text, 'expiry')}
                />
                <Pressable onPress={handleEdit}>
                  <Image source={edit} style={icon._16} />
                </Pressable>
              </View>
            </View>
          </View>
          <Line />
          <View style={flex.rowSimple}>
            <Text color={'red'} size={16} medium style={{rowGap: 10}}>
              Delete Card
            </Text>
            <Image source={del} style={{...icon._16, marginLeft: RF(5)}} />
          </View>
        </View>
        <PrimaryButton title={'Save'} containerStyle={{...margin.top_20}} />
      </ScrollView>
    </Wrapper>
  );
};

export default EditPaymentCard;

const useStyles = (colors: any) =>
  StyleSheet.create({
    card: {
      height: 203,
      width: '100%',
      overflow: 'hidden',
      borderRadius: 15,
    },
    image: {
      flex: 1,
      justifyContent: 'space-between',
      paddingTop: RF(23),
      paddingRight: RF(23),
      paddingLeft: RF(14),
      paddingBottom: RF(14),
    },
    visa: {
      height: RF(24),
      width: RF(74),
      alignSelf: 'flex-end',
      resizeMode: 'contain',
    },
    curverCard: {
      paddingHorizontal: RF(20),
      paddingVertical: RF(16),
      borderWidth: 1,
      marginTop: RF(28),
      borderColor: colors.card,
      borderRadius: 15,
    },
    input: {
      padding: 0,
      fontSize: 16,
      fontWeight: '300',
      marginRight: RF(15),
      color: colors.text,
    },
  });
