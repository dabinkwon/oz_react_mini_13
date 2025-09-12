import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";

export default function NavBar() {
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
    if (!deboundedValue.trim() && searchValue === deboundedValue) return (setSearchValue(''));
    navigate(`/search/movie?query=${deboundedValue}`);
    console.log(deboundedValue);
  }, [deboundedValue]);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <nav className="bg-black  flex flex-col w-full sm:flex-row sm:justify-around items-center gap-1.5 py-1">
      <Link className="py-2" to="/">
        <h1 className="p-2 font-bold text-2xl flex items-center justify-center hover:bg-amber-50 hover:text-black transition-colors duration-200 rounded-xl text-center">
          MOVIES
        </h1>
      </Link>
      <div className="">
        <form onSubmit={handleSubmit}>
          <input
            className="border rounded-2xl w-[300px] lg:w-[350px] px-2 py-1 sm:justify-center items-center text-center text-gray-300"
            type="text"
            placeholder="어떤 영화를 보실 건가요?"
            value={searchValue}
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="py-1 text-center flex justify-center items-center gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold p-2" : "text-white p-2"
            } 
        >
          HOME
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold p-2" : "text-white p-2"
            } 
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
}
