import React, { useState, useEffect } from "react";
import "./LogIn.css";
import axios from "axios";
import { AlertCircle, Eye, EyeOff } from "lucide-react";
import Logo from "../Images/Spotify_Logo_CMYK_White.png";
function LogIn() {
  const [userEmail, setuserEmail] = useState("");
  const [response,setresponse] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [isAnyProblem, setisAnyProblem] = useState(false)
  const [isPasswordVisible, setisPasswordVisible] = useState(false);


  const submitForm = async () => {
    const userObj = {
      email: userEmail,
      password: userPassword,
    };
    try {
      setresponse(
        await axios.post(
          "http://localhost:8001/backend/user/login",
          userObj
        )
      );
      if(response.data.token){
          localStorage.setItem("userToken", response.data.token);
          localStorage.setItem("userdata", response.data.user);
          console.log(response.data.token);
          setisAnyProblem(false);
      }
    } catch (error) {
        console.log(error);
        setisAnyProblem(true);
    }
  };

  return (
    <div id="login">
      <div id="log-in-spotify-logo">
        <img src={Logo} alt="" srcset="" />
      </div>
      <form action="post">
        <h1>Login to Spotify</h1>
        {isAnyProblem? (
            <div id="user-warning">
              <AlertCircle size={24} strokeWidth={2.25} />
              <p>
              Oops! Something went wrong, please try again or take a look at our  <a href="#">help area</a>.
              </p>
            </div>
          ) : (
            <></>
          )}
        <section id="login-form">
          <label htmlFor="login-user-email-id">Email or username</label>
          <input
            type="email"
            name="login-user-email-id"
            id="login-user-email-id"
            value={userEmail}
            onChange={(e) => {
              setuserEmail(e.target.value);
            }}
          />
          <div id="login-passwordcontainer">

          <label htmlFor="login-user-password">Password</label>
          <input
           type={ isPasswordVisible?"text":"password"}
            name="login-user-password"
            id="login-user-password"
            value={userPassword}
            onChange={(e) => {
                setuserPassword(e.target.value);
            }}
            />
                <div id="login-password-visibility" onClick={()=>{setisPasswordVisible(!isPasswordVisible)}}>
              {isPasswordVisible?<Eye/>:<EyeOff/>}
            </div>

            </div>
          <div id="remindmecontainer">
            <label className="switch">
              <input type="checkbox" id="remindMe" />
              <span className="slider" />
            </label>
            <label htmlFor="remindMe">Remember Me</label>
          </div>
          <a
            className="login-next-btn"
            onClick={submitForm}
          >
            Login
          </a>
          <a href="#" className="forgotpassword">
            Forgot Password?
          </a>
        </section>
      </form>
    </div>
  );
}

export default LogIn;
