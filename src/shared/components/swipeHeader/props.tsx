import {back, next} from '@assets';
import {View, Image} from 'react-native';

export const Innerprops = (styles: any) => ({
  buttonWrapperStyle: styles.buttonWrapper,
  activeDot: <View style={styles.null} />,
  dot: <View style={styles.nul} />,
  containerStyle: styles.container,
  showsButtons: true,
  prevButton: (
    <View style={styles.ImageView}>
      <Image source={back} style={styles.ImageStyle} />
    </View>
  ),
  nextButton: (
    <View style={styles.ImageView}>
      <Image source={next} style={styles.ImageStyle} />
    </View>
  ),
});
