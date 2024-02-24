import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  BackHeader,
  CustomOverlay,
  DropDown,
  PrimaryButton,
  Text,
  Wrapper,
} from '@components';
import moment from 'moment';
import {useTheme} from '@react-navigation/native';
import {SCREEN_HEIGHT, flex} from '@theme';
import {next} from '@assets';
import {category} from '@utils';

const NotePad = (props: any) => {
  const {selectedDate} = props.route.params;
  const [notes, setNotes] = useState('');
  const [selectedBodyPart, setSelectedBodyPart] = useState('');
  const [showModal, setShowModal] = useState(false);

  const theme: any = useTheme();
  const colors: any = theme.colors;
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : SCREEN_HEIGHT / 10;
  const onOpen = (title: any) => {
    setShowModal(true);
  };
  return (
    <Wrapper>
      <BackHeader
        title={moment(selectedDate).format('MMMM DD, YYYY')}
        width={'100%'}
        // onEdit={onEdit}
      />
      <TextInput
        autoFocus
        placeholder="Enter your note here"
        placeholderTextColor={colors.grayText}
        multiline={true}
        numberOfLines={4}
        onChangeText={text => setNotes(text)}
        value={notes}
        style={{color: colors.text}}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={keyboardVerticalOffset}
        style={{flex: 1, justifyContent: 'flex-end'}}>
        <View style={[flex.row, {justifyContent: 'space-between'}]}>
          <PrimaryButton
            mt={0}
            textColor={colors.white}
            //   bgColor={colors.background}
            f_Size={14}
            title={'General'}
            height={32}
            width={87}
            // onPress={handleNotePress}
          />
          <Text size={18} regular center color={colors.text}>
            0/300
          </Text>
        </View>
        <DropDown
          m_Top={10}
          endIcon={next}
          //   label="Body Parts"
          title={'Body Parts'}
          value={selectedBodyPart}
          tintColor={colors.text}
          onPress={(title?: any) => onOpen(title)}
        />
      </KeyboardAvoidingView>
      <CustomOverlay
        overlay={showModal}
        setOverlay={setShowModal}
        height={238}
        width={350}>
        {showModal && (
          <Content
            colors={colors}
            setShowModal={setShowModal}
            // injuredList={injuredList}
            // setInjuredList={setInjuredList}
          />
        )}

        {/* {showRecoverModal && (
          <View
            style={{
              padding: 20,
              backgroundColor: colors.card,
              borderColor: colors.card,
              borderRadius: 20,
              flex: 1,
            }}>
            <Text
              size={18}
              semiBold
              center
              color={colors.text}
              style={{marginBottom: 20}}>
              Is this body part recovered
            </Text>
            <Text
              size={14}
              thin
              center
              color={colors.grayText}
              style={{marginBottom: 20}}>
              Dismiss the reminder but keep the record.
            </Text>
            <View
              style={[
                flex.row,
                {
                  justifyContent: 'space-between',
                  paddingHorizontal: 20,
                },
              ]}>
              <PrimaryButton
                mt={0}
                f_Size={14}
                textColor={'#858585'}
                bgColor={colors.card}
                title={'Cancel'}
                height={43}
                width={126}
                onPress={handleCancel}
              />
              <PrimaryButton
                mt={0}
                textColor={colors.white}
                f_Size={14}
                title={'Confirm'}
                height={43}
                width={126}
                onPress={handleConfirm}
              />
            </View>
          </View>
        )} */}
      </CustomOverlay>
    </Wrapper>
  );
};

export default NotePad;

const styles = StyleSheet.create({});

const Content = (props: any) => {
  const {colors} = props;
  const [plan, setPlan] = useState('');
  const handlePlanPress = (type: any) => {
    setPlan(type);
  };
  return (
    <>
      {plan ? (
        <View
          style={{
            flex: 1,
            padding: 20,
            backgroundColor: colors.card,
            borderRadius: 20,
          }}>
          <Text size={18} semiBold color={colors.text}>
            Select an exercise from
          </Text>

          <FlatList
            data={category}
            numColumns={3}
            renderItem={({item}: any) => (
              <PrimaryButton
                f_Size={14}
                mt={14}
                border
                title={item.title}
                height={41}
                width={94}
                bgColor={colors.card}
                containerStyle={{marginRight: 14}}
                // onPress={() => handlePlanPress('Fittssy Exercises Liabrary')}
              />
            )}
            keyExtractor={(item: any) => item.title}
          />
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            padding: 20,
            backgroundColor: colors.card,
            borderRadius: 20,
          }}>
          <Text size={18} semiBold color={colors.text}>
            Select an exercise from
          </Text>
          <PrimaryButton
            f_Size={14}
            border
            mt={20}
            title={'Current Plan'}
            height={45}
            bgColor={colors.card}
            onPress={() => handlePlanPress('Current Plan')}
          />
          <PrimaryButton
            f_Size={14}
            mt={14}
            border
            title={'Fittssy Exercises Liabrary'}
            height={45}
            bgColor={colors.card}
            onPress={() => handlePlanPress('Fittssy Exercises Liabrary')}
          />
          <PrimaryButton
            f_Size={14}
            mt={14}
            border
            bgColor={colors.card}
            title={'Custom Exercises'}
            height={45}
            onPress={() => handlePlanPress('Custom Exercises')}
          />
        </View>
      )}
    </>
  );
};
