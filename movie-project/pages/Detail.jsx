import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { originImgUrl } from "../api/imgUrl";
import useFetch from "../hooks/useFetch";
import Loading from "../component/Loading";
import NoData from "../component/NoData";
import DetailMain from "../component/DetailMain";

export default function Detail() {
  const { movieId } = useParams();
  const [detailData, loading] = useFetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=ko`
  );
  const [movie, setMovie] = useState(null);

  // const [peopleData] = useFetch(
  //   `https://api.themoviedb.org/3/movie/${movieId}/credits?language=ko`
  // );
  // console.log(peopleData?.cast, peopleData?.crew);

  useEffect(() => {
    if (detailData) {
      setMovie({
        title: detailData.title,
        vote_average: detailData.vote_average,
        overview: detailData.overview,
        genres: detailData?.genres.map((el) => el.name).join(", "),
        backdrop_path: `${originImgUrl}${detailData.backdrop_path}`,
      });
    }
  }, [detailData]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : !movie ? (
        <NoData />
      ) : (
        <DetailMain movie={movie} />
      )}
    </>
  );
}
