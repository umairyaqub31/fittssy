import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import {margin, RF} from '@theme';
import {AddButton, Text, WorkoutItem, Wrapper} from '@components';
import {useTheme} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import useStyles from './styles';
import {back, exercise, next} from '@assets';

const Home = () => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  const [selectedTab, setSelectedTab] = useState('exerciseOfTheDay');
  const [selected, setSelected] = useState('');

  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const handlePressWorkout = () => {
    // navigate('WorkoutDetail', {selectedDate: selected});
  };
  return (
    <Wrapper>
      <View style={styles.MainContainer}>
        <View style={styles.ImageView}>
          <Image source={back} style={styles.ImageStyle} />
        </View>
        <Text size={16} bold color={'rgba(13, 13, 13, 1)'}>
          Today
          <Text size={14} regular color={'rgba(13, 13, 13, 1)'}>
            (Wed 27/11/23)
          </Text>
        </Text>

        <View style={styles.ImageView}>
          <Image source={next} style={styles.ImageStyle} />
        </View>
      </View>
      <View style={{width: RF(170), marginTop: RF(20), gap: RF(4)}}>
        <Text size={22} regular color={'rgba(13, 13, 13, 1)'}>
          Welcome back
        </Text>
        <Text size={24} regular color={'rgba(40, 204, 158, 1)'}>
          Sarah!
        </Text>
      </View>
      <View style={styles.TabStyle}>
        <TouchableOpacity
          onPress={() => setSelectedTab('exerciseOfTheDay')}
          style={{
            borderBottomWidth: selectedTab === 'exerciseOfTheDay' ? 2 : 0.5,
            width: '50%',
            padding: RF(8),
            borderColor:
              selectedTab === 'exerciseOfTheDay'
                ? 'rgba(54, 216, 170, 1)'
                : 'rgba(174, 173, 173, 1)',
          }}>
          <Text
            color={
              selectedTab === 'exerciseOfTheDay'
                ? 'rgba(54, 216, 170, 1)'
                : 'rgba(174, 173, 173, 1)'
            }
            size={14}
            medium>
            Exercise of the day
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedTab('previousExercises')}
          style={{
            borderBottomWidth: selectedTab === 'previousExercises' ? 2 : 0.5,
            width: '50%',
            padding: RF(8),
            borderColor:
              selectedTab === 'previousExercises'
                ? 'rgba(54, 216, 170, 1)'
                : 'rgba(174, 173, 173, 1)',
          }}>
          <Text
            color={
              selectedTab === 'previousExercises'
                ? 'rgba(54, 216, 170, 1)'
                : 'rgba(174, 173, 173, 1)'
            }
            size={14}
            medium>
            Previous Exercises
          </Text>
        </TouchableOpacity>
      </View>
      {selectedTab === 'exerciseOfTheDay' ? (
        <LinearGradient
          colors={['#fff', '#fff']}
          style={{
            width: '100%',
            height: '40%',
            borderWidth: 1,
            marginTop: RF(20),
          }}>
          <ImageBackground
            source={exercise}
            style={styles.ImageBackgroundStyle}></ImageBackground>
          <Text center size={18} medium color={'rgba(209, 209, 209, 1)'}>
            Workout log is empty
          </Text>
        </LinearGradient>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[1, 2, 3, 4, 5]}
          renderItem={({item, index}) => (
            <WorkoutItem
              selectedItemIndex={selectedItemIndex}
              setSelectedItemIndex={setSelectedItemIndex}
              colors={colors}
              item={item}
              index={index}
              styles={styles}
              onPress={handlePressWorkout}
            />
          )}
        />
      )}
      <View
        style={{marginTop: selectedTab === 'exerciseOfTheDay' ? RF(80) : 0}}>
        <AddButton center />
      </View>
    </Wrapper>
  );
};

export default Home;
