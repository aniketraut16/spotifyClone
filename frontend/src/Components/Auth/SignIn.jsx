import React from "react";
import "./SignIn.css";
import { ChevronLeft } from "lucide-react";
function Sign() {
  return (
    <div id="signin">
      <form>
        <section id="step0">
          <h1>Sign up to Start listening </h1>
          <label htmlFor="user-email-id">Email address</label>
          <input type="email" name="user-email-id" id="user-email-id" />
          <a href="#" id="use-phone-instead">
            Use phone number instead
          </a>
          <a href="#step1" className="sign-up-next-btn">
            Next
          </a>
        </section>
        <section id="step1">
          <div id="step1loadingbar"></div>
          <div className="totalloadingbar"></div>
          <a href="#step0" className="sign-up-prev-btn">
            <ChevronLeft size={32} />
          </a>
          <h3 className="sign-in-step-count">Step 1 of 3</h3>
          <h3 className="step-description">Create a password</h3>
          <label htmlFor="sign-in-password">Password</label>
          <div id="password-input-container">
            <input
              type="password"
              name="sign-in-password"
              id="sign-in-password"
            />
            <p className="steps-field-description">
              The password must contain atleast 8 character. We recommend
              including at least 1 number and 1 special character.{" "}
            </p>
          </div>

          <a href="#step2" className="sign-up-next-btn">
            Next
          </a>
        </section>
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
          <input type="text" name="sign-in-name" id="sign-in-name" />
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
            />
            <select name="sign-in-month" id="sign-in-month">
              <option value="month" selected>
                Month
              </option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <input
              type="number"
              name="sign-in-day"
              id="sign-in-day"
              placeholder="dd"
            />
          </div>
          <label htmlFor="sign-in-gender">Gender</label>
          <p className="steps-field-description">
            We use your gender to help personalise our content recommendations
            and ads for you.
          </p>
          <div id="gender-input-container">
            <input type="radio" name="sign-in-gender" id="sign-in-gender-man" />
            <label htmlFor="sign-in-gender-man">Man</label>
            <input
              type="radio"
              name="sign-in-gender"
              id="sign-in-gender-woman"
            />
            <label htmlFor="sign-in-gender-woman">Woman</label>
            <input
              type="radio"
              name="sign-in-gender"
              id="sign-in-gender-non-binary"
            />
            <label htmlFor="sign-in-gender-non-binary">Non-binary</label>
            <input
              type="radio"
              name="sign-in-gender"
              id="sign-in-gender-something-else"
            />
            <label htmlFor="sign-in-gender-something-else">
              Something else
            </label>
            <input
              type="radio"
              name="sign-in-gender"
              id="sign-in-gender-prefer-not-to-say"
            />
            <label htmlFor="sign-in-gender-prefer-not-to-say">
              Prefer not to say
            </label>
          </div>
          <a href="#step3" className="sign-up-next-btn">
            Next
          </a>
        </section>
        <section id="step3">
          <div id="step3loadingbar"></div>
          <div className="totalloadingbar"></div>
          <a href="#step2" className="sign-up-prev-btn">
            <ChevronLeft size={32} />
          </a>
        </section>
      </form>
    </div>
  );
}

export default Sign;
