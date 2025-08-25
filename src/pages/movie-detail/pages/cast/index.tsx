import { useState } from "react";
import { useMovieDetail } from "../../services/useMovieDetail";
import { useNavigate, useParams } from "react-router-dom";
import { IMAGE_URL } from "../../../../shared/const";

const Cast = () => {
  const { id } = useParams();
  const { getMovieItems } = useMovieDetail();
  const { data: creditsData } = getMovieItems(id || "", "credits");

  const [showCast, setShowCast] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      {/* Cast grid */}
      <div
        className={`flex flex-wrap justify-center gap-4 transition-all duration-300 overflow-hidden ${
          showCast ? "max-h-full" : "max-h-[220px]"
        }`}
      >
        {creditsData?.cast?.map((user: any) => {
          const image = user.profile_path
            ? IMAGE_URL + user.profile_path
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png";

          return (
            <div
              key={user.id}
              onClick={() => navigate(`/person/${user.id}`)}
              className="w-[130px] cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group"
            >
              <img
                loading="lazy"
                src={image}
                alt={user.name}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-2 text-center">
                <h3 className="text-sm font-semibold line-clamp-2">{user.name}</h3>
                <p className="text-xs text-gray-500 line-clamp-1">{user.character}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* See more button */}
      <div className="flex justify-center">
        <button
          onClick={() => setShowCast((p) => !p)}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700 transition"
        >
          {showCast ? "Hidden" : "More"}
        </button>
      </div>
    </div>
  );
};

export default Cast;
