import React from 'react';
import { useDispatch } from 'react-redux';
import { regHandler } from '../../redux/reducers/users/userSlice';

export default function Reg() {
  const dispatch = useDispatch();

  return (
    <form onSubmit={(e) => dispatch(regHandler(e))} className="loginPage">
      <div className="form">
        <h1 className="form__title">Регистрация</h1>

        <div className="form__group">
          <input
            name="name"
            type="text"
            className="form__input"
            placeholder=" "
          />
          <label className="form__label">Name</label>
        </div>

        <div className="form__group">
          <input
            name="email"
            type="email"
            className="form__input"
            placeholder=" "
          />
          <label className="form__label">Email</label>
        </div>

        <div className="form__group">
          <input
            name="pass"
            type="password"
            className="form__input"
            placeholder=" "
          />
          <label className="form__label">Password</label>
        </div>

        <button type="submit" className="form__button">
          Регистрация
        </button>
      </div>
    </form>
  );
}
