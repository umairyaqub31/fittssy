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
import {RF, SCREEN_HEIGHT} from '@theme';

const Tab = createBottomTabNavigator();

const MainTabs = ({navigation}: any) => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const dispatch = useDispatch();

  const styles = useStyles(colors);
  const [activeStack, setActiveStack] = useState('HomeStack');
  const {userImg} = useSelector((state: any) => state.root.user);

  return (
    <Tab.Navigator
      screenOptions={({route: {name}}) => ({
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        // tabBarInactiveBackgroundColor: colors.background,
        // tabBarActiveBackgroundColor: colors.background,

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
              uri={userImg}
              color={colors.card}
              focused={focused}
              styles={styles}
              noTintColor
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
  noTintColor,
  uri,
}: {
  source: any;
  styles?: any;
  color: string;
  focused?: any;
  colorCode?: any;
  stack: any;
  uri?: any;
  activeStack?: any;
  setActiveStack?: any;
  noTintColor?: any;
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
        style={[styles.outerLine, {borderColor: focused ? '#36D8AA' : color}]}>
        <View
          style={[
            styles.innerLine,
            {borderColor: focused ? '#36D8AA' : color},
          ]}>
          <Image
            source={uri ? {uri: uri} : source}
            style={[
              styles.image,
              {
                tintColor:
                  !focused || noTintColor
                    ? null
                    : focused
                    ? '#949494'
                    : 'rgba(207, 207, 207, 1)',
                height: (noTintColor && RF(42)) || RF(24),
                width: (noTintColor && RF(42)) || RF(24),
                borderRadius: uri ? 50 : 0,
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
    tabIcon: {},
    tabBarStyle: {
      height: 75,
      width: '100%',
      alignSelf: 'center',
      borderTopRightRadius: 40,
      borderTopWidth: 0,
      borderTopLeftRadius: 40,
      backgroundColor: colors.card,
      position: 'absolute',
    },
    innerLine: {
      height: RF(35),
      width: RF(35),
      borderWidth: 1,
      borderRadius: RF(30),
      alignItems: 'center',
      justifyContent: 'center',
    },
    outerLine: {
      height: RF(45),
      width: RF(45),
      borderWidth: 1,

      borderRadius: RF(30),
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default MainTabs;
