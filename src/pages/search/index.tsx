import { Input } from "antd"
import { useSearch } from "./service/useSearch"
import { type ChangeEvent } from "react"
import MovieView from "../../shared/components/movie-view/MovieView"
import { useDebounce } from "../../shared/hooks/useDebounce"
import { useParamsHook } from "../../shared/hooks/useParams"

const Search = () => {

    // const [value, setValue] = useState("")
    const {getParam, setParam, removeParam} = useParamsHook()
    const value = getParam("search") || ""
    const {searchMovie} = useSearch()
    const debouncedValue = useDebounce(value, 1000)
    const {data} = searchMovie({query:debouncedValue})

    console.log("data", data);

    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        const v = e.target.value

        if(v){
            setParam("search", v)
        }else{
            removeParam("search")
        }
    }
    

  return (
    <div className="px-80">
        <Input value={value} placeholder="Search.."  onChange={handleChange} className="mb-100"/>

        <div className="mt-6"> 
            <MovieView data={data?.results}/>
        </div>
    </div>
    
  )
}

export default Search