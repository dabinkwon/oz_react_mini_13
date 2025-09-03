import { imgUrl } from "../url/imgUrl";
import movieDetailData from "../data/movieDetailData.json";
import { useState } from "react";

export default function Detail() {
  const [movieDetail, setMovieDetail] = useState({
    title: movieDetailData.title,
    genres: movieDetailData.genres.map((el) => el.name).join(", "),
    backgroundImage: `${imgUrl}${movieDetailData.backdrop_path}`,
    overview: movieDetailData.overview,
    voteAvg: movieDetailData.vote_average,
  });

  return (
    // Detail page 배경으로 영화 img넣어줌
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col items-center p-5"
      style={{
        backgroundImage: `
      linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
      url(${imgUrl}${movieDetail.backgroundImage})`,
      }}
    >
      <h1 className="text-center mb-4 text-3xl font-bold text-white">
        {movieDetail.title}
      </h1>
      {/* detail컴포넌트로 파일 분리시켜보기!!! */}
      <div className="flex flex-col items-center justify-center gap-6 p-7 bg-gray-500/50 rounded-xl">
        <img
          className="rounded-lg"
          src={`${imgUrl}${movieDetail.backgroundImage}`}
          alt={movieDetail.title}
        />
        <p>{movieDetail.voteAvg}</p>
        <p>{movieDetail.genres}</p>
        <p className="text-white max-w-[70vw] text-center">
          {movieDetail.overview}
        </p>
      </div>
    </div>
  );
}
