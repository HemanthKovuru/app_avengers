import React, { useState } from "react";
import "./Auth.scss";
import Logo2 from "./../../asserts/logo2.png";
import axios from "axios";
import { useNavigate } from "react-router";

const SignUp = ({ setSignUpPopUp, setOpenPopUp }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleClick = () => {
    setSignUpPopUp(false);
    setOpenPopUp(true);
  };

  const navigate = useNavigate();

  // handle Signin
  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const response = await axios({
        url: `http://localhost:9800/api/v1/users/signup`,
        method: "POST",
        data: {
          firstname,
          lastname,
          email,
          password,
          confirmPassword,
        },
      });
      console.log(response);
      if (response.data.status === "success") {
        localStorage.setItem("user", JSON.stringify(response.data.data));
        navigate("/");
        setSignUpPopUp(false);
      }
    } catch (err) {
      console.log(err.response);
      alert(err.response.data.message);
    }
  };

  return (
    <div className='form-bg'>
      <div className='signin-box'>
        <div onClick={() => setSignUpPopUp(false)} className='cross'>
          &#10005;
        </div>
        {/* <div className="signin-box-logo">TakeTestPro</div> */}
        <img className='signin-logo' src={Logo2} alt='signin logo' />
        <form className='form-signin'>
          <div className='half-inputs'>
            <input
              className='form__input custom__input'
              type='text'
              placeholder='Firstname'
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            />
            <input
              className='form__input custom__input'
              type='text'
              placeholder='Lastname'
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
          </div>
          <input
            className='form__input'
            type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className='form__input'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            className='form__input'
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <button onClick={handleSignup} className='btn btn-submit'>
            Sign Up
          </button>
          <div onClick={handleClick} className='reset-link'>
            Already have an accounr? Signin here
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
