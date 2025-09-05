import { createContext } from "react";
import useFetch from "../hooks/useFetch"
import { apiKey } from "../api/apiConfig";


export const MovieContext = createContext();

export function MovieProvider({children}){
    const options ={
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          `Bearer ${apiKey}`,
      },
    };
        
    // 인기 영화 데이터
    const [data, loading, error] = useFetch(
      "https://api.themoviedb.org/3/movie/popular?language=ko&page=1",
      options
    );



    
  return (
    <MovieContext value={{data,loading,error}}>
        {children}
    </MovieContext>
  )
}
