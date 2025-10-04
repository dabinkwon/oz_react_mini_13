const DetailMain = ({ movie }) => {
  return (
    <div
      className="relative w-full h-full flex flex-col justify-center items-center p-5  bg-cover mx-auto"
      style={{
        backgroundImage: `url(${movie.backdrop_path})`,
      }}
    >
      {/* 영화 관련 디테일 정보 */}
      <div className="absolute inset-0 bg-gray-400/70 z-0"></div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 z-10">
        <img
          className="w-[50%] lg:w-[500px] min-w-[450px] rounded-xl"
          src={movie.backdrop_path}
          alt={movie.title}
        />
        <div className="flex flex-col items-start justify-start gap-2 h-full">
          <h1 className="text-center text-3xl font-bold">{movie.title}</h1>
          <div className="flex gap-1">
            <p className="bg-black/50 w-18 rounded-xl p-1 text-center text-white">
              {movie.vote_average}
            </p>
            <p className="bg-black/50 w-18 rounded-xl p-1 text-center text-white">
              {movie.genres}
            </p>
          </div>
          {/* <p className="text-white max-w-[70vw] text-center bg-black/60 px-3 min-w-[480px] py-2">
          {movie.overview}
        </p> */}
        </div>
      </div>
    </div>
  );
};

export default DetailMain;
