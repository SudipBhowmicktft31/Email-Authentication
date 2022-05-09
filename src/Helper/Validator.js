export const validateEmail = (email) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.length === 0) {
    return "Email Field must not be empty!!";
  }
  return !emailRegex.test(email) ? "Please Provide Valid Email" : "";
};
export const validatePassword = (password) => {
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[!@#$%^&_*])[a-zA-Z0-9!@#$%^&_*]{6,16}$/;
  if (password.length === 0) {
    return "Password Field must not be empty!!";
  }
  return !passwordRegex.test(password)
    ? "Password must contain atleas one capitial letter,one small letter,one number and one special symbol"
    : "";
};
export const validateConfirmPassword = (password1, password2) => {
  if (password2.trim().length === 0) {
    return "Password Field must not be empty!!";
  }
  return password1 !== password2 ? "Password did not match" : "";
};
