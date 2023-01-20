import React,{useContext, useEffect} from 'react'
import { NavLink, useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import style from './NavBar.module.css'
import { logout } from '../../redux/reducers/users/userSlice'
import {
    Button,
    NavItem,
  } from 'reactstrap';

export default function NavBar() {
const dispatch=useDispatch()
const navigate = useNavigate()
const user = useSelector((state)=>state.user)

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to={'/'}>Своя игра</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to={'/login'}>Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/signup'}>Registration</NavLink>
        </li>
        <li className="nav-item">
        <NavItem><Button onClick={()=>dispatch(logout())}>Logout</Button></NavItem>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}
