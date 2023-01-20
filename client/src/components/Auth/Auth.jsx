import React from 'react';
import { useDispatch } from 'react-redux';
import { handleLogin } from '../../redux/reducers/users/userSlice';

export default function Auth() {
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={(e) => {
        console.log(e, Object.fromEntries(new FormData(e.target)));
        dispatch(handleLogin(e, Object.fromEntries(new FormData(e.target))));
      }}
      className="loginPage"
    >
      <div className="form">

        <h1 className="form__title">Авторизация</h1>

        <div className="form__group">
          <input name="email" type="text" className="form__input" placeholder=" " />
          <label className="form__label">Email</label>
        </div>

        <div className="form__group">
          <input name="pass" type="pass" className="form__input" placeholder=" " />
          <label className="form__label">Password</label>
        </div>

        <button type="submit" className="form__button">Авторизация</button>

      </div>
    </form>
  );
}
