import { useQuery } from "@tanstack/react-query"
import { api } from "../../../shared/api"

export const movieKey = "movieKey"

export const movieDetailKey = "movieDetailKey"

export const useMovie = ()=>{
    const getMovies = () => useQuery({
        queryKey: [movieKey],
        queryFn: () => api.get("discover/movie").then(res => res.data)
    })

    const getMovieById = (id: string) => useQuery({
            queryKey: [movieKey, id],
            queryFn: () => api.get(`movie/${id}`,).then(res => res.data)
    })
    
     const getMovieItems = (id: string, path:string) => useQuery({
            queryKey: [movieDetailKey, id, path],
            queryFn: () => api.get(`movie/${id}/${path}`).then(res => res.data)
    })

    return { getMovies, getMovieById, getMovieItems}
}