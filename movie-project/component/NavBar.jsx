import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";
import { useAuth } from "../context/AuthContext";
import User from "./User";
import { LuMoon, LuSun } from "react-icons/lu";

export default function NavBar({ handleDarkMode }) {
  const { session } = useAuth();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const deboundedValue = useDebounce(searchValue, 500);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchValue.trim()) return;
    navigate(`/search/movie?query=${searchValue}`);
    setSearchValue("");
  };

  useEffect(() => {
    if (!deboundedValue.trim() && searchValue === deboundedValue)
      return setSearchValue("");
    navigate(`/search/movie?query=${deboundedValue}`);
    console.log(deboundedValue);
  }, [deboundedValue]);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const navLinkClass = ({ isActive }) =>
    isActive ? "text-blue-400 font-semibold p-2" : "dark:text-white p-2";

  return (
    <nav className="flex flex-col w-full sm:flex-row sm:justify-around items-center gap-1.5 py-1">
      {/* 로고 */}
      <Link className="py-2" to="/">
        <h1 className="p-2 font-bold text-2xl flex items-center justify-center text-center hover:text-blue-500">
          MOVIES
        </h1>
      </Link>

      {/* 검색창 */}
      <form onSubmit={handleSubmit}>
        <input
          className="border rounded-2xl w-[300px] lg:w-[350px] px-2 py-1 sm:justify-center items-center text-center dark:text-gray-300 dark:placeholder:text-gray-300"
          type="text"
          placeholder="어떤 영화를 보실 건가요?"
          value={searchValue}
          onChange={handleChange}
        />
      </form>

      {/* 네비게이션 */}
      <div className="py-1 text-center flex justify-center items-center gap-2">
        <NavLink to="/" className={navLinkClass}>
          HOME
        </NavLink>
        <button onClick={handleDarkMode} className="dark:text-white">
          <LuSun className="block dark:hidden" />
          <LuMoon className="hidden dark:block" />
        </button>
        {session?.user ? (
          <User />
        ) : (
          <NavLink to="/login" className={navLinkClass}>
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
}
