import { useState } from "react";
import InputField from "../component/InputField";
import { btnStyle, formWrapperStyle, formStyle } from "../style/inputStyle";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabase/client";
import { emailValidation, passwordValidation } from "../validation/validation";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });
  const navigate = useNavigate()
  const{login} = useAuth()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      email: !emailValidation(formData.email),
      password: !passwordValidation(formData.password),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((err) => err)) {
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) {
        throw error;
      } else {
        login(data.session)
        alert("로그인 성공!");
        setFormData({ email: "", password: "" });
        navigate('/')
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={formWrapperStyle}>
      <h1 className="text-4xl mx-auto mb-12 font-semibold">MOVIES</h1>
      <form className={formStyle} onSubmit={handleSubmit}>
        <InputField
          name={"email"}
          value={formData.email}
          placeholder={"email"}
          onChange={handleChange}
          error={errors.email}
          errorMsg={"올바른 이메일 양식을 입력하세요"}
        />

        <InputField
          type="password"
          name={"password"}
          value={formData.password}
          placeholder={"password"}
          onChange={handleChange}
          error={errors.password}
          errorMsg={"비밀번호는 8자 이상이어야 합니다."}
        />
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
