import { useState } from "react";
import InputField from "../component/InputField";
import { btnStyle, formStyle } from "../style/inputStyle";
import { supabase } from "../supabase/client";
import {
  emailValidation,
  nameValidation,
  passwordValidation,
  confirmPasswordValidation,
} from "../validation/validation";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    name: false,
    password: false,
    confirmPassword: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      email: !emailValidation(formData.email),
      name: !nameValidation(formData.name),
      password: !passwordValidation(formData.password),
      confirmPassword: !confirmPasswordValidation(
        formData.confirmPassword,
        formData.password
      ),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((err) => err)) {
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: { name: formData.name },
        },
      });
      console.log(data);
      if (error) {
        throw error;
      } else {
        alert("회원가입 성공!");
        setFormData({ email: "", name: "", password: "", confirmPassword: "" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center bg-white text-black mt-3 py-10 max-w-2xl w-[70vw] mx-auto h-[70vh] min-h-[560px] rounded-[5px]">
      <h1 className="text-4xl mx-auto mb-12 font-semibold">회원가입</h1>
      <form className={formStyle} onSubmit={handleSubmit}>
        <InputField
          name={"email"}
          value={formData.email}
          placeholder={"email"}
          onChange={handleChange}
          error={errors.email}
          errorMsg={"이메일 형식 사용"}
        />
        <InputField
          name={"name"}
          value={formData.name}
          placeholder={"name"}
          onChange={handleChange}
          error={errors.name}
          errorMsg={"2-8자, 숫자, 한글, 영어만 사용"}
        />
        <InputField
          type="password"
          name={"password"}
          value={formData.password}
          placeholder={"password"}
          onChange={handleChange}
          error={errors.password}
          errorMsg={"영어 대문자/소문자 + 숫자의 조합 사용"}
        />
        <InputField
          type="password"
          name={"confirmPassword"}
          value={formData.confirmPassword}
          placeholder={"Confirm Password"}
          onChange={handleChange}
          error={errors.confirmPassword}
          errorMsg={"비밀번호와 일치하지 않습니다."}
        />
        <button className={btnStyle} type="submit">
          회원가입
        </button>
      </form>
      <p className="mt-2 font-light text-gray-600 text-[13px]">
        이미 회원가입 하셨나요?
        <Link className="pl-1 text-gray-800 hover:text-blue-700 hover:font-semibold" to="/login">
          로그인
        </Link>
      </p>
    </div>
  );
}
