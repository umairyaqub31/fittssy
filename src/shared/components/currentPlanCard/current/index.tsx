import {
  FlatList,
  Modal,
  StyleSheet,
  View,
  Pressable,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {
  AddButton,
  AllPlan,
  BorderGradientCard,
  CurrentPlanCard,
  HistoryHeader,
  PlanBox,
  PrimaryButton,
  Text,
  Wrapper,
  CustomInput,
} from '@components';
import {currentPlanData, plan} from '@utils';
import {useTheme} from '@react-navigation/native';
import {flex, icon, margin, padding, RF} from '@theme';
import {copy, dots, share} from '@assets';
import {navigate} from '@services';
import {useModal} from '@hooks';
import CurrentPlan from 'screens/insightsStack/currentPlan';
import {Line} from 'react-native-svg';

interface Props {
  selected?: any;
  onPress: (i: any) => void;
}

const Current = (props: Props) => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const {selected, onPress} = props;
  const styles = useStyles(colors);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [goalLevel, setGoalLevel] = useState('Intermediate');
  const {isModalVisible, openModal, closeModal} = useModal();

  const AddPlan = () => {
    openModal();
  };

  const goals = ['Maintaining', 'Bulking', 'Cutting'];
  const level = ['Beginner', 'Intermediate', 'Advanced'];

  const handleGoalPress = (goal: any) => {
    setSelectedGoal(goal);
  };

  const handleGoalLevel = (level: any) => {
    setGoalLevel(level);
  };
  return (
    <View style={[margin.top_16, {flex: 1}]}>
      <BorderGradientCard colors={colors.gradientCard}>
        <View style={flex.rowCenter}>
          <View
            style={[
              flex.rowSimple,
              {position: 'absolute', left: RF(14), top: RF(0)},
            ]}>
            <Image source={share} style={icon._16} />
            <Text style={margin.left_4} color={colors.primary}>
              Share
            </Text>
          </View>
          <View>
            <Text size={12} regular center color={colors.grayText}>
              {/* {item.title1} */}
              Bulking: 3 Days
            </Text>
            <Text
              size={18}
              semiBold
              center
              style={margin.top_12}
              color={colors.text}>
              {/* {item.title2} */}
              Benji 3 Day Plan
            </Text>
          </View>
          <Pressable style={{position: 'absolute', right: RF(14), top: RF(0)}}>
            <Image source={dots} style={icon._20} />
          </Pressable>
        </View>
      </BorderGradientCard>
      <FlatList
        data={currentPlanData}
        renderItem={({item}: any) => {
          return (
            <CurrentPlanCard
              item={item}
              selected={selected}
              onPress={onPress}
            />
          );
        }}
      />
      <Pressable style={margin.bottom_20} onPress={AddPlan}>
        <PrimaryButton
          title={'Add Days to This Routine'}
          textColor={colors.white}
        />
      </Pressable>
      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.fadeView}>
          <View style={styles.card}>
            <Text color={colors.primary} style={styles.text}>
              Benji 3 Day Plan
            </Text>
            <View style={[padding.Horizontal_12, padding.Vertical_16]}>
              <CustomInput
                containerStyle={{marginTop: 0}}
                label="Workout Day*"
              />
              <Text color={colors.text} semiBold style={margin.top_20}>
                Routine Optional Editing
              </Text>
              <Text color={colors.text} style={margin.top_14}>
                Routine Type
              </Text>
              <View style={[flex.row, {gap: 10}, margin.top_8]}>
                {goals.map((goal, index) => (
                  <Pressable
                    key={index}
                    style={[
                      styles.selectCard,
                      selectedGoal === goal && styles.selected,
                    ]}
                    onPress={() => handleGoalPress(goal)}>
                    <Text
                      size={12}
                      color={
                        selectedGoal === goal ? colors.white : colors.primary
                      }>
                      {goal}
                    </Text>
                  </Pressable>
                ))}
              </View>
              <Text color={colors.text} style={margin.top_14}>
                Routine Level
              </Text>
              <View style={[flex.rowBetween, margin.top_8]}>
                {level.map((level, index) => (
                  <Pressable
                    key={index}
                    style={[
                      styles.selectCard,
                      goalLevel === level && styles.selected,
                    ]}
                    onPress={() => handleGoalLevel(level)}>
                    <Text
                      size={12}
                      color={
                        goalLevel === level ? colors.white : colors.primary
                      }>
                      {level}
                    </Text>
                  </Pressable>
                ))}
              </View>
              <Text color={colors.text} semiBold style={margin.top_20}>
                Routine Optional Editing
              </Text>
              <View style={styles.borderView}>
                <Text color={colors.text} medium>
                  Benji 3 Day PPL
                </Text>
              </View>
              <View style={[flex.rowCenter, {gap: 25}, margin.top_20]}>
                <Text
                  size={16}
                  semiBold
                  color={colors.grayText}
                  onPress={closeModal}>
                  Cancel
                </Text>
                <Pressable style={styles.save} onPress={closeModal}>
                  <Text size={16} semiBold color={colors.white}>
                    Save
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Current;

const useStyles = (colors: any) =>
  StyleSheet.create({
    fadeView: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.4)',
      padding: RF(20),
      justifyContent: 'center',
    },
    card: {
      backgroundColor: '#fff',
      paddingTop: RF(12),
      borderRadius: 12,
      marginTop: RF(8),
    },
    text: {
      width: '100%',
      borderBottomWidth: 1,
      borderColor: colors.card,
      padding: RF(14),
    },
    selectCard: {
      paddingVertical: RF(8),
      paddingHorizontal: RF(12),
      borderWidth: 1,
      borderRadius: 20,
      borderEndWidth: 1,
      borderColor: colors.primary,
    },
    selected: {
      backgroundColor: colors.primary, // Change this to your desired selected color
    },
    borderView: {
      height: RF(73),
      borderWidth: 1,
      borderRadius: 20,
      borderColor: colors.card,
      marginTop: RF(12),
      padding: RF(14),
    },
    save: {
      height: RF(40),
      width: RF(120),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      backgroundColor: colors.primary,
    },
  });
