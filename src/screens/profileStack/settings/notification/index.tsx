import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {BackHeader, Line, Text, Wrapper} from '@components';
import ToggleSwitch from 'toggle-switch-react-native';
import {useTheme} from '@react-navigation/native';
import {margin, RF} from '@theme';

const Notification = ({navigation}: any) => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  const [toggle, setToggle] = useState(true);
  const [toggle2, setToggle2] = useState(false);

  const handleChange = () => {
    setToggle(!toggle);
  };

  const handleChange2 = () => {
    setToggle2(!toggle2);
  };

  return (
    <Wrapper isTop>
      <BackHeader title={'Notifications'} startIcon navigation={navigation} />
      <View style={margin.top_32}>
        <ToggleSwitch
          isOn={toggle}
          onColor={colors.primary}
          offColor={colors.card}
          circleColor={toggle ? colors.white : '#000'}
          label="Workout Reminders"
          trackOffStyle={styles.trackOff}
          trackOnStyle={{position: 'absolute', right: 0}}
          thumbOnStyle={styles.onThumb}
          thumbOffStyle={{backgroundColor: '#000'}}
          labelStyle={styles.label}
          size="medium"
          onToggle={handleChange}
        />
        <Line />
        <ToggleSwitch
          isOn={toggle2}
          onColor={colors.primary}
          offColor={colors.card}
          circleColor={toggle ? colors.white : '#000'}
          label="Program Notifications"
          trackOffStyle={styles.trackOff}
          trackOnStyle={{position: 'absolute', right: 0}}
          thumbOnStyle={styles.onThumb}
          thumbOffStyle={{backgroundColor: '#000'}}
          labelStyle={styles.label}
          size="medium"
          onToggle={handleChange2}
        />
      </View>
    </Wrapper>
  );
};

export default Notification;

const useStyles = (colors: any) =>
  StyleSheet.create({
    label: {
      color: colors.text,
      fontFamily: 'Montserrat-SemiBold',
      fontSize: RF(16),
    },
    onThumb: {
      backgroundColor: colors.white,
    },
    trackOff: {
      position: 'absolute',
      right: 0,
    },
  });
