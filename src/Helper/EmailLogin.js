import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const EmailLogin = async (Email, Password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, Email, Password);
    return user;
  } catch (error) {
    alert(error.message);
  }
};

export default EmailLogin;
