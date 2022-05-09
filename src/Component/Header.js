import React, { useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import styles from "../styles/Header.module.css";
const Header = () => {
  const authCtx = useContext(AuthContext);
  const isLogin = authCtx.isLogin;
  return (
    <header className={styles.header}>
      <nav>
        <h2>Authentication</h2>
        {isLogin && (
          <button className={styles.logout} onClick={() => authCtx.setLogout()}>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};
export default Header;
