import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: {},
    points:0
  },
  reducers: {
    setUser: (state, action) => { state.value = action.payload; },
    logout: (state, payload ) => null,
    setScore:(state,action) => state.points+=action.payload
  },
});

export const { setUser, logout, setScore } = userSlice.actions;

export const regHandler = (e) => (dispatch) => {
  e.preventDefault();
  axios.post('http://localhost:3001/user/signup', Object.fromEntries(new FormData(e.target))).then((res) => {
    dispatch(setUser(res.data));
  }).catch(console.log);
};

export const handleLogin = (e) => (dispatch) => {
  e.preventDefault();
  axios.post('http://localhost:3001/user/login',Object.fromEntries(new FormData(e.target))).then((res) => {
    dispatch(setUser(res.data.user));
  }).catch(console.log);
};

export const userLogout = () => (dispatch) => {
  axios.get('http://localhost:3001/user/logout').then(() => dispatch(logout())).catch(console.log);
};

export const userCheckAction = () => (dispatch) => {
  axios.post('http://localhost:3001/user/check').then((res) => dispatch(setUser(res.data))).catch(console.log);
};

export const pointAdder = (id,e) => (dispatch) => {
axios.patch(`http://localhost:3001/user/edit/${id}`,Object.fromEntries(new FormData(e.target)))
.then((res)=>dispatch(setScore(res.data)))
.catch(()=>dispatch(setScore([])))

}


export default userSlice.reducer;


