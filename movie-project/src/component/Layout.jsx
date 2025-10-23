import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";

const getInitialMode = () => {
  // key값으로 데이터 불러오기
  const isStoredDark = localStorage.getItem("isDark") === "true";
  if (isStoredDark) {
    document.documentElement.classList.add("dark");
  }
  return isStoredDark;
};

export default function Layout() {
  const [isDark, setIsDark] = useState(getInitialMode);

  const handleDarkMode = () => {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    // key, value값을 localStorage에 저장
    localStorage.setItem("isDark", isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="grid grid-rows-[auto_1fr] w-screen min-h-screen bg-white text-black dark:bg-black dark:text-white ">
      <NavBar handleDarkMode={handleDarkMode} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
