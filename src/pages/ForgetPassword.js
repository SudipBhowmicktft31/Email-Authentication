import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmailForgetPassword from "../Helper/EmailForgetPassword";
import { validateEmail } from "../Helper/Validator";
import styles from "../styles/ForgetPassword.module.css";
const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    setError(true);
    if (!validateEmail(email)) {
      try {
        setError(false);
        EmailForgetPassword(email);
        navigate("/login");
      } catch {
        alert("Failed to Reset Password");
      }
      setEmail("");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.outer_box}>
        <div className={styles.title}>Password Assistance</div>
        <div className={styles.forgetPassword}>
          <p>Enter the email address associated with your account.</p>
          <form className={styles.form} onSubmit={formSubmitHandler}>
            <label>Email</label>
            <input type="email" value={email} onChange={changeEmailHandler} />
            {error && (
              <p className={styles.errortext}>{validateEmail(email)}</p>
            )}
            <button className={styles.button}>Continue</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ForgetPassword;
