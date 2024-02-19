import React from "react";
import { useState } from "react";
import authentication from "./firebase";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";

const Otptest = () => {
  const generatecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
          console.log("verifief");
        },
        defaultCounty: "IN",
      },
      authentication
    );
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();
    generatecaptcha();
    let phone = "+918234823496";
    let appverifier = window.recaptchaVerifier;
    signInWithPhoneNumber(authentication, phone, appverifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        console.log("SMS not sent");
        // ...
        console.log(error);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form>
        <div id="sign-in-button"></div>
        <input placeholder="phone number" />
        <button onClick={onSignInSubmit} type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default Otptest;
