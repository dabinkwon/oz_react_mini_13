import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import MovieCard from "../component/MovieCard";
import Loading from "../component/Loading";
import NoData from "../component/NoData";


export default function Search() {
  const [searchParams] = useSearchParams();
  const params = searchParams.get("query");

  const [data, loading, error] = useFetch(
    `https://api.themoviedb.org/3/search/movie?query=${params}&include_adult=false&language=ko&page=1`);

  if (error) return <NoData />;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex justify-center flex-wrap gap-5">
          {data?.results.map((el) => (
            <MovieCard key={el.id} movie={el} />
          ))}
        </div>
      )}
    </>
  );
}
