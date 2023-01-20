import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleLogin } from '../../redux/reducers/users/userSlice';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const login = (e) => {dispatch(handleLogin(e));navigate('/')}
  return (
    <form
      onSubmit={(e) => login(e)}
      className="loginPage"
    >
      <div className="form">

        <h1 className="form__title">Авторизация</h1>

        <div className="form__group">
          <input name="email" type="text" className="form__input" placeholder=" " />
          <label className="form__label">Email</label>
        </div>

        <div className="form__group">
          <input name="pass" type="password" className="form__input" placeholder=" " />
          <label className="form__label">Password</label>
        </div>

        <button type="submit" className="form__button">Авторизация</button>

      </div>
    </form>
  );
}
