import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/users/userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
