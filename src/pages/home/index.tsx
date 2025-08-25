import { memo } from "react";
import { useMovie } from "./services/useMovie";
import { IMAGE_URL } from "../../shared/const";
import MovieSlider from "./components/MovieSlider";
import MoviesSlider from "./components/MoviesSlider";

const Home = () => {
  const { getMovies, getMovieItems } = useMovie();
  const { data } = getMovies();
  
  const id = data?.results[0]?.id;
  const { data: imagesData } = getMovieItems(id || "", "images");

  return (
    <div className="flex flex-col gap-8 px-4 py-6 container mx-auto">
      {/* Hero Image */}
      <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
        <img
          src={`${IMAGE_URL}${data?.results[0]?.backdrop_path}`}
          alt={data?.results[0]?.title}
          className="w-full h-[450px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
          <div className="p-6 text-white">
            <h1 className="text-3xl md:text-4xl font-bold drop-shadow-lg">
              {data?.results[0]?.title}
            </h1>
            <p className="text-sm md:text-base opacity-80 mt-2 line-clamp-2">
              {data?.results[0]?.overview}
            </p>
          </div>
        </div>
      </div>

      {/* Featured Slider */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Featured</h2>
        <MovieSlider data={data} imagesData={imagesData} />
      </div>

      {/* All Movies */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">All Movies</h2>
        <MoviesSlider data={data} />
      </div>
    </div>
  );
};

export default memo(Home);
