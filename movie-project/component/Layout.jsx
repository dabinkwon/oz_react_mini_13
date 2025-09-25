import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { useState } from "react";

export default function Layout() {
  const [isDark, setIsDark] = useState(false);

  const handleDarkMode = () => {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen bg-white text-black dark:bg-black dark:text-white ">
      <NavBar handleDarkMode={handleDarkMode} />
      <main className=" py-5">
        <Outlet />
      </main>
    </div>
  );
}
