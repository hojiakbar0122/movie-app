import { useQuery } from "@tanstack/react-query"
import { api } from "../../../shared/api"


interface Iparams{
    query:string
}

export const useSearch = ()=>{

    const searchMovie = (params:Iparams) => useQuery({
        queryKey:["search_key", params],
        queryFn:()=>api.get(`search/movie`, {params}).then(res=>res.data)
    })


    return {searchMovie}
}