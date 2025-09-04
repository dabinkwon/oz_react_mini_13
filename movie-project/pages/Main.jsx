import { useContext } from "react";
import MovieCard from "../component/MovieCard";
import { MovieContext } from "../context/MovieContext";


export default function Main() {
  const {data,loading,error} = useContext(MovieContext)

  const movieForAll = data?.results.filter(el=>el.adult === false)

  if(error)return <div className="text-center font-bold text-3xl pt-10">Error : 페이지를 찾 을 수 없습니다.</div>;

  return (
    <>
      {loading?(<div className="flex justify-center items-center w-full h-screen">
        {/* animate-spin이 적용이 안됨.. */}
    <div className="w-14 h-14 border-4 border-white rounded-full border-t-transparent"></div>
  </div>):
        (
          <section className="flex flex-wrap justify-center items-center gap-5">
          {movieForAll.map(el=>(
              <MovieCard key={el.id} movie={el}/>
          ))}
          </section>
        )
      }
    </>
  );
}
