import MovieCard from "../component/MovieCard";
import useFetch from "../hooks/useFetch";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODI2ZjVkOTZmMDY3ZjE2MmFkYWViZGQzZGE3ZGJmNyIsIm5iZiI6MTc1Njk1ODU4My4wODQsInN1YiI6IjY4YjkwZjc3MTU4ZTU2NjkyYTliYjI1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wYBV7FzivAFbGNs2coFwwVz0M0fJhx3J4HatiSC345I",
  },
};

export default function Main() {
  // const [movie,setMovie] = useState(data)
  const [data, loading, error] = useFetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  );

  const movieForAll = data?.results.filter(el=>el.adult === false)
  console.log(movieForAll)

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
