import { Link, Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Layout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <header className="w-full h-16 flex p-3 bg-black items-center">
        <Link to="/">
          <h1 className="p-3 font-bold">MOVIES</h1>
        </Link>
        <NavBar />
      </header>
      <main className="bg-[rgba(0,0,0,0.84)] p-5">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
