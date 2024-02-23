import {
  Text,
  PlanBox,
  ToggleList,
  BackHeader,
  CustomInput,
  CustomOverlay,
  PrimaryButton,
  Wrapper,
} from '@components';
import {plus} from '@assets';
import styles from './styles';
import {navigate} from '@services';
import React, {useState} from 'react';
import {goal, list, plan} from '@utils';
import {useTheme} from 'react-native-elements';
import {FlatList, Image, Pressable, ScrollView, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';

interface Props {
  navigation?: any;
  route: RouteProp<{
    params: {
      data?: any;
    };
  }>;
}

const WorkOut = (props: Props) => {
  const {navigation} = props;
  const {data} = props?.route?.params;
  const theme: any = useTheme();
  const [selected, setSelected] = useState<any>(-1);
  const [overlay, setOverlay] = useState<any>(false);
  const [selectedGoal, setSelectedGoal] = useState<any>(-1);

  const onToggle = (item: any, index: any) => {
    setSelected(index);
    setOverlay(true);
  };
  const onToggleGoal = (item: any, index: any) => {
    setSelectedGoal(index);
  };
  const onCancel = () => {
    setOverlay(false);
  };
  const onSave = () => {
    setOverlay(false);
  };
  const onAddExr = () => {
    navigate('SearchWorkOut', {title: 'Select Category'});
  };

  return (
    <Wrapper>
      <BackHeader
        title={'Create New Workout'}
        startIcon
        navigation={navigation}
      />
      {selected == 2 ? (
        <View style={styles.outerView}>
          <Pressable style={styles.innerView} onPress={onAddExr}>
            <Image source={plus} style={styles.pImg} />
          </Pressable>
          <Text size={14} regular>
            Add Exercise
          </Text>

          <View style={styles.btnView}>
            <PrimaryButton width={263} title={'Save'} textColor={'white'} />
          </View>
        </View>
      ) : (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            <CustomInput label="Name" placeHolder={'Abs Workout'} />

            <CustomInput
              label="Notes (Optional)"
              placeHolder={'Lorem ipsum dolor sit amet consec...'}
            />

            <View style={styles.view}>
              <Text semiBold size={14} style={styles.txt}>
                Add to
              </Text>
              <ScrollView horizontal scrollEnabled={false}>
                <ToggleList
                  data={list}
                  onToggle={onToggle}
                  selected={selected}
                />
              </ScrollView>
            </View>

            <View style={{alignItems: 'center'}}>
              <PrimaryButton
                mt={50}
                width={263}
                title={'Next'}
                textColor={'white'}
              />
            </View>
          </ScrollView>

          {overlay && (
            <CustomOverlay
              overlay={overlay}
              setOverlay={setOverlay}
              height={selected == 0 ? 385 : selected == 1 && 410}>
              {selected == 0 ? (
                <FlatList
                  data={plan}
                  renderItem={({item, index}: any) => {
                    return (
                      <PlanBox
                        key={index}
                        label={item?.label}
                        description={item?.description}
                        status={item?.status}
                      />
                    );
                  }}
                />
              ) : (
                selected == 1 && (
                  <Section
                    theme={theme}
                    onSave={onSave}
                    onCancel={onCancel}
                    onToggleGoal={onToggleGoal}
                    selectedGoal={selectedGoal}
                  />
                )
              )}
            </CustomOverlay>
          )}
        </>
      )}
    </Wrapper>
  );
};

const Section = ({
  selectedGoal,
  onToggleGoal,
  theme,
  onCancel,
  onSave,
}: {
  theme?: any;
  selectedGoal?: any;
  onToggleGoal?: any;
  onCancel?: any;
  onSave?: any;
}) => {
  return (
    <>
      <CustomInput label="Add Name" placeHolder={'Abs Workout'} />
      <View style={styles.ml}>
        <Text>Add goal</Text>
        <ToggleList
          data={goal}
          onToggle={onToggleGoal}
          selected={selectedGoal}
        />
      </View>

      <View style={styles.btn}>
        <Pressable onPress={onCancel}>
          <Text size={17} semiBold color={theme?.colors?._gray}>
            Cancel
          </Text>
        </Pressable>
        <Pressable onPress={onSave} style={styles.txtView}>
          <Text size={17} semiBold color={'white'}>
            Save
          </Text>
        </Pressable>
      </View>
    </>
  );
};

export default WorkOut;
