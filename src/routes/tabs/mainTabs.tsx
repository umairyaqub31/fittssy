import {home} from '@assets';
import {navigate} from '@services';
import React, {useState} from 'react';
import HomeStack from '../stacks/homeStack';
import {useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {Image, Pressable, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MainTabs = ({navigation}: any) => {
  const theme: any = useTheme();
  const dispatch = useDispatch();
  const {isModalVisible} = useSelector((state: any) => state.root.user);

  const styles = useStyles(theme.colors);
  const [activeStack, setActiveStack] = useState('HomeStack');

  return (
    <Tab.Navigator
      screenOptions={({route: {name}}) => ({
        headerShown: false,
        keyboardHidesTabBar: true,
        tabBarStyle:
          // isModalVisible == false ?
          styles.tabBarStyle,
        //  : {display: 'none'},
        tabBarActiveTintColor: '#00538F',
        tabBarInactiveTintColor: '#949494',
        tabBarIconStyle: styles.tabIcon,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({tintColor, color, focused}: any) => (
            <TabBarIcon
              source={home}
              color={color}
              styles={styles}
              focused={focused}
              stack={'Home'}
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
        height: 8,
        // width: 30,
        // alignItems: 'center',
        // justifyContent: 'center',
      }}
      onPress={() => {
        onPressTab(stack, activeStack, setActiveStack, handleCaptureFlag);
      }}>
      <Image
        source={source}
        style={[
          styles.image,
          {
            tintColor: focused ? '#00538F' : '#949494',
          },
        ]}
        resizeMode={'contain'}
      />
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
      backgroundColor: '#fff',
      paddingBottom: 15.5,
      borderTopWidth: 0,
    },
  });

export default MainTabs;
