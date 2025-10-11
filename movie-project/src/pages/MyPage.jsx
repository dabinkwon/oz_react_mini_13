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
    <div className="flex flex-row min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-5 gap-5">
      <section
        className="flex flex-col w-1/5  min-w-[220px] h-screen mr-5 items-center gap-1 pt-8 p-4 
                    bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-3xl"
      >
        <div className="p-2 rounded-full border-4">
          <FaRegUserCircle className="w-[120px] h-[120px] text-blue-400" />
        </div>

        <h2 className="font-bold text-3xl mt-3">{userName}</h2>
        <div className="flex justify-center items-center gap-1.5 text-sm text-gray-400">
          <MdOutlineEmail />
          <p>{userEmail}</p>
        </div>

        <div className="mt-8 bg-gray-600 text-white p-2 rounded-xl font-bold text-xl  w-4/5 text-center">
          <p className="text-sm font-normal text-blue-200">Favorite Movies</p>
          <p className="text-2xl mt-1">{likeMovie.length}개</p>
        </div>
      </section>

      <main className="p-5">
        <h1 className="text-4xl font-extrabold mb-8 pb-2 border-b-4 border-blue-500/50 text-gray-900 dark:text-white">
          나의 찜 목록
        </h1>
        <FavoriteMovie />
      </main>
    </div>
  );
}
