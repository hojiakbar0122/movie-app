import { memo} from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useMovieDetail } from './services/useMovieDetail';
import { IMAGE_URL } from '../../shared/const';
import MovieView from '../../shared/components/movie-view/MovieView';

const MovieDetail = () => {
  const {id} = useParams()
  const {getMovieById, getMovieItems} = useMovieDetail()
  const {data, isLoading} = getMovieById(id || "")
  const {data: imagesData} = getMovieItems(id || "", "images")
  const {data: similarData} = getMovieItems(id || "", "similar")
    

  if(isLoading){
    return <div className='container mx-auto '>
      <div className='w-full h-[500px] bg-gray-300 animate-pulse'></div>
      <div className='my-3 w-[60%] h-10 bg-gray-300 animate-pulse'></div>
      <div className='my-3 w-[30%] h-10 bg-gray-300 animate-pulse'></div>
    </div>
  }
  return (
    <div className="container mx-auto">
      <div>
        <img src={`${IMAGE_URL}${data?.backdrop_path}`} alt="" />
      </div>
      <div>
        <h1 className='text-3xl font-bold'>{data?.title}</h1>
        <strong>{data?.budget?.toLocaleString()} USD</strong>
      </div>
      <div className='flex overflow-x-auto'>
        {
          imagesData?.backdrops?.slice(0, 20)?.map((item: any, inx: number) => (
            <img loading='lazy'  key={inx} src={IMAGE_URL + item.file_path} className='min-w-[180px]' width={180} alt="" />
          ))
        }
      </div>
      <div className="container flex gap-4 my-4 border-2 border-gray-200">
        <NavLink to={""}>Cast</NavLink>
        <NavLink to={"crew"}>Crew</NavLink>
      </div>
      <Outlet/>
      <div>
        <MovieView data={similarData?.results?.slice(0,4)}/>
      </div>
    </div>
  );
};

export default memo(MovieDetail);