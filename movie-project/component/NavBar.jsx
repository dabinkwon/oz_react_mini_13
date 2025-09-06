import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";

export default function NavBar() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const deboundedValue = useDebounce(searchValue);

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!searchValue.trim())return;
      navigate(`/search/movie?query=${searchValue}`);
      setSearchValue('')
  }

  // 엔터를 이용해서 search페이지로 갈 경우 input 값이 비워져서 영화를 클릭하면 detail로 넘어가지만 
  //  debouncedValue를 이용한 경우 input의 값이 그대로 남아있어서 detail페이지로 화면 전환이 이루어 지지 않고 있음..
  // 그렇다고 UseEffect에서 setSearchValue('')를 할 경우 500Ms이후 바로 입력창에 글이 비워져서 문제
  // detail페이지에서 해결할 수 있는건가..
  useEffect(()=>{
    if(!deboundedValue.trim())return;
   navigate(`/search/movie?query=${deboundedValue}`)
   console.log(deboundedValue)
  },[deboundedValue,navigate])

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <nav className=" w-full h-18 flex justify-between p-3 bg-black items-center  gap-5 pr-1.5">
      <Link to="/">
        <h1 className="p-3 font-bold">MOVIES</h1>
      </Link>
      <div className="flex justify-between items-center gap-7 pr-5">
        <form onSubmit={handleSubmit}>
          <input
            className="border rounded-2xl w-[250px] pl-2.5 py-1 mr-7"
            type="text"
            placeholder="어떤 영화를 보실 건가요?"
            value={searchValue}
            onChange={handleChange}
          />
        </form>
        <Link to="/">HOME</Link>
        <div>Login</div>
      </div>
    </nav>
  );
}
