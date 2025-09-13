import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function User() {
  const [isOpen, setIsOpen] = useState(false);
  const {logout} = useAuth()

    return (<>
      <div
      className="relative cursor-pointe"
        onClick={() => {
          setIsOpen(prev=>!prev);
        }}
      >
        <img
          className="bg-amber-50 w-10 p-1 rounded-full"
          src="../img/user.png"
          alt="user"
        />
      </div>
        {isOpen && (
            <div className="absolute top-14 right-7 w-20 rounded-[2px] text-gray-700 font-medium bg-amber-50 p-1 ">
            <button onClick={logout}>로그아웃</button>
          </div>
        )}
    </>
  );
}
