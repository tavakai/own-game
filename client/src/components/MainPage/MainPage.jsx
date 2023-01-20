import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import style from './MainPage.module.css';



export default function MainPage() {
// const dispatch=useDispatch()
// const user = useSelector((state)=>state.user)

// useEffect(() => {
//     dispatch(userCheckAction());
//   }, [logout || login || registration])



  return (

<div className={style.container}>
<div>Приветствую,name ,cейчас у вас points </div>
    <div className="">
    <button className={style.button} type="button">Начать играть</button>
  </div>
  </div>
  )
}
