import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Layout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        <NavBar />
      <main className="bg-[rgba(0,0,0,0.84)] p-5">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}