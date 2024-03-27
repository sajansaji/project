import React, { useContext, useEffect, useState } from 'react';
import { Link,NavLink,useLocation } from 'react-router-dom';
import './NavBar.css'; // Import CSS file for styling
import 'boxicons';
import { authContext } from '../App';


const NavBar = () => {
  const location = useLocation();
  const [authState,setAuthState] = useContext(authContext);
  console.log(authState);
  useEffect(() => {
    const loggedInUser  = JSON.parse(localStorage.getItem("authenticated"));
    setAuthState(loggedInUser);
  }, []);

  if(!authState)
  {
    console.log("nothing");
    return null;
  }
  else{
  return (
    <div>
    <img src="/logo1.svg" alt="log" className="logopicmob" />
      
    <nav className="navbar">
    <img src="/logo1.svg" alt="log" className="logopic" />
      <ul >
        <li id='noi' ><NavLink className={({isActive}) => {
          return (!isActive ? 'nav-text' : 'nav-text-active')
        }} to='/'>Home</NavLink></li>
        <li id='noi'><NavLink className={({isActive}) => {
          return (!isActive ? 'nav-text' : 'nav-text-active')
        }} to='/loc'>Location</NavLink></li>
        <li id='noi'><NavLink className={({isActive}) => {
          return (!isActive ? 'nav-text' : 'nav-text-active')
        }} to='/news'>News</NavLink></li>
        <li ><NavLink className={({isActive}) => {
          return (!isActive ? 'nav-text' : 'nav-text-active')
        }} to='/Login'>Login</NavLink></li>


        
        
      </ul>
      <li className='mobileonly'><Link to='/'><box-icon type='solid' name='home'></box-icon></Link></li>
      <li className='mobileonly'><Link to='/loc'><box-icon name='current-location' ></box-icon></Link></li>
        <li className='mobileonly'><Link to='/News'><box-icon name='news'></box-icon></Link></li>
        <li className='mobileonly'><Link to='/Login'><box-icon name='user-circle' type='solid' ></box-icon></Link></li>
    </nav>
    </div>
  );
}}
export default NavBar;