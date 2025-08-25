import { memo, useEffect } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { useMovieDetail } from "./services/useMovieDetail";
import { IMAGE_URL } from "../../shared/const";
import MovieView from "../../shared/components/movie-view/MovieView";

const MovieDetail = () => {
  const { id } = useParams();
  const { getMovieById, getMovieItems } = useMovieDetail();
  const { data, isLoading } = getMovieById(id || "");
  const { data: imagesData } = getMovieItems(id || "", "images");
  const { data: similarData } = getMovieItems(id || "", "similar");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      {/* Loader */}
      {isLoading && (
        <div className="space-y-4">
          <div className="w-full h-[400px] bg-gray-300 animate-pulse rounded-xl"></div>
          <div className="w-2/3 h-8 bg-gray-300 animate-pulse rounded"></div>
          <div className="w-1/3 h-8 bg-gray-300 animate-pulse rounded"></div>
        </div>
      )}

      {/* Backdrop */}
      {!isLoading && (
        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
          <img
            src={`${IMAGE_URL}${data?.backdrop_path}`}
            alt={data?.title}
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
            <div className="p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold">{data?.title}</h1>
              <p className="mt-2 text-gray-200 font-medium">
                Budget: {data?.budget?.toLocaleString()} USD
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Images */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Movie Stills</h2>
        <div className="flex overflow-x-auto gap-3 pb-2">
          {imagesData?.backdrops?.slice(0, 20)?.map((item: any, inx: number) => (
            <img
              loading="lazy"
              key={inx}
              src={IMAGE_URL + item.file_path}
              className="min-w-[200px] h-[120px] object-cover rounded-lg shadow-md hover:scale-105 transition"
              alt=""
            />
          ))}
        </div>
      </div>

      {/* Cast & Crew Tabs */}
      <div className="flex gap-6 border-b border-gray-200 dark:border-gray-700">
        <NavLink
          to={""}
          className={({ isActive }) =>
            `pb-2 text-lg font-medium ${
              isActive
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`
          }
        >
          Cast
        </NavLink>
        <NavLink
          to={"crew"}
          className={({ isActive }) =>
            `pb-2 text-lg font-medium ${
              isActive
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`
          }
        >
          Crew
        </NavLink>
      </div>

      <Outlet />

      {/* Similar Movies */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Similar Movies</h2>
        <MovieView data={similarData?.results?.slice(0, 4)} />
      </div>
    </div>
  );
};

export default memo(MovieDetail);
