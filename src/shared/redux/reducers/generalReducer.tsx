import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  points: null,
  getStartedData: null,
};

export const generalReducer = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setPointsData: (state, action) => {
      state.points = action.payload;
    },
    setGetStartedData: (state, action) => {
      state.getStartedData = action.payload;
    },
  },
});

export const {setPointsData, setGetStartedData} = generalReducer.actions;

export default generalReducer.reducer;
