import { memo } from "react";
import { useMovie } from "./services/useMovie";
import MovieView from "../../shared/components/movie-view/MovieView";
import { Pagination, Select, Skeleton, type PaginationProps } from "antd";
import { useGenre } from "./services/useGenre";
import { useParamsHook } from "../../shared/hooks/useParams";
import { PERIOD } from "../../shared/static";

const Movie = () => {
  const { getParam, setParam, removeParam } = useParamsHook();
  const page = getParam("page") || "1";
  const with_genres = getParam("genre") || "";
  const period = getParam("period") || "";
  // const [page, setPage] = useState("1")

  const item = PERIOD.find((i: any) => i.value === Number(period));

  const { getMovies } = useMovie();
  const { data, isLoading } = getMovies({
    page,
    with_genres,
    "release_date.gte": item?.gte,
    "release_date.lte": item?.lte,
  });
  const { getGenres } = useGenre();
  const { data: genreData } = getGenres();
  const options = genreData?.genres?.map((item: any) => ({
    value: item.id,
    label: item.name,
  }));

  const handleChange = (value: string) => {
    // setGenre(value)
    setParam("genre", value);
  };

  const handleChangePeriod = (value: string) => {
    setParam("period", value);
  };

  const onChange: PaginationProps["onChange"] = (page) => {
    // setPage(page.toString())
    if (page === 1) {
      removeParam("page");
    } else {
      setParam("page", page);
    }
  };
  return (
    <div className="Index">
      <div className="container mx-auto flex gap-3">
        <Select
          onChange={handleChange}
          style={{ width: 140 }}
          placeholder="Select genre"
          options={options}
        />
        <Select
          onChange={handleChangePeriod}
          style={{ width: 140 }}
          placeholder="Select period"
          options={PERIOD}
        />
      </div>
      {isLoading && (
        <div>
          <Skeleton active />
        </div>
      )}
      <MovieView data={data?.results} />
      <div className="flex justify-center">
        <Pagination
          current={Number(page)}
          onChange={onChange}
          showSizeChanger={false}
          total={data?.total_results}
          defaultPageSize={20}
        />
      </div>
    </div>
  );
};

export default memo(Movie);
