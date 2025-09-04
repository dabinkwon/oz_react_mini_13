import { createContext } from "react";
import useFetch from "../hooks/useFetch"

export const MovieContext = createContext();

export function MovieProvider({children}){
    const options ={
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODI2ZjVkOTZmMDY3ZjE2MmFkYWViZGQzZGE3ZGJmNyIsIm5iZiI6MTc1Njk1ODU4My4wODQsInN1YiI6IjY4YjkwZjc3MTU4ZTU2NjkyYTliYjI1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wYBV7FzivAFbGNs2coFwwVz0M0fJhx3J4HatiSC345I",
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
