import {FlatList, StyleSheet, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {RF, flex, margin} from '@theme';
import {
  CheckBox,
  CustomDropDown,
  CustomOverlay,
  DropDown,
  PrimaryButton,
  Text,
  Wrapper,
} from '@components';
import {useTheme} from '@react-navigation/native';
import {next} from '@assets';
import {getDataFromUserDefaults} from '@utils';
import {navigate} from '@services';

const BODYPARTS = [
  {label: 'Abs', value: 'Abs'},
  {label: 'Back', value: 'Back'},
  {label: 'Biceps', value: 'Biceps'},
  {label: 'Chest', value: 'Chest'},
  {label: 'Forearms', value: 'Forearms'},
  {label: 'Glutes', value: 'Glutes'},
  {label: 'Shoulders', value: 'Shoulders'},
  {label: 'Triceps', value: 'Triceps'},
  {label: 'Thigh', value: 'Thigh'},
  {label: 'Calf', value: 'Calf'},
];
const WorkoutNotes = (props: any) => {
  const {selectedDate} = props;
  const theme: any = useTheme();
  const colors = theme.colors;
  const [showModal, setShowModal] = useState(false);
  const [showRecoverModal, setShowRecoverModal] = useState(false);
  const [injuredList, setInjuredList] = useState([]);
  const [injuredRecovered, setInjuredRecovered] = useState(false);

  const handleInjuredPress = () => {
    handelOpenModal();
  };
  const handleNotePress = () => {
    console.log('Note Press');
    navigate('NotePad', {selectedDate: selectedDate});
  };

  const handelOpenModal = () => {
    setShowModal(true);
  };

  const handleInjuredRecovered = () => {
    if (!injuredRecovered) {
      setShowRecoverModal(true);
    }
  };

  const handleConfirm = () => {
    setInjuredRecovered(!injuredRecovered);
    setShowRecoverModal(false);
  };
  const handleCancel = () => {
    setShowRecoverModal(false);
  };

  return (
    <View style={{flex: 1}}>
      <View style={[flex.row, {justifyContent: 'space-between'}]}>
        <PrimaryButton
          mt={24}
          bgColor={colors.background}
          f_Size={14}
          border
          title={'Take a Note'}
          height={RF(45)}
          width={'47%'}
          onPress={handleNotePress}
        />

        <PrimaryButton
          bgColor={colors.background}
          mt={24}
          f_Size={14}
          border
          title={'Mark injured'}
          height={45}
          width={'47%'}
          onPress={handleInjuredPress}
        />
      </View>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={injuredList}
          renderItem={({item, index}: any) => (
            <CheckBox
              onPress={handleInjuredRecovered}
              selected={injuredRecovered}
              title={`${item.part} marked as injured`}
              square={true}
              textStyle={{marginLeft: 8}}
              f_size={14}
              f_weight={'600'}
              // checkboxSize={20}
              textColor={colors.text}
              containerStyle={{
                justifyContent: 'space-between',
                flexDirection: 'row-reverse',
                marginBottom: 20,
              }}
            />
            // </View>
          )}
        />
      </View>
      <CustomOverlay
        overlay={showModal ? showModal : showRecoverModal && showRecoverModal}
        setOverlay={
          showModal ? setShowModal : showRecoverModal && setShowRecoverModal
        }
        height={showModal ? 238 : showRecoverModal && 167}
        width={350}>
        {showModal && (
          <Content
            colors={colors}
            setShowModal={setShowModal}
            injuredList={injuredList}
            setInjuredList={setInjuredList}
          />
        )}

        {showRecoverModal && (
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
        )}
      </CustomOverlay>
    </View>
  );
};

export default WorkoutNotes;

const styles = StyleSheet.create({});
const Content = (props: any) => {
  const [audio, setAudio] = useState(false);
  const [selectedBodyPart, setSelectedBodyPart] = useState(null);
  const {colors, setShowModal, injuredList, setInjuredList} = props;
  const handleAuto = (title: any) => {
    setAudio(!audio);
  };

  const handleSave = () => {
    if (selectedBodyPart) {
      let tempArr = [...injuredList];
      tempArr.push({
        part: selectedBodyPart,
        isAudio: audio,
      });
      setInjuredList(tempArr);
      setShowModal(false);
    }
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: colors.card,
        borderRadius: 20,
      }}>
      <Text size={18} semiBold color={colors.text} style={{marginBottom: 20}}>
        Injury History
      </Text>
      <CustomDropDown
        data={BODYPARTS}
        placeholder="Body Parts"
        value={selectedBodyPart}
        setValue={setSelectedBodyPart}
      />
      <CheckBox
        onPress={handleAuto}
        selected={audio}
        title={'Audio Reminder'}
        square={true}
        textStyle={{marginLeft: 8}}
        f_size={14}
        f_weight={'400'}
        bgColor={colors.card}
        textColor={colors.text}
        containerStyle={{
          marginTop: 16,
        }}
      />
      <View
        style={[
          flex.row,
          {
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginTop: 25,
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
          title={'Save'}
          height={43}
          width={126}
          onPress={handleSave}
        />
      </View>
    </View>
  );
};
