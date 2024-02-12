import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {WorkoutLogs, WorkoutNotes, WorkoutBody, WorkoutPhotos} from '@screens';

const Tab = createMaterialTopTabNavigator();

export default function TopTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 16, fontWeight: '400', color: '#CFCFCF'},
        tabBarItemStyle: {width: 90},
        tabBarStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Tab.Screen name="Logs" component={WorkoutLogs} />
      <Tab.Screen name="Notes" component={WorkoutNotes} />
      <Tab.Screen name="Body" component={WorkoutBody} />
      <Tab.Screen name="Photos" component={WorkoutPhotos} />
    </Tab.Navigator>
  );
}
