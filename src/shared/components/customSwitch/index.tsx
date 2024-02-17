import {StyleSheet, View, Image} from 'react-native';
import React, {useState} from 'react';
import {RF} from '@theme';
import ToggleSwitch from 'toggle-switch-react-native';
import {useTheme} from '@react-navigation/native';
import {EventRegister} from 'react-native-event-listeners';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getIsDarkModeEnabled, setIsDarkModeEnabled} from '@utils';
import {darkIcon} from '@assets';

interface Props {
  lablel?: any;
  mode?: any;
  initialState?: any;
  onPress?: any;
}

const CustomSwitch = (props: Props) => {
  const {lablel, mode, initialState, onPress} = props;
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);

  const [isEnabled, setEnabled] = useState(getIsDarkModeEnabled());

  const handleChange = async (key: any, appTheme: any) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(appTheme));
      setEnabled(appTheme);
      setIsDarkModeEnabled(appTheme);
      EventRegister.emit('appThemeChange', appTheme);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      {mode == 'dark' && (
        <ToggleSwitch
          isOn={isEnabled}
          onColor={'transparent'}
          offColor={colors.card}
          label="Dark"
          trackOffStyle={styles.trackOff}
          icon={
            <View style={styles.nightView}>
              {isEnabled && (
                <Image source={darkIcon} style={styles.nightIcon} />
              )}
            </View>
          }
          trackOnStyle={styles.trackOn}
          thumbOffStyle={styles.thumbOff}
          labelStyle={styles.label}
          size="medium"
          onToggle={() => handleChange('THEME_KEY', !isEnabled)}
        />
      )}
      {mode == 'light' && (
        <ToggleSwitch
          isOn={initialState}
          onColor={colors.primary}
          offColor={colors.card}
          label={lablel}
          trackOffStyle={styles.trackOff}
          trackOnStyle={styles.trackOn}
          thumbOffStyle={styles.thumbOff}
          labelStyle={styles.label}
          size="medium"
          onToggle={onPress}
        />
      )}
    </View>
  );
};

export default CustomSwitch;

const useStyles = (colors: any) =>
  StyleSheet.create({
    label: {
      color: colors.text,
      fontFamily: 'Montserrat-SemiBold',
      fontSize: RF(16),
      marginLeft: 0,
    },
    trackOff: {
      position: 'absolute',
      right: 0,
    },
    nightView: {
      position: 'absolute',
      height: RF(23),
      right: -4,
      borderRadius: 10,
      width: RF(43),
    },
    thumbOff: {
      backgroundColor: colors.text,
      height: RF(22),
      width: RF(22),
      borderRadius: 15,
    },

    trackOn: {
      position: 'absolute',
      right: 0,
    },

    nightIcon: {height: '100%', width: '100%'},
  });
