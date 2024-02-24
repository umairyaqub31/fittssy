import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useTheme} from '@react-navigation/native';
import {WorkoutLogs, WorkoutNotes, WorkoutBody, WorkoutPhotos} from '@screens';

const Tab = createMaterialTopTabNavigator();

export default function TopTabs(props: any) {
  const {selectedDate} = props;
  console.log('ppp...', selectedDate);
  const theme: any = useTheme();
  const colors = theme.colors;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: '400',
          color: '#CFCFCF',
          margin: 0,
          marginHorizontal: 0,
        },
        tabBarItemStyle: {
          // borderWidth: 1,
          paddingRight: 0,
          paddingLeft: 0,
        },
        tabBarStyle: {
          backgroundColor: colors.background,
        },
      }}>
      <Tab.Screen name="Logs" component={WorkoutLogs} />
      <Tab.Screen
        name="Notes"
        children={() => <WorkoutNotes selectedDate={selectedDate} />}
      />
      <Tab.Screen name="Body" component={WorkoutBody} />
      <Tab.Screen name="Photos" component={WorkoutPhotos} />
    </Tab.Navigator>
  );
}
