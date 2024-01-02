import React, { useState, useEffect } from "react";
import "./SignIn.css";
import axios from "axios";
import { ChevronLeft, AlertCircle , Eye ,EyeOff } from "lucide-react";
import Logo from "../Images/Spotify_Logo_CMYK_White.png";

function Sign() {
  const [userEmail, setuserEmail] = useState("");
  const [isValidEmail, setisValidEmail] = useState(true);
  const [isNewUser, setisNewUser] = useState(true);
  const [userPassword, setuserPassword] = useState("");
  const [username, setusername] = useState("");
  const [userBirthYear, setuserBirthYear] = useState("");
  const [userBirthMonth, setuserBirthMonth] = useState("");
  const [userBirthDay, setuserBirthDay] = useState("");
  const [userGender, setuserGender] = useState("");
  const [response, setresponse] = useState("");
  const [isPasswordVisible, setisPasswordVisible] = useState(false);
  const [touchedInputs, setTouchedInputs] = useState({
    email: false,
    password: false,
    name: false,
    birthDay: false,
    birthMonth: false,
    birthYear: false,
    gender: false,
  });

  useEffect(() => {
    const checkUser = async () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (touchedInputs.email) {
        if (emailRegex.test(userEmail)) {
          setisValidEmail(true);
          try {
            // Make the API request directly within the useEffect
            const sampleresult = await axios.get(
              "http://localhost:8001/backend/user/isavailable",
              { params: { email: userEmail } }
            );

            if (sampleresult.data.message === "User Not Exists") {
              setisNewUser(true);
            } else {
              setisNewUser(false);
            }
          } catch (error) {
            console.error("Error fetching user:", error);
          }
        } else {
          setisValidEmail(false);
          setisNewUser(true);
        }
      }
    };

    checkUser();
  }, [userEmail, touchedInputs.email]);

  const validatePassword = () => {
    return userPassword.length >= 8 && userPassword.trim() !== "";
  };
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  const validateBirthDay = () => {
    return (userBirthDay <= 31 && userBirthDay >= 1 );
  };
  const validate2BirthDay = () => {
    if(userBirthMonth%2 === 0){
      if (userBirthMonth === 2) {
        if(isLeapYear(userBirthYear)){
          return userBirthDay <= 29;
        }else{
          return userBirthDay <= 28;
        }
      }else{
        return userBirthDay <= 30;
      }
    }else{
      return false
    }
  };
  const validateBirthMonth = () => {
    return userBirthMonth !== "";
  };

  const validateBirthYear = () => {
    return userBirthYear >= 1990;
  };

  const allOk = () => {
    return (
      username.trim() !== "" &&
      validateBirthYear() &&
      validateBirthMonth() &&
      validateBirthDay() &&
      userGender !== ""
    );
  };

  const submitForm = async () => {
    var date = new Date(userBirthYear, userBirthMonth - 1, userBirthDay);

    const userObj = {
      name: username,
      email: userEmail,
      password: userPassword,
      dateOfBirth: date,
      gender: userGender,
    };
    try {
      setresponse(
        await axios.post(
          "http://localhost:8001/backend/user/createuser",
          userObj
        )
      );
      localStorage.setItem("userToken", response.data.token);
      localStorage.setItem("userdata", response.data.user);
      console.log(response.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="signin">
      <div id="sign-in-spotify-logo">
        <img src={Logo} alt="" srcset="" />
      </div>
      <form>
        {/* Step 0 - Email */}
        <section id="step0">
          <h1>Sign up to Start listening </h1>
          <label htmlFor="user-email-id">Email address</label>
          <input
            type="email"
            name="user-email-id"
            id="user-email-id"
            value={userEmail}
            onChange={(e) => {
              setuserEmail(e.target.value);
              setTouchedInputs({ ...touchedInputs, email: true });
            }}
            style={
              touchedInputs.email && !isValidEmail
                ? { border: "2px solid #f15e6c" }
                : {}
            }
          />
          {touchedInputs.email && !isValidEmail ? (
            <div className="user-warning">
              <AlertCircle size={24} strokeWidth={2.25} />
              <p>
                This email is invalid. Make sure it's written like
                example@email.com
              </p>
            </div>
          ) : (
            <></>
          )}
          {touchedInputs.email && !isNewUser ? (
            <div id="user-new-email-warning">
              <AlertCircle size={24} strokeWidth={2.25} />
              <p>
                This address is already linked to an existing account. To
                continue, <a href="#">log in</a>.
              </p>
            </div>
          ) : (
            <></>
          )}
          <a
            href={
              touchedInputs.email && isNewUser && isValidEmail ? "#step1" : "#"
            }
            className="sign-up-next-btn"
          >
            Next
          </a>
        </section>

        {/* Step 1 - Password */}
        <section id="step1">
          <div id="step1loadingbar"></div>
          <a href="#step0" className="sign-up-prev-btn">
            <ChevronLeft size={32} />
          </a>
          <div className="totalloadingbar"></div>
          <h3 className="sign-in-step-count">Step 1 of 3</h3>
          <h3 className="step-description">Create a password</h3>
          <label htmlFor="sign-in-password">Password</label>
          <div id="password-input-container">
            <input
              type={ isPasswordVisible?"text":"password"}
              name="sign-in-password"
              id="sign-in-password"
              value={userPassword}
              onChange={(e) => {
                setuserPassword(e.target.value);
                setTouchedInputs({ ...touchedInputs, password: true });
              }}
              style={
                touchedInputs.password && !validatePassword()
                  ? { border: "2px solid #f15e6c" }
                  : {}
              }
            />

            <div id="password-visibility" onClick={()=>{setisPasswordVisible(!isPasswordVisible)}}>
              {isPasswordVisible?<Eye/>:<EyeOff/>}
            </div>

            {touchedInputs.password && !validatePassword() ? (
              <div className="user-warning">
                <AlertCircle size={24} strokeWidth={2.25} />
                <p>Password should contain at least 8 characters.</p>
              </div>
            ) : (
              <></>
            )}
            <p className="steps-field-description">
              The password must contain at least 8 characters. We recommend
              including at least 1 number and 1 special character.
            </p>
          </div>
          <a
            href={validatePassword() ? "#step2" : "#"}
            className="sign-up-next-btn"
          >
            Next
          </a>
        </section>

        {/* Step 2 - Name and Date of Birth */}
        <section id="step2">
          <div id="step2loadingbar"></div>
          <div className="totalloadingbar"></div>
          <a href="#step1" className="sign-up-prev-btn">
            <ChevronLeft size={32} />
          </a>
          <h3 className="sign-in-step-count">Step 2 of 3</h3>
          <h3 className="step-description">Tell u about yourself</h3>
          <label htmlFor="sign-in-name">Name</label>
          <p className="steps-field-description">
            This name will appear on your profile
          </p>
          <input
            type="text"
            name="sign-in-name"
            id="sign-in-name"
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
              setTouchedInputs({ ...touchedInputs, name: true });
            }}
            style={
              touchedInputs.name && username.trim() === ""
                ? { border: "2px solid #f15e6c" }
                : {}
            }
          />

          {touchedInputs.name && username.trim() === "" ? (
            <div className="user-warning">
              <AlertCircle size={24} strokeWidth={2.25} />
              <p>Enter a name for your profile</p>
            </div>
          ) : (
            <></>
          )}
          <label htmlFor="sign-in-year">Date of birth</label>
          <p className="steps-field-description">
            Why do we need your date of birth?<a href="#">Learn more</a>
          </p>
          <div id="dateOfBirth-input-container">
            <input
              type="number"
              name="sign-in-year"
              id="sign-in-year"
              placeholder="yyyy"
              value={userBirthYear}
              onChange={(e) => {
                setuserBirthYear(e.target.value);
                setTouchedInputs({ ...touchedInputs, birthYear: true });
              }}
              style={
                touchedInputs.birthYear && !validateBirthYear()
                  ? { border: "2px solid #f15e6c" }
                  : {}
              }
            />
            <select
              name="sign-in-month"
              id="sign-in-month"
              value={userBirthMonth}
              onChange={(e) => {
                setuserBirthMonth(e.target.value);
                setTouchedInputs({ ...touchedInputs, birthMonth: true });
              }}
              style={
                touchedInputs.birthMonth && !validateBirthMonth()
                  ? { border: "2px solid #f15e6c" }
                  : {}
              }
            >
              <option value="" disabled selected>
                Month
              </option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <input
              type="number"
              name="sign-in-day"
              id="sign-in-day"
              placeholder="dd"
              value={userBirthDay}
              onChange={(e) => {
                setuserBirthDay(e.target.value);
                setTouchedInputs({ ...touchedInputs, birthDay: true });
              }}
              style={
                touchedInputs.birthDay && !validateBirthDay()
                  ? { border: "2px solid #f15e6c" }
                  : {}
              }
            />
          </div>
          {touchedInputs.birthDay && !validateBirthDay() ? (
            <div className="user-warning">
              <AlertCircle size={24} strokeWidth={2.25} />
              <p>{"Please enter the day of your birth date by entering a number between 1 and 31"}</p>
            </div>
          ) : (
            <></>
          )}
          {touchedInputs.birthDay && !validate2BirthDay() &&  validateBirthDay() ? (
            <div className="user-warning">
              <AlertCircle size={24} strokeWidth={2.25} />
              <p>{"Please enter your date of birth"}</p> 
              </div>
          ) : (
            <></>
          )}
          {touchedInputs.birthMonth && !validateBirthMonth() ? (
            <div className="user-warning">
              <AlertCircle size={24} strokeWidth={2.25} />
              <p>Select your birth month</p>
            </div>
          ) : (
            <></>
          )}
          {touchedInputs.birthYear && !validateBirthYear() ? (
            <div className="user-warning">
              <AlertCircle size={24} strokeWidth={2.25} />
              <p>Please enter a birth year from 1990 onwards.</p>
            </div>
          ) : (
            <></>
          )}
          <label htmlFor="sign-in-gender">Gender</label>
          <p className="steps-field-description">
            We use your gender to help personalise our content recommendations
            and ads for you.
          </p>
          <div id="gender-input-container">
            <input
              type="radio"
              name="sign-in-gender"
              id="sign-in-gender-man"
              onChange={(e) => {
                setuserGender(e.target.id.replace("sign-in-gender-", ""));
              }}
            />
            <label htmlFor="sign-in-gender-man">Man</label>
            <input
              type="radio"
              name="sign-in-gender"
              id="sign-in-gender-woman"
              onChange={(e) => {
                setuserGender(e.target.id.replace("sign-in-gender-", ""));
              }}
            />
            <label htmlFor="sign-in-gender-woman">Woman</label>
            <input
              type="radio"
              name="sign-in-gender"
              id="sign-in-gender-non-binary"
              onChange={(e) => {
                setuserGender(e.target.id.replace("sign-in-gender-", ""));
              }}
            />
            <label htmlFor="sign-in-gender-non-binary">Non-binary</label>
            <input
              type="radio"
              name="sign-in-gender"
              id="sign-in-gender-something-else"
              onChange={(e) => {
                setuserGender(e.target.id.replace("sign-in-gender-", ""));
              }}
            />
            <label htmlFor="sign-in-gender-something-else">
              Something else
            </label>
            <input
              type="radio"
              name="sign-in-gender"
              id="sign-in-gender-prefer-not-to-say"
              onChange={(e) => {
                setuserGender(e.target.id.replace("sign-in-gender-", ""));
              }}
            />
            <label htmlFor="sign-in-gender-prefer-not-to-say">
              Prefer not to say
            </label>
          </div>
          {touchedInputs.gender && userGender === "" ? (
            <div className="user-warning">
              <AlertCircle size={24} strokeWidth={2.25} />
              <p>Select your gender.</p>
            </div>
          ) : (
            <></>
          )}
          <a
            href={allOk() ? "#step3" : "#"}
            className="sign-up-next-btn"
            onClick={() => {
              setTouchedInputs({
                email: true,
                password: true,
                name: true,
                birthDay: true,
                birthMonth: true,
                birthYear: true,
                gender: true,
              });
            }}
          >
            Next
          </a>
        </section>

        {/* Step 3 */}
        <section id="step3">
          <div id="step3loadingbar"></div>
          <div className="totalloadingbar"></div>
          <a href="#step2" className="sign-up-prev-btn">
            <ChevronLeft size={32} />
          </a>
          <h3 className="sign-in-step-count">Step 3 of 3</h3>
          <h3 className="step-description">Terms & Conditions</h3>
          <div className="term-and-conditions-checkbox">
            <input
              type="checkbox"
              name="term-and-conditions-checkbox"
              id="receive-marketing-messages"
            />
            <span></span>
            <label htmlFor="receive-marketing-messages">
              I would prefer not to receive marketing messages from Spotify
            </label>
          </div>
          <div className="term-and-conditions-checkbox">
            <input
              type="checkbox"
              name="term-and-conditions-checkbox"
              id="share-my-registration-data"
            />
            <span></span>
            <label htmlFor="share-my-registration-data">
              {" "}
              Share my registration data with Spotify's content providers for
              marketing purposes.
            </label>
          </div>
          <p className="term-and-conditions-notes">
            By clicking on sign-up, you agree to Spotify's{" "}
            <a href="#">Terms and Conditions of Use</a>.
          </p>
          <p className="term-and-conditions-notes">
            To learn more about how Spotify collects, uses, shares and protects
            your personal data, please see{" "}
            <a href="#">Spotify's Privacy Policy</a>.
          </p>
          <a href="#" className="sign-up-next-btn" onClick={submitForm}>
            Sign Up
          </a>
        </section>
      </form>
    </div>
  );
}

export default Sign;
