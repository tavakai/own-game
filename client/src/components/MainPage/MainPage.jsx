import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import style from './MainPage.module.css';
import { userCheckAction,logout,regHandler,handleLogin } from '../../redux/reducers/users/userSlice';



export default function MainPage() {



    const dispatch=useDispatch()
const {value} = useSelector((state)=>state.user)
useEffect(() => {
    dispatch(userCheckAction());
  }, [logout,regHandler,handleLogin])


console.log(value)
  return (
value.name ?(
<div className={style.container}>
<div>Приветствую,{value?.name} , cейчас у вас {value?.points} очков </div>
    <div className="">
    <button className={style.button} type="button">Начать играть</button>
  </div>
  </div>
):(<div className={style.container}>Войдите в свой аккаунт, чтобы начать игру</div>)
  )
}
