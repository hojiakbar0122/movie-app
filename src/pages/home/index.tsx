import { memo } from "react";
import { useMovie } from "./services/useMovie";
import { IMAGE_URL } from "../../shared/const";
import MovieSlider from "./components/MovieSlider";
import MoviesSlider from "./components/MoviesSlider";
const Home = () => {
  const { getMovies, getMovieItems } = useMovie();
  const { data } = getMovies();
  // console.log(data?.results[0].id);
  
  const id = data?.results[0].id
  console.log("id", id);
  
  const {data: imagesData} = getMovieItems(id || "", "images")
  console.log("mov", imagesData);

  return (
    <div className="flex flex-col gap-3">
      <div className="">
        <img src={`${IMAGE_URL}${data?.results[0].backdrop_path}`} alt="" className='rounded-xl w-full'/>
      </div>
      <MovieSlider data={data} imagesData={imagesData}/>
      <MoviesSlider data={data}/>
    </div>
  );
};

export default memo(Home);
