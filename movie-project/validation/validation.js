export const emailValidation = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const nameValidation = (name) => /^[가-힣a-zA-Z0-9]{2,8}$/.test(name);

export const passwordValidation = (password) =>
  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/.test(password);

export const confirmPasswordValidation = (confirmPassword, password) =>
  confirmPassword === password;
