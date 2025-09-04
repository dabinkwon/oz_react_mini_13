import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex ml-auto items-center gap-5 pr-1.5">
      <input 
      className="border-1 rounded-2xl w-[250px] pl-2.5 py-1"
      type="text" placeholder="어떤 영화를 보실 건가요?" />
      <Link to="/">HOME</Link>
      <div>Login</div>
    </nav>
  );
}
