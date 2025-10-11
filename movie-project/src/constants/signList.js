export const signupList = [
  {
    name: "email",
    placeholder: "email",
    errorMsg: "이메일 형식 사용",
  },
  {
    name: "name",
    placeholder: "name",
    errorMsg: "2-8자, 숫자, 한글, 영어만 사용",
  },
  {
    type: "password",
    name: "password",
    placeholder: "password",
    errorMsg: "영어 대문자/소문자 + 숫자의 조합 사용",
  },
  {
    type: "password",
    name: "confirmPassword",
    placeholder: "Confirm Password",
    errorMsg: "비밀번호와 일치하지 않습니다.",
  },
];

export const signinList = [
  {
    name: "email",
    placeholder: "email",
    errorMsg: '"올바른 이메일 양식을 입력하세요',
  },
  {
    type: "password",
    name: "password",
    placeholder: "password",
    errorMsg: "비밀번호는 8자 이상이어야 합니다.",
  },
];
