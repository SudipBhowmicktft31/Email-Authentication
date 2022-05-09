import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import EmailLogin from "../Helper/EmailLogin";
import { validateEmail, validatePassword } from "../Helper/Validator";
import { AuthContext } from "../store/AuthContext";
import styles from "../styles/Login.module.css";
const Login = () => {
  const authCtx = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const emailInputHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordInputHnalder = (event) => {
    setPassword(event.target.value);
  };
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setError(true);
    if (!validateEmail(email) && !validatePassword(password)) {
      setError(false);
      const data = await EmailLogin(email, password);
      authCtx.setLogin(data.user.accessToken);

      if (data) {
        setEmail("");
        setPassword("");
      }
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.selector}>
        <div className={styles.login}>Login</div>
        <Link to="/signup" className={styles.signup}>
          Signup
        </Link>
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
          <div className={styles.pwd}>
            <label>Password</label>
            <Link to="/forgetpassword" className={styles.forgetpassword}>
              forgot Password?
            </Link>
          </div>
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
        <div className={styles.action}>
          <button className={styles.button}>Login</button>
        </div>
        <div className={styles.account}>
          Don't Have an Account?
          <Link className={styles.signUp} to="/signup">
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Login;
