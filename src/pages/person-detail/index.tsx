import { useParams } from 'react-router-dom'
import { usePerson } from './service'
import { IMAGE_URL } from '../../shared/const'
import { memo } from 'react'
import { Image } from 'antd'
import MovieView from '../../shared/components/movie-view/MovieView'

const Person = () => {
  const { id } = useParams()
  const { getPersonById, getPersonItems } = usePerson()

  const { data } = getPersonById(id || "")
  const { data: imageData } = getPersonItems(id || "", "images")
  const { data: movieData } = getPersonItems(id || "", "movie_credits")

  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      {/* Person Info */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="flex justify-center">
          <img
            src={IMAGE_URL + data?.profile_path}
            alt={data?.name}
            className="w-80 rounded-2xl shadow-lg object-cover"
          />
        </div>
        <div className="space-y-4 line-clamp-15">
          <h1 className="text-3xl font-bold">{data?.name}</h1>
          <strong className="block text-gray-600">{data?.birthday}</strong>
          <p className="text-gray-700 leading-relaxed text-justify">
            {data?.biography}
          </p>
        </div>
      </div>

      {/* Person Images */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Photos</h2>
        <div className="flex overflow-x-auto gap-4 pb-2">
          {imageData?.profiles?.map((item: any, index: number) => (
            <Image
              key={index}
              src={IMAGE_URL + item.file_path}
              className="min-w-[150px] h-48 object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </div>

      {/* Movies */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Movies</h2>
        <MovieView data={movieData?.cast} />
      </div>
    </div>
  )
}

export default memo(Person)
