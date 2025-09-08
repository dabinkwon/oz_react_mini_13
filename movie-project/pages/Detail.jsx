import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imgUrl } from "../api/imgUrl";
import useFetch from "../hooks/useFetch";
import { apiKey } from "../api/apiConfig";
import Loading from "../component/Loading";
import NoData from "../component/NoData";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
};

export default function Detail() {
  const { movieId } = useParams();
  const [detailData, loading] = useFetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=ko`,
    options
  );
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (detailData) {
      setMovie({
        title: detailData.title,
        vote_average: detailData.vote_average,
        overview: detailData.overview,
        genres: detailData?.genres.map((el) => el.name).join(', '),
        backdrop_path: `${imgUrl}${detailData.backdrop_path}`,
      });
    }
  }, [detailData]);

  return (
    <>
      {loading ? (
       <Loading/>
      ) : !movie ? (
        <NoData/>
      ) : (
        // 배경으로 영화 이미지
        <div
          className="relative rounded-2xl w-[70vw] flex flex-col justify-center items-center p-5  bg-cover mx-auto"
          style={{
            backgroundImage: `url(${movie.backdrop_path})`,
          }}
        >
          {/* 영화 관련 디테일 정보 */}
          <div className="absolute inset-0 bg-gray-500/50 z-0 rounded-2xl"></div>
          <div className="flex flex-col items-center justify-center gap-5 my-auto z-10">
            <h1 className="text-center mb-4 text-3xl font-bold">
              {movie.title}
            </h1>
            <img
              className="rounded-lg w-[70vw]  md:w-[60vw]"
              src={movie.backdrop_path}
              alt={movie.title}
            />
            <p>{movie.vote_average}</p>
            <p className="bg-black/50 rounded-xl p-2">{movie.genres}</p>
            <p className="text-white max-w-[70vw] text-center bg-black/50 rounded-xl px-3 py-2">
              {movie.overview}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
