import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import ForgetPassword from "./pages/ForgetPassword";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { AuthContext } from "./store/AuthContext";
const App = () => {
  const authCtx = useContext(AuthContext);
  const isLogin = authCtx.isLogin;
  return (
    <div>
      <Header />
      <Routes>
        {!isLogin && <Route path="/" element={<Login />} />}
        {!isLogin && <Route path="/login" element={<Login />} />}
        {!isLogin && <Route path="/signup" element={<SignUp />} />}
        {!isLogin && (
          <Route path="/forgetpassword" element={<ForgetPassword />} />
        )}
        {isLogin && <Route path="/home" element={<HomePage />} />}
        <Route
          path="*"
          element={<Navigate to={isLogin ? "/home" : "/login"} />}
        />
      </Routes>
    </div>
  );
};

export default App;
