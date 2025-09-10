import { useState } from "react";
import InputField from "../component/InputField";
import { btnStyle, formStyle, warningStyle } from "../style/inputStyle";
import { useSupabase } from "../supabase";

export default function Signup() {
  const supabase = useSupabase()
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorRepeatPassword,setErrorRepeatPassword] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email" && value.trim()) {
      setUserEmail(value);
      setErrorEmail(false);
    } else if (name === "password" && value.trim()) {
      setUserPassword(value);
      setErrorPassword(false);
    } else if (name === "name" && value.trim()) {
      setUserName(value);
      setErrorName(false);
    }else if( name === "repeatPassword" && value.trim()){
      setRepeatPassword(value);
      setErrorRepeatPassword(false)
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value.trim()) return;

    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setErrorEmail(true);
    } else if (
      name === "password" &&
      !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/.test(value)
    ) {
      setErrorPassword(true);
    } else if (name === "name" && !/^[가-힣a-zA-Z0-9]{2,8}$/.test(value)) {
      setErrorName(true);
    }else if(name === "repeatPassword" && value !== userPassword){
      setErrorRepeatPassword(true)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errorEmail === false && errorPassword === false && errorName === false && userPassword === repeatPassword)
      console.log("login success");
    setUserEmail("");
    setUserPassword("");
    setUserName("");
    setRepeatPassword("")
  };

  return (
    <div className="flex flex-col items-center bg-white text-black mt-3 py-10 max-w-2xl w-[70vw] mx-auto h-[70vh] min-h-[560px] rounded-[5px]">
      <h1 className="text-4xl mx-auto mb-12 font-semibold">회원가입</h1>
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
          name={"name"}
          value={userName}
          onChange={handleChange}
          placeholder={"2~8자 사이 숫자, 한글, 영어만 사용"}
          onBlur={handleBlur}
        />
        {errorName && (
          <p className={warningStyle}>2~8자 사이 숫자, 한글, 영어만 사용</p>
        )}
        <InputField
          type="password"
          name="password"
          value={userPassword}
          onChange={handleChange}
          placeholder={"영어 대문자/소문자 + 숫자의 조합, 8~16자"}
          onBlur={handleBlur}
        />
        {errorPassword && (
          <p className={warningStyle}>
            영어 대문자/소문자 + 숫자의 조합 + 8~16자
          </p>
        )}
        <InputField
          type="password"
          name="repeatPassword"
          value={repeatPassword}
          onChange={handleChange}
          placeholder="비밀번호를 한 번 더 입력해주세요."
          onBlur={handleBlur}
        />
        {errorRepeatPassword && (
          <p className={warningStyle}>
            비밀번호가 일치하지 않습니다.
          </p>
        )}
        <button className={btnStyle} type="submit">
          회원가입
        </button>
      </form>
    </div>
  );
}
