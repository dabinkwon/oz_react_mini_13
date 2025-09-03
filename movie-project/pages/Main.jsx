import MovieCard from "../component/MovieCard";
import {movieData} from "../data/getData"

export default function Main(){

    return (
        <section className="flex flex-wrap justify-center items-center gap-5">
        {movieData.map(el=>(
            <MovieCard key={el.id} movie={el}/>
        ))}
        </section>
    )
}