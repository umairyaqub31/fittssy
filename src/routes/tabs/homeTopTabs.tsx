import {Text} from '@components';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useTheme} from '@react-navigation/native';
import {ExerciseOfDay, PreviousExercise} from '@screens';
import {RF} from '@theme';

const Tab = createMaterialTopTabNavigator();

export default function HomeTopTabs() {
  const theme: any = useTheme();
  const colors = theme.colors;
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarLabel: ({focused, color}) => (
          <Text color={focused ? colors.primary : colors.grayText} medium>
            {route.name.charAt(0).toUpperCase() +
              route.name.slice(1).toLowerCase()}{' '}
          </Text>
        ),

        tabBarStyle: {
          backgroundColor: colors.background,
          marginTop: RF(14),
          shadowOpacity: 0,
          elevation: 0,
          width: '100%',
          alignSelf: 'center',
        },
      })}>
      <Tab.Screen name="Exercise Of the Day" component={ExerciseOfDay} />
      <Tab.Screen name="Previous Exercise" component={PreviousExercise} />
    </Tab.Navigator>
  );
}
