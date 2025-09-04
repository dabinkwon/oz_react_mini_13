import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className=" w-full h-18 flex justify-between p-3 bg-black items-center  gap-5 pr-1.5">
      <Link to="/">
          <h1 className="p-3 font-bold">MOVIES</h1>
        </Link>
        <div className="flex justify-between items-center gap-7 pr-5">
        <input 
        className="border-1 rounded-2xl w-[250px] pl-2.5 py-1 mr-7"
        type="text" placeholder="어떤 영화를 보실 건가요?" />
        <Link to="/">HOME</Link>
        <div>Login</div>
        </div>
    </nav>
  );
}
