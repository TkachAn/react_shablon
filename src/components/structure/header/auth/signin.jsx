import React from "react";
import { Link } from "react-router-dom";
import s from "./s.module.css";

export function SignUp() {
  return (
    <div className="signUp">
      <Link to="/signup" className={s.authLink}>
        <h5 className={s.authTitle}>Sign Up</h5>
      </Link>
    </div>
  );
}

export function SignIn() {
  return (
    <div className="signIn">
      <Link to="/signin" className={s.authLink}>
        <h5 className={s.authTitle}>Sign In</h5>
      </Link>
    </div>
  );
}

