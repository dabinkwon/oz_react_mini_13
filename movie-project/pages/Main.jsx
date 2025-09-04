import { useState } from "react";
import MovieCard from "../component/MovieCard";
import {movieData} from "../data/getData"

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODI2ZjVkOTZmMDY3ZjE2MmFkYWViZGQzZGE3ZGJmNyIsIm5iZiI6MTc1Njk1ODU4My4wODQsInN1YiI6IjY4YjkwZjc3MTU4ZTU2NjkyYTliYjI1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wYBV7FzivAFbGNs2coFwwVz0M0fJhx3J4HatiSC345I'
//   }
// };

// fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));


export default function Main(){
    const [movie,setMovie] = useState(movieData)

    return (
        <section className="flex flex-wrap justify-center items-center gap-5">
        {movie.map(el=>(
            <MovieCard key={el.id} movie={el}/>
        ))}
        </section>
    )
}