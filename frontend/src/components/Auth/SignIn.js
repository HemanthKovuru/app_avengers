import React, { useState } from "react";
import "./Auth.scss";

import Logo2 from "./../../asserts/logo2.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setOpenPopUp, setSignUpPopUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // handle click
  const handleClick = () => {
    setOpenPopUp(false);
    setSignUpPopUp(true);
  };

  // handle Signin
  const handleSignin = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const response = await axios({
        url: `http://localhost:9800/api/v1/users/signin`,
        method: "POST",
        data: {
          email,
          password,
        },
      });
      console.log(response);
      if (response.data.status === "success") {
        localStorage.setItem("user", JSON.stringify(response.data.data));
        navigate("/");
        setOpenPopUp(false);
      }
    } catch (err) {
      console.log(err.response);
      alert(err.response.data.message);
    }
  };

  return (
    <div className='form-bg'>
      <div className='signin-box'>
        <div onClick={() => setOpenPopUp(false)} className='cross'>
          &#10005;
        </div>
        <img className='signin-logo' src={Logo2} alt='signin logo' />
        {/* <div className='signin-logo'>BOOKSWAGONPRO</div> */}

        <form className='form-signin'>
          <input
            className='form__input'
            type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {/* <div className="err-msg">WEoor logging in</div> */}
          <input
            className='form__input'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button onClick={handleSignin} className='btn btn-submit'>
            Sign In
          </button>
          <div className='reset-link'>
            Having issues logging in? Reset your password here
          </div>
          <div onClick={handleClick} className='signup-link'>
            New to TakeTestPro? Signup here
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
