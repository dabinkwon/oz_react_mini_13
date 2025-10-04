import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { originImgUrl } from "../api/imgUrl";
import useFetch from "../hooks/useFetch";
import Loading from "../component/Loading";
import NoData from "../component/NoData";
import DetailMain from "../component/DetailMain";
import DetailPeople from "../component/DetailPeople";

export default function Detail() {
  const { movieId } = useParams();
  const [detailData, loading] = useFetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=ko`
  );
  const [peopleData] = useFetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=ko`
  );
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (detailData && peopleData) {
      const actors = peopleData.cast
        .filter((person) => person.known_for_department === "Acting")
        .map((actor) => ({
          name: actor.original_name,
          character: actor.character,
          profile_path: actor.profile_path,
        }));
      setMovie({
        title: detailData.title,
        vote_average: detailData.vote_average,
        overview: detailData.overview,
        genres: detailData?.genres.map((el) => el.name).join(", "),
        backdrop_path: `${originImgUrl}${detailData.backdrop_path}`,
        actors: actors,
      });
    }
  }, [detailData, peopleData]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : !movie ? (
        <NoData />
      ) : (
        <div
          className="relative w-screen h-full flex flex-col justify-center items-center p-5 bg-cover bg-center mx-auto"
          style={{
            backgroundImage: `url(${movie.backdrop_path})`,
          }}
        >
          <div className="absolute inset-0 bg-gray-400/70 z-0"></div>
          <div className="z-10">
            <DetailMain movie={movie} />
            <DetailPeople actors={movie.actors} />
          </div>
        </div>
      )}
    </>
  );
}
