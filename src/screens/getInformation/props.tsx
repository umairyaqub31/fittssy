import {useTheme} from '@react-navigation/native';
import {RF} from '@theme';
import useStyles from './styles';

export const bar_props = (colors: any, styles: any, currentStep: any) => ({
  color: colors.primary,
  progress: currentStep,
  width: RF(230),
  height: RF(8),
  style: styles.bar,
});
