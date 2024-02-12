import {home, prof, progress, stat, workout} from '@assets';
import {navigate} from '@services';
import React, {useState} from 'react';
import HomeStack from '../stacks/homeStack';
import {useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {Image, View, Pressable, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WorkOutStack from '../stacks/workOutStack';
import ProgressStack from '../stacks/progressStack';
import IsnsightStack from '../stacks/insightsStack';
import ProfileStack from '../stacks/profileStack';
import {RF} from '@theme';

const Tab = createBottomTabNavigator();

const MainTabs = ({navigation}: any) => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const dispatch = useDispatch();
  const {isModalVisible} = useSelector((state: any) => state.root.user);

  const styles = useStyles(colors);
  const [activeStack, setActiveStack] = useState('HomeStack');

  return (
    <Tab.Navigator
      screenOptions={({route: {name}}) => ({
        headerShown: false,
        keyboardHidesTabBar: true,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: '#00538F',
        tabBarInactiveTintColor: '#949494',
        tabBarIconStyle: styles.tabIcon,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({tintColor, color, focused}: any) => (
            <TabBarIcon
              source={home}
              color={colors.card}
              styles={styles}
              focused={focused}
              stack={'Home'}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Workout"
        component={WorkOutStack}
        options={{
          tabBarIcon: ({tintColor, color, focused}: any) => (
            <TabBarIcon
              source={workout}
              color={colors.card}
              styles={styles}
              focused={focused}
              stack={'Workout'}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Progress"
        component={ProgressStack}
        options={{
          tabBarIcon: ({tintColor, color, focused}: any) => (
            <TabBarIcon
              source={progress}
              color={colors.card}
              styles={styles}
              focused={focused}
              stack={'Progress'}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
            />
          ),
        }}
      />
      <Tab.Screen
        name="InsightOverview"
        component={IsnsightStack}
        options={{
          tabBarIcon: ({tintColor, color, focused}: any) => (
            <TabBarIcon
              source={stat}
              color={colors.card}
              styles={styles}
              focused={focused}
              stack={'InsightOverview'}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileOverview"
        component={ProfileStack}
        options={{
          tabBarIcon: ({tintColor, color, focused}: any) => (
            <TabBarIcon
              source={prof}
              color={colors.card}
              styles={styles}
              focused={focused}
              stack={'ProfileOverview'}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const onPressTab = (
  stack: any,
  activeStack: any,
  setActiveStack: any,
  handleCaptureFlag: any,
) => {
  navigate(stack, {});
  setActiveStack(stack);
  if (stack == 'ScanStack' && activeStack == 'ScanStack') {
    handleCaptureFlag();
  }
};

const TabBarIcon = ({
  color,
  source,
  styles,
  focused,
  colorCode,
  stack,
  activeStack,
  setActiveStack,
  handleCaptureFlag,
}: {
  source: any;
  styles?: any;
  color: string;
  focused?: any;
  colorCode?: any;
  stack: any;
  activeStack?: any;
  setActiveStack?: any;
  handleCaptureFlag?: any;
}) => {
  return (
    <Pressable
      style={{
        height: RF(55),
        width: RF(55),
        borderWidth: 1,
        borderRadius: RF(30),
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: focused ? '#36D8AA' : color,
      }}
      onPress={() => {
        onPressTab(stack, activeStack, setActiveStack, handleCaptureFlag);
      }}>
      <View
        style={{
          height: RF(45),
          width: RF(45),
          borderWidth: 1,
          borderColor: focused ? '#36D8AA' : color,
          borderRadius: RF(30),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: RF(35),
            width: RF(35),
            borderWidth: 1,
            borderColor: focused ? '#36D8AA' : color,
            borderRadius: RF(30),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={source}
            style={[
              styles.image,
              {
                tintColor: '#949494',
              },
            ]}
            resizeMode={'contain'}
          />
        </View>
      </View>
    </Pressable>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    image: {width: 24, height: 24, opacity: 100},
    img: {},
    tabIcon: {
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    tabBarStyle: {
      height: 75,
      width: '100%',
      alignSelf: 'center',
      borderTopRightRadius: 40,
      borderTopLeftRadius: 40,
      // backgroundColor: 'rgba(246, 246, 246, 1)',
      // backgroundColor: 'red',
      paddingBottom: 0,
      elevation: 0,
      borderTopWidth: 0,
    },
  });

export default MainTabs;
