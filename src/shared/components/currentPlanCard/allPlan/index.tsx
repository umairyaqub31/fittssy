import {FlatList, StyleSheet, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {AddButton, PlanBox, PrimaryButton, Text} from '@components';
import {plan} from '@utils';
import {flex, margin, padding, RF, SCREEN_HEIGHT, SCREEN_WIDTH} from '@theme';
import {copy} from '@assets';
import {useModal} from '@hooks';
import {navigate} from '@services';
import {useTheme} from '@react-navigation/native';

interface Props {}

const AllPlan = (props: Props) => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const [editRes, setEditRes] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleCreateNew = () => {
    navigate('CreateNew', '');
  };
  const handleCopyPrevious = () => {};

  const handleDots = (desc: any) => {
    setModalVisible(true);
    setEditRes(desc);
  };

  const switchCard = (i: any) => {
    // console.log(i, 'dsssss');
  };

  return (
    <View>
      <Pressable style={margin.bottom_20}>
        <PrimaryButton
          title={'Create Personal Workout Plan'}
          textColor={colors.white}
          width={'100%'}
        />
      </Pressable>
      <FlatList
        data={plan}
        style={{height: '58%'}}
        renderItem={({item, index}: any) => {
          return (
            <PlanBox
              onPress={switchCard}
              label={item?.label}
              description={item?.description}
              status={item?.status}
              index={index}
              onClickEdit={handleDots}
            />
          );
        }}
      />
      <View style={[flex.rowCenter, {gap: RF(60)}]}>
        <AddButton title={'Create New'} onPress={handleCreateNew} />
        <AddButton
          title={'Copy Previous'}
          source={copy}
          onPress={handleCopyPrevious}
        />
      </View>

      <Modal
        isVisible={modalVisible}
        style={{
          justifyContent: 'flex-end',
        }}
        onBackdropPress={() => setModalVisible(false)}>
        <View style={styles.card}>
          <Text center size={13} color={colors.text} medium>
            Edit Workout Plan
          </Text>
          <Text center size={13} color={colors.text} style={margin.bottom_12}>
            {editRes}
          </Text>
          <Text
            style={styles.text}
            center
            size={20}
            color={'rgba(36, 145, 255, 1)'}>
            Edit
          </Text>
          <Text
            style={styles.text}
            center
            size={20}
            color={'rgba(36, 145, 255, 1)'}>
            Duplicate
          </Text>
          <Text
            style={styles.text}
            center
            size={20}
            color={'rgba(36, 145, 255, 1)'}>
            Delete
          </Text>
        </View>
        <Pressable
          style={[styles.card, padding.Vertical_16]}
          onPress={() => setModalVisible(false)}>
          <Text color={'rgba(36, 145, 255, 1)'} center size={20} bold>
            Cancel
          </Text>
        </Pressable>
      </Modal>
    </View>
  );
};

export default AllPlan;

const styles = StyleSheet.create({
  text: {
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#AEADAD',
    paddingVertical: RF(18),
  },
  fadeView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: RF(20),
    justifyContent: 'flex-end',
  },
  card: {
    backgroundColor: '#fff',
    paddingTop: RF(12),
    borderRadius: 12,
    marginTop: RF(8),
  },
});
