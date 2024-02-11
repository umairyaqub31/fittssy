import React from 'react';
import {RF} from '@theme';
import {StyleSheet} from 'react-native';
import {Overlay, OverlayProps} from 'react-native-elements';

interface Props extends OverlayProps {
  setOverlay?: any;
  overlay?: any;
  height?: any;
  width?: any;
}

const CustomOverlay = (props: Partial<Props>) => {
  const {overlay, setOverlay, height, width, ...otherProps} = props;

  const toggleOverlay = () => {
    setOverlay(!overlay);
  };

  return (
    <Overlay
      isVisible={overlay}
      onBackdropPress={toggleOverlay}
      overlayStyle={[
        styles.main,
        {height: height ? RF(height) : RF(200), width: width ? width : RF(320)},
      ]}>
      {props.children}
    </Overlay>
  );
};

const styles = StyleSheet.create({
  main: {
    borderRadius: 30,
  },
});

export default CustomOverlay;
