import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  user: null,
  password: null,
  authToken: null,
  isLoggedIn: false,
  isModalVisible: false,
  getStarted: false,
  Info: '',
  userImg: null,
  isDarkEnabled: false,
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setIsModalVisible: (state, action) => {
      state.isModalVisible = action.payload;
    },
    signOut: state => {
      state.user = null;
      state.colorCode = '#19383A';
      state.authToken = null;
      state.isLoggedIn = false;
    },
    setGetStarted: (state, action) => {
      state.getStarted = action.payload;
    },
    setInfo: (state, action) => {
      state.info = action.payload;
    },
    setUserImg: (state, action) => {
      state.userImg = action.payload;
    },
    setIsDarkEnabled: (state, action) => {
      state.isDarkEnabled = action.payload;
    },
  },
});

export const {
  setUser,
  signOut,
  setPassword,
  setAuthToken,
  setIsLoggedIn,
  setIsModalVisible,
  setGetStarted,
  setInfo,
  setUserImg,
  setIsDarkEnabled,
} = userReducer.actions;

export default userReducer.reducer;
