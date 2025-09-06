import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Layout() {
  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen text-white">
        <NavBar />
      <main className="bg-[rgba(0,0,0,0.84)] p-5">
        <Outlet />
      </main>
    </div>
  );
}