import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

// export const gray = '#95979D';
// export const medium_Gray = '#74767E';
// export const low_gray = '#838589';
// export const light_grey = '#F9FAFB';
// export const TEXT = 'black';
// export const GREY = 'grey';
// export const BLACK = 'black';
// export const WHITE = 'white';

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;
export const ASPECT_RATIO = SCREEN_HEIGHT / SCREEN_WIDTH;
export const BASE_UNIT_WIDTH = 320;
export const BASE_UNIT_HEIGHT = 640;
export const BASE_ASPECT_RATIO = BASE_UNIT_HEIGHT / BASE_UNIT_WIDTH;
export const ASPECT_DIFF = ASPECT_RATIO / BASE_ASPECT_RATIO;

export const mulish_regular = 'Mulish-Regular';
export const mulish_bold = 'Mulish-Bold';
export const mulish_medium = 'Mulish-Medium';

export const customFonts = {
  fonts: {
    primary: 'PlusJakartaSans-Regular',
    medium: 'PlusJakartaSans-Medium',
    bold: 'PlusJakartaSans-Bold',
  },
};

export const darkThemeStyle = {
  colors: {
    primary: '#36D8AA',
    error: '#D0001C',
    text: '#FFFFFF',
    grayText: '#AEADAD',
    lightGray: '#EAEAEA',
    dimGray: '#DDDDDD73',
    fadeGray: '#CECECE',
    card: '#222222',
    theme: '#000',
    background: '#FFFFFF',
    white: '#FFFFFF',
    lightGray: '#1717179E',
  },
};

export const defaultTheme = {
  colors: {
    primary: '#36D8AA',
    error: '#D0001C',
    text: '#0D0D0D',
    grayText: '#AEADAD',
    dimGray: '#DDDDDD73',
    fadeGray: '#CECECE',
    theme: '#fff',
    card: '#F0F0F0',
    lightGray: '#EAEAEA',
    background: '#FFFFFF',
    white: '#FFFFFF',
    lightGray: '#F6F6F6',
  },
};
