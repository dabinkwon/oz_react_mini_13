import { useState } from "react";
import InputField from "../component/InputField";
import { btnStyle, formStyle } from "../style/style";
import { supabase } from "../supabase/client";
import {
  emailValidation,
  nameValidation,
  passwordValidation,
  confirmPasswordValidation,
} from "../validation/validation";
import { Link, useNavigate } from "react-router-dom";
import { signupList } from "../constants/signList";

export default function Signup() {
  const navigate = useNavigate();
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

  const handleBlur = (e) => {
    const { name, value } = e.target;

    let isError = false;

    switch (name) {
      case "email":
        isError = !emailValidation(value);
        break;
      case "name":
        isError = !nameValidation(value);
        break;
      case "password":
        isError = !passwordValidation(value);
        break;
      case "confirmPassword":
        isError = !confirmPasswordValidation(value, formData.password);
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: isError }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(errors).some((error) => error)) {
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: { name: formData.name },
        },
      });

      if (error) {
        throw error;
      } else {
        alert("회원가입 성공!");
        setFormData({ email: "", name: "", password: "", confirmPassword: "" });
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center bg-white text-black mt-3 py-10 max-w-2xl w-[70vw] mx-auto h-[70vh] min-h-[560px] rounded-[5px]">
      <h1 className="text-4xl mx-auto mb-12 font-semibold">회원가입</h1>
      <form className={formStyle} onSubmit={handleSubmit}>
        {signupList.map((item) => (
          <InputField
            key={item.name}
            type={item.type}
            name={item.name}
            value={formData[item.name]}
            placeholder={item.placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors[item.name]}
            errorMsg={item.errorMsg}
          />
        ))}
        <button className={btnStyle} type="submit">
          회원가입
        </button>
      </form>
      <p className="mt-2 font-light text-gray-600 text-[13px]">
        이미 회원가입 하셨나요?
        <Link
          className="pl-1 text-gray-800 hover:text-blue-700 hover:font-semibold"
          to="/login"
        >
          로그인
        </Link>
      </p>
    </div>
  );
}
