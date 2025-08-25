import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { memo } from "react";
import { IMAGE_URL } from "../../../shared/const";
import { useNavigate } from "react-router-dom";


const MovieSlider = ({ data, imagesData}: any) => {
    console.log("img", imagesData);
    const navigate = useNavigate()
    
  return (
     <div className="w-full max-w-5xl mx-auto">
      <Swiper
        modules={[Navigation]}
        navigation={true}   // chap/o‘ng tugmalarni yoqadi
        spaceBetween={20}  // slaydlar orasidagi masofa
        slidesPerView={3}  // bir vaqtning o‘zida 3ta rasm ko‘rinadi
      >
        {data?.results.map((movie:any) => (
          <SwiperSlide key={movie.id}>
            <div onClick={()=> navigate(`/movie/${movie.id}`)} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <img
                src={`${IMAGE_URL}${movie.poster_path}`}
                alt={movie.title}
                className="w-full  h-100 object-cover"
              />
              <h3 className="text-center text-white py-2">{movie.title}</h3>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(MovieSlider);
