import { useAuth } from "../context/AuthContext";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import FavoriteMovie from "../component/FavoriteMovie";
import { useLikeStore } from "../store/LikeMovie";

export default function MyPage() {
  const { session } = useAuth();
  const userEmail = session?.user.user_metadata.email;
  const userName = session?.user.user_metadata.name;
  const { likeMovie } = useLikeStore();

  return (
    <div className="flex h-full">
      <section className="flex flex-col w-1/5 min-w-[200px] sticky top-0 h-screen mr-5 items-center gap-1 pt-5 bg-gray-200 rounded-2xl text-black">
        <FaRegUserCircle className="w-[130px] h-[130px]" />
        <h2 className="font-bold text-3xl">{userName}</h2>
        <div className="flex justify-center items-center gap-1.5">
          <MdOutlineEmail />
          <p className="text-center">{userEmail}</p>
        </div>
        <p className="mt-3 font-semibold text-lg text-blue-950">
          찜한 갯수 : {likeMovie.length}
        </p>
      </section>
      <main className="flex-1">
        <FavoriteMovie />
      </main>
    </div>
  );
}
