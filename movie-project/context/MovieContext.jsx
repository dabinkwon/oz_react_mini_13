import { createContext } from "react";
import useFetch from "../hooks/useFetch"


export const MovieContext = createContext();

export function MovieProvider({children}){

        
    // 인기 영화 데이터
    const [data, loading, error] = useFetch(
      "https://api.themoviedb.org/3/movie/popular?language=ko&page=1");

    // 평점 높은 영화 데이터
    const [topRated,topRatedLoadin,topRatedError] = useFetch('https://api.themoviedb.org/3/movie/top_rated?language=ko&page=1')

    
  return (
    <MovieContext value={{data,loading,error,topRated,topRatedLoadin,topRatedError}}>
        {children}
    </MovieContext>
  )
}
