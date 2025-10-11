import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

export const PopularMovieContext = createContext();
export const TopRatedMovieContext = createContext();

export function MovieProvider({ children }) {
  const [page, setPage] = useState(1);

  // 인기 영화 데이터
  const [data, loading, error] = useFetch(
    `https://api.themoviedb.org/3/movie/popular?language=ko&page=${page}`,
    page
  );

  // 평점 높은 영화 데이터
  const [topRated, topRatedLoading, topRatedError] = useFetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=ko&page=1"
  );

  return (
    <PopularMovieContext value={{ data, page, setPage, loading, error }}>
      <TopRatedMovieContext
        value={{ topRated, topRatedLoading, topRatedError }}
      >
        {children}
      </TopRatedMovieContext>
    </PopularMovieContext>
  );
}
