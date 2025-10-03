import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function User() {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();

  return (
    <>
      <div
        className="relative cursor-pointe"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <FaRegUserCircle className=" hover:cursor-pointer" />
        {isOpen && (
          <div className="absolute z-10 sm:top-6 sm:-left-20 -top-3 left-7 w-[120px] p-3 rounded-xl text-gray-700 font-medium bg-[#fafbfd] shadow-lg">
            <button
              className="w-[100px] bg-[rgb(210,225,252)] rounded-xl py-1 hover:cursor-pointer ]"
              onClick={logout}
            >
              로그아웃
            </button>
            <Link
              className="w-[100px] bg-[rgb(210,225,252)] rounded-xl py-1 mt-2 block"
              to={"/mypage"}
            >
              마이페이지
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
