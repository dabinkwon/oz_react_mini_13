import { useState } from "react";
import MovieCard from "../component/MovieCard";
import {movieData} from "../data/getData"

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