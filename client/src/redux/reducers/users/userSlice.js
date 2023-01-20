import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: {},
  },
  reducers: {
    setUser: (state, action) => { state.value = action.payload; },
    logout: (state, { payload }) => ({ value: payload }),
  },
});

export const { setUser, logout } = userSlice.actions;

export const regHandler = (e) => (dispatch) => {
  e.preventDefault();
  axios.post('http://localhost:3001/user/signup', Object.fromEntries(new FormData(e.target))).then((resp) => {
    dispatch(setUser(resp.data));
  }).catch(console.log);
};

export const handleLogin = (e, inputs) => (dispatch) => {
  console.log(userSlice.actions);
  e.preventDefault();
  axios.post('http://localhost:3001/user/login', inputs).then((res) => {
    dispatch(setUser(res.data.user));
  }).catch(console.log);
};

export const userLogout = () => (dispatch) => {
  axios.get('http://localhost:3001/user/logout').then(() => dispatch(logout(null))).catch(console.log);
};

export const userCheckAction = () => (dispatch) => {
  axios.post('http://localhost:3001/user/check').then((res) => dispatch(setUser(res.data))).catch(console.log);
};

export default userSlice.reducer;
