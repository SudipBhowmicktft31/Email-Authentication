import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./store/AuthContext";

ReactDOM.render(
  <Router>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </Router>,
  document.getElementById("root")
);
