import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  dataUser: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, action) => {
      return {...state, dataUser: action.payload};
    },
  },
});

export const {getUser} = userSlice.actions;
export default userSlice.reducer;
