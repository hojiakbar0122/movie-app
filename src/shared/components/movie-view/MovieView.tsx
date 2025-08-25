import { memo, type FC } from "react"
import { IMAGE_URL } from "../../const"
import { useNavigate } from "react-router-dom"

interface Props {
  data: any
}

const MovieView: FC<Props> = ({ data }) => {
    const navigate = useNavigate()

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
        {data?.map((movie: any) => (
          <div
            key={movie.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden group"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <div className="relative aspect-[2/3] overflow-hidden">
              <img
                loading="lazy"
                src={`${IMAGE_URL}${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-4 space-y-2">
              <h3
                className="font-bold text-lg text-gray-900 dark:text-white line-clamp-2 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200"
                title={movie.title}
              >
                {movie.title}
              </h3>

              <div className="flex items-center gap-1">
                <span className="text-yellow-500 text-lg">⭐</span>
                <span className="font-semibold text-gray-700 dark:text-gray-300">{movie.vote_average.toFixed(1)}</span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">/10</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default memo(MovieView)
