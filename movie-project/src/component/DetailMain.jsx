import ControlOverview from "./ControlOverview";

const DetailMain = ({ movie }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      {/* 영화 관련 디테일 정보 */}
      <h1 className="text-center text-3xl font-bold font-stretch-150% text-white">
        {movie.title}
      </h1>
      <img
        className="w-[100%] max-w-[600px]  rounded-xl"
        src={movie.backdrop_path}
        alt={movie.title}
      />
      <div className="flex gap-2 text-[12px]">
        <p className="bg-black/50  p-2 text-center text-white">
          {movie.vote_average}
        </p>
        <p className="bg-black/50 p-2 text-center text-white">{movie.genres}</p>
      </div>
      <ControlOverview
        text={movie.overview}
        className="text-white max-w-[700px] text-center bg-black/50 px-3 py-2"
      />
    </div>
  );
};

export default DetailMain;
