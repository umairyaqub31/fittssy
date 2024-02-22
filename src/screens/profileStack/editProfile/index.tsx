import {StyleSheet, View, Image, Pressable, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {BackHeader, CustomInput, PrimaryButton, Wrapper} from '@components';
import {cam, prof} from '@assets';
import {icon, margin, RF} from '@theme';
import {useTheme} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import {setUserImg} from '@redux';
import {useDispatch, useSelector} from 'react-redux';
import {requestCameraPermission} from '@services';

const EditProfile = ({navigation}: any) => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  const dispatch = useDispatch();
  const {userImg} = useSelector((state: any) => state.root.user);

  useEffect(() => {
    if (userImg !== null) {
      requestCameraPermission();
    }
  }, [userImg]);

  const launchCamera = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        if (image && image.path) {
          console.log(image.path);
          // Process the image path or do something with the image data here
          dispatch(setUserImg(image.path));
        } else {
          console.log('No image selected or an error occurred.');
        }
      })
      .catch(error => {
        console.log('Error selecting image:', error);
      });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Wrapper>
        <BackHeader startIcon />
        <View style={styles.imgView}>
          <Image
            source={userImg ? {uri: userImg} : prof}
            style={styles.prof_Image}
          />
          <View style={styles.assetView}>
            <Pressable style={styles.innerView} onPress={launchCamera}>
              <Image
                source={cam}
                style={{...icon._18, tintColor: colors.text}}
              />
            </Pressable>
          </View>
        </View>
        <View style={[margin.top_70, margin.bottom_24]}>
          <CustomInput label="First Name" inputStyle={styles.input} />
          <CustomInput label="Last Name" inputStyle={styles.input} />
          <CustomInput label="Email" inputStyle={styles.input} />
          <CustomInput label="Confirm Email" inputStyle={styles.input} />
        </View>
        <PrimaryButton title={'Save'} textColor={colors.white} />
      </Wrapper>
    </ScrollView>
  );
};

export default EditProfile;

const useStyles = (colors: any) =>
  StyleSheet.create({
    imgView: {
      position: 'absolute',
      alignSelf: 'center',
      //   overflow: 'hidden',
      top: RF(43),
      height: RF(104),
      width: RF(104),
      borderRadius: 55,
    },
    prof_Image: {
      height: '100%',
      width: '100%',
      borderRadius: 55,
    },
    assetView: {
      position: 'absolute',
      bottom: RF(-8),
      right: RF(-8),
      height: RF(42),
      width: RF(42),
      borderRadius: 22,
      backgroundColor: colors.background,
      padding: RF(5),
    },
    innerView: {
      height: '100%',
      width: '100%',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.card,
    },
    input: {borderWidth: 1, borderColor: colors.card},
  });
