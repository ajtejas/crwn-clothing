import React from "react";
import "./sign-in-and-sign-up.style.scss";
import SignIn from "../../components/sing-in/sing-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInSignUpPage = () => (
  <div className="sign-in-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUpPage;
