import { imgUrl } from "../url/imgUrl";
import movieDetailData from "../data/movieDetailData.json";

export default function Detail() {
  const genre = movieDetailData.genres.map((el) => el.name).join(", ");

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col items-center p-5"
      style={{
        backgroundImage: `
      linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
      url(${imgUrl}${movieDetailData.backdrop_path})
    `,
      }}
    >
      <h1 className="text-center mb-4 text-3xl font-bold text-white">
        {movieDetailData.title}
      </h1>

      <div className="flex flex-col items-center justify-center gap-6 p-7 bg-gray-500/50 rounded-xl">
        <img
          className="rounded-lg"
          src={`${imgUrl}${movieDetailData.backdrop_path}`}
          alt={movieDetailData.title}
        />
        <p>{movieDetailData.vote_average}</p>
        <p>{genre}</p>
        <p className="text-white max-w-[70vw] text-center">
          {movieDetailData.overview}
        </p>
      </div>
    </div>
  );
}
