import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {useTheme} from '@react-navigation/native';
import {upload} from '@assets';
import {PrimaryButton, Text} from '@components';
import {RF} from '@theme';
import {requestCameraPermission} from '@services';
import ImagePicker from 'react-native-image-crop-picker';

const WorkoutPhotos = () => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);

  useEffect(() => {
    // if (userImg !== null) {
    requestCameraPermission();
    // }
  }, []);

  const handleOpenPicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        if (image && image.path) {
          console.log(image.path);
          // Process the image path or do something with the image data here
          // dispatch(setUserImg(image.path));
        } else {
          console.log('No image selected or an error occurred.');
        }
      })
      .catch(error => {
        console.log('Error selecting image:', error);
      });
  };
  return (
    <View style={styles.container}>
      <Image source={upload} style={styles.img} />
      <Text semiBold color={colors.text} size={18}>
        Upload progress photos
      </Text>
      <Text regular color={colors.grayText} size={14} style={styles.subText}>
        Taking progress photos and seeing how far you’ve come will help you stay
        on track
      </Text>
      <PrimaryButton
        title={'Upload Now'}
        textColor={colors.white}
        width={263}
        onPress={handleOpenPicker}
      />
    </View>
  );
};

export default WorkoutPhotos;

const useStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      // justifyContent: 'center',
    },
    img: {
      width: 182,
      height: 139,
      marginTop: RF(66),
      marginBottom: RF(46),
    },
    subText: {
      marginTop: 12,
      marginBottom: RF(46),
      width: 302,
    },
  });
