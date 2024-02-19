import {StyleSheet, View, Image} from 'react-native';
import React, {useState} from 'react';
import {BackHeader, Text, Wrapper} from '@components';
import {useTheme} from '@react-navigation/native';
import {RF} from '@theme';
import {detailData} from '@utils';
import {back, next} from '@assets';
import {Pressable} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';
import {ScrollView} from 'react-native';

const data = [{value: 20}, {value: 30}, {value: 40}, {value: 20}];
const PlanDetailGraph = ({route, navigation}: any) => {
  const {item} = route.params;
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  const [currentIndex, setCurrentIndex] = useState<any>(item.id);
  console.log(item, '........');
  const handleNext = () => {
    setCurrentIndex((prevIndex: any) => (prevIndex + 1) % detailData.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex: any) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1,
    );
  };
  return (
    <ScrollView>
      <Wrapper isTop>
        <BackHeader startIcon navigation={navigation} />
        <View style={styles.absolute}>
          <Pressable onPress={handlePrev} style={styles.press}>
            <Image source={back} style={styles.ImageStyle} />
          </Pressable>
          <Text numberOfLines={2} center style={{width: '50%'}} medium>
            {detailData[currentIndex].name}
          </Text>
          <Pressable onPress={handleNext} style={styles.press}>
            <Image source={next} style={styles.ImageStyle} />
          </Pressable>
        </View>

        {/* <View style={{flex: 1}}>
          <LineChart
            areaChart
            data={data}
            startFillColor="rgba(40, 204, 158, 0.21)"
            startOpacity={0.8}
            endFillColor="rgb(203, 241, 250)"
            endOpacity={0.3}
          />
        </View> */}
      </Wrapper>
    </ScrollView>
  );
};

export default PlanDetailGraph;
const useStyles = (colors: any) =>
  StyleSheet.create({
    ImageStyle: {
      width: RF(12),
      height: RF(12),
      resizeMode: 'contain',
      tintColor: colors.text,
    },
    press: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      width: RF(30),
    },
    absolute: {
      position: 'absolute',
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: RF(50),
      top: 30,
    },
  });
