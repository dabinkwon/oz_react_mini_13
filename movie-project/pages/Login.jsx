import { useState } from "react";
import InputField from "../component/InputField";
import {
  btnStyle,
  formWrapperStyle,
  formStyle,
  warningStyle,
} from "../style/inputStyle";
import { Link } from "react-router-dom";

export default function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email" && value.trim()) {
      setUserEmail(value);
      setErrorEmail(false);
    } else if (name === "password" && value.trim()) {
      setUserPassword(value);
      setErrorPassword(false);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value.trim()) return;
    if (name === "email" && !value.includes("@")) {
      setErrorEmail(true);
    } else if (name === "password" && value.length < 8) {
      setErrorPassword(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errorEmail === false && errorPassword === false)
      console.log("login success");
    setUserEmail("");
    setUserPassword("");
  };

  return (
    <div className={formWrapperStyle}>
      <h1 className="text-4xl mx-auto mb-12 font-semibold">MOVIES</h1>
      <form onSubmit={handleSubmit} className={formStyle}>
        <InputField
          name={"email"}
          value={userEmail}
          onChange={handleChange}
          placeholder={"이메일을 입력하세요."}
          onBlur={handleBlur}
        />
        {errorEmail && (
          <p className={warningStyle}>올바른 이메일 양식으로 입력해주세요.</p>
        )}

        <InputField
          type="password"
          name={"password"}
          value={userPassword}
          onChange={handleChange}
          placeholder={"비밀번호를 입력하세요."}
          onBlur={handleBlur}
        />
        {errorPassword && (
          <p className={warningStyle}>비밀번호는 8자 이상이어야 합니다.</p>
        )}

        <button className={btnStyle} type="submit">
          로그인
        </button>
      </form>
      <Link
        className="mt-2 text-[14px] hover:border-b-1 hover: border-gray-400 w-[60px] text-center"
        to="/signup"
      >
        회원가입
      </Link>
    </div>
  );
}
