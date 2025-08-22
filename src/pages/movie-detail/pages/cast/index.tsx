import { useState } from "react";
import { useMovieDetail } from "../../services/useMovieDetail";
import { useNavigate, useParams } from "react-router-dom";
import { IMAGE_URL } from "../../../../shared/const";

const Cast = () => {
  const { id } = useParams();
  const { getMovieItems } = useMovieDetail();

  const { data: creditsData } = getMovieItems(id || "", "credits");

  const [showCast, setShowCast] = useState(false);
  const navigate = useNavigate()
  return (
    <div>
      <div className={`flex flex-wrap justify-center gap-2 border h-${showCast?"auto":"[255px]"} overflow-hidden`}>
        {creditsData?.cast
          .map((user: any) => {
            const image = user.profile_path
              ? IMAGE_URL + user.profile_path
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png";
            return (
              <div key={user.id} className="w-[120px] border h-[250px]">
                <img
                onClick={()=>navigate(`/person/${user.id}`)}
                  loading="lazy"
                  src={image}
                  width={80}
                  alt=""
                  className="w-full"
                />
                <h3 className="line-clamp-2">{user.name}</h3>
                <p className="text-gray-500 line-clamp-1">{user.character}</p>
              </div>
            );
          })}
      </div>
      <div className="flex justify-center ">
        <button
          onClick={() => setShowCast((p) => !p)}
          className="p-2 bg-gray-300"
        >
          See more
        </button>
      </div>
    </div>
  );
};

export default Cast;
