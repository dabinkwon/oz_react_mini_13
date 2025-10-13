import { useAuth } from "../context/AuthContext";
import FavoriteMovie from "../component/FavoriteMovie";
import { useLikeStore } from "../store/LikeMovie";
import { useNavigate } from "react-router-dom";

export default function MyPage() {
  const { session } = useAuth();
  const navigate = useNavigate();
  const userEmail = session?.user.user_metadata.email;
  const userName = session?.user.user_metadata.name;
  const { likeMovie } = useLikeStore();
  console.log(session);

  if (!session) {
    navigate("/");
    return;
  }

  return (
    <div className="flex flex-row min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-5 gap-5">
      <main className="p-5">
        <h1 className="text-4xl font-extrabold mb-8 pb-2 border-b-4 border-white/30 text-gray-900 dark:text-white/90">
          나의 찜 목록
        </h1>
        <FavoriteMovie />
      </main>
    </div>
  );
}
