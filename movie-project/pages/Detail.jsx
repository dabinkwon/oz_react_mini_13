import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imgUrl } from "../api/imgUrl";
import useFetch from "../hooks/useFetch";
import { apiKey } from "../api/apiConfig";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`
  }
};

export default function Detail() { 
 const { movieId } = useParams();
 const [detailData, loading] = useFetch(
     `https://api.themoviedb.org/3/movie/${movieId}?language=ko`,
     options
    );
    const [movie,setMovie] = useState(null)
    console.log(detailData)


    useEffect(() => {
    if(detailData){
        setMovie({
            title:detailData.title,
            vote_average:detailData.vote_average,
            overview:detailData.overview,
            genres:detailData?.genres.map(el=>el.name),
            backdrop_path:`${imgUrl}${detailData.poster_path
}`
        })
    }
  }, [detailData]);




    return (
      <>
        {loading ? (
          // 로딩 중
          <div className="flex justify-center items-center w-full h-screen">
            <div className="w-14 h-14 border-4 border-white rounded-full border-t-transparent animate-spin"></div>
          </div>
        ) : !movie ? (
          // 데이터 없을 때
          <div className="flex justify-center items-center w-full h-screen text-center">
            영화 정보를 찾을 수 없습니다.
          </div>
        ) : (
          // 배경으로 영화 이미지
          <div
            className="relative rounded-2xl w-[80vw] flex flex-col justify-center items-center p-5 bg-cover bg-center mx-auto min-h-screen"
            style={{
              backgroundImage: `url(${movie.backdrop_path})`,
            }}
          >
            {/* 영화 관련 디테일 정보 */}
            {/* detail컴포넌트로 파일 분리시켜보기!!! */}
            <div className="absolute inset-0 bg-gray-500/50 z-0 rounded-2xl"></div>
            <div className="flex flex-col items-center justify-center gap-5 my-auto z-10">
            <h1 className="text-center mb-4 text-3xl font-bold">
              {movie.title}
            </h1>
              <img
                className="rounded-lg"
                src={movie.backdrop_path}
                alt={movie.title}
              />
              <p>{movie.vote_average}</p>
              <p>{movie.genres}</p>
              <p className="text-white max-w-[70vw] text-center">
                {movie.overview}
              </p>
            </div>
          </div>
        )}
      </>
    );
}
