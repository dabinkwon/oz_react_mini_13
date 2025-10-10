import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import MovieCard from "../component/MovieCard";
import Loading from "../component/Loading";
import NoData from "../component/NoData";
import LikeButton from "../component/LikeButton";
import DetailButton from "../component/DetailButton";

export default function Search() {
  const [searchParams] = useSearchParams();
  const params = searchParams.get("query");

  const [data, loading, error] = useFetch(
    `https://api.themoviedb.org/3/search/movie?query=${params}&include_adult=false&language=ko&page=1`
  );

  if (error) return <NoData />;

  return (
    <>
      {loading ? (
        <Loading width="250px" height="360px" count={8} />
      ) : (
        <div className="flex justify-center flex-wrap gap-5">
          {data?.results.map((el) => (
            <MovieCard
              key={el.id}
              movie={el}
              className={"w-[250px] h-[360px]"}
              imgClassName={"h-[340px] rounded-md"}
              likeButton={
                <LikeButton
                  movie={el}
                  className={
                    "rounded-sm border-2 w-[49%] border-[rgb(152,151,151)]"
                  }
                />
              }
              detailButton={<DetailButton movie={el} />}
            />
          ))}
        </div>
      )}
    </>
  );
}
