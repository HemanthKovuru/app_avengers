import React, { useState } from "react";
import "./Navbar.scss";
import Logo from "./../../asserts/logo.png";

import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ setOpenPopUp }) => {
  const handleClick = () => {
    const dropdown = document.querySelector(".dropdown");
    const userArrow = document.querySelector(".user-arrow");
    dropdown.classList.toggle("visible");
    userArrow.classList.toggle("rotate");
  };

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  const history = useNavigate();

  return (
    <div className='navbar-container'>
      <div className='container'>
        <div className='navbar'>
          {/* <div className='navbar-logo'>TakeTestPro</div> */}
          <Link to='/'>
            <img className='navbar-logo' src={Logo} alt='header logo' />
          </Link>
          <div className='search-box'>
            <input type='text' placeholder='Search by bookname, author' />
            <div className='search-icon'>
              <svg
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                width='22'
                fill='#34495e'
                height='22'
                viewBox='0 0 32 32'>
                <title>search</title>
                <path d='M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z'></path>
              </svg>
            </div>
          </div>

          {user ? (
            <div onClick={handleClick} className='user-settings'>
              <img
                className='user-img'
                src='https://images.unsplash.com/photo-1587918842454-870dbd18261a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=943&q=80'
                alt=''
              />
              <div className='user-name'>{user && user.user.firstname}</div>
              <svg
                className='user-arrow'
                viewBox='0 0 492 492'
                fill='currentColor'>
                <path d='M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z'></path>
              </svg>
              <ul className='dropdown'>
                <li>
                  <Link to='/profile'>Profile</Link>
                </li>
                <li
                  onClick={() => {
                    localStorage.removeItem("user");
                    history("/");
                  }}>
                  <Link to='/'>Logout</Link>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <div
                className='btn-signin'
                onClick={() => setOpenPopUp((prev) => !prev)}>
                Sign In
              </div>
              <div className='btn-signin'>Cart</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
