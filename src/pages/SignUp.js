import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/SignUp.module.css";
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "../Helper/Validator";
// import { AuthContext } from "../store/AuthContext";
import EmailSignUp from "../Helper/EmailSignup";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);

//   const authCtx = useContext(AuthContext);

  const emailInputHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordInputHnalder = (event) => {
    setPassword(event.target.value);
  };
  const confirmPasswordInputHnalder = (event) => {
    setConfirmPassword(event.target.value);
  };
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setError(true);
    if (
      !validateEmail(email) &&
      !validatePassword(password) &&
      !validateConfirmPassword(password, confirmPassword)
    ) {
      setError(false);
      const data = await EmailSignUp(email, password);
      if (data) {
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.selector}>
        <Link to="/login" className={styles.login}>
          Login
        </Link>
        <div className={styles.signup}>Signup</div>
      </div>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <div className={styles.emailClass}>
          <label>Email</label>
          <input
            type="email"
            className={styles.email}
            onChange={emailInputHandler}
            value={email}
          />
          {error ? (
            <p className={styles.errortext}>{validateEmail(email)}</p>
          ) : (
            <p />
          )}
        </div>
        <div className={styles.passwordClass}>
          <label>Password</label>
          <input
            type="password"
            className={styles.password}
            onChange={passwordInputHnalder}
            value={password}
          />
          {error ? (
            <p className={styles.errortext}>{validatePassword(password)}</p>
          ) : (
            <p />
          )}
        </div>
        <div className={styles.passwordClass}>
          <label>Confirm Password</label>
          <input
            type="password"
            className={styles.password}
            onChange={confirmPasswordInputHnalder}
            value={confirmPassword}
          />
          {error ? (
            <p className={styles.errortext}>{validatePassword(password)}</p>
          ) : (
            <p />
          )}
        </div>
        <div className={styles.action}>
          <button className={styles.button}>Signup</button>
        </div>
        <div className={styles.account}>
          Already You Have an Account?
          <Link className={styles.logIn} to="/login">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};
export default SignUp;
