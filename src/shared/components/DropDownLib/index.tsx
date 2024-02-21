import {useTheme} from '@react-navigation/native';
import {useState} from 'react';
import {Image} from 'react-native';
import {StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

interface Props {
  data?: any;
  placeholder?: string;
  style?: any;
  value?: any;
  setValue?: any;
}
const CustomDropDown = (props: Partial<Props>) => {
  const {data, placeholder, style, value, setValue} = props;
  const [open, setOpen] = useState(false);
  //   const [value, setValue] = useState(null);
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  return (
    <DropDownPicker
      containerStyle={{height: 50}}
      dropDownContainerStyle={{
        flex: 1,
        // maxHeight: 300,
        backgroundColor: colors.card,
        borderColor: colors.card,
        marginTop: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 1,
      }}
      arrowIconStyle={{tintColor: colors.text}}
      textStyle={{color: colors.text}}
      style={style ? style : styles.container}
      placeholder={placeholder}
      placeholderStyle={{color: colors.text}}
      open={open}
      value={value}
      items={data}
      setOpen={setOpen}
      zIndex={1000}
      maxHeight={300}
      setValue={setValue}
      //   setItems={setItems}
    />
  );
};
export default CustomDropDown;

const useStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.card,
      height: 37,
      borderRadius: 35,
      borderWidth: 0.5,
      borderColor: colors.grayText,
    },
  });
