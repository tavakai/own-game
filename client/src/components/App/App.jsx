import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import {
  handleLogin, logout, regHandler, userCheckAction,
} from '../../redux/reducers/users/userSlice';
import Login from '../Auth/Login';
import MainPage from '../MainPage/MainPage';
import NavBar from '../NavBar/NavBar';
import Reg from '../Reg/Reg';
import Table from '../Table/Table';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(userCheckAction());
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Reg />} />

      </Routes>
      <Table />
    </>
  );
}

export default App;
