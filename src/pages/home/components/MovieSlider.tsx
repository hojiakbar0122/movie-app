import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import "swiper/css/navigation";
// import "swiper/css";
import { memo } from "react";
import { IMAGE_URL } from "../../../shared/const";


const MovieSlider = ({ data, imagesData}: any) => {
    console.log("img", imagesData);
    
  return (
    <div className="max-w-2xl mx-50 ml-85">
      <Swiper
        modules={[Navigation]}
        navigation={true} // chap/o‘ng tugmalarni yoqadi
        spaceBetween={1} // slaydlar orasidagi masofa
        slidesPerView={5} // bir vaqtning o‘zida 3ta rasm ko‘rinadi
      >
        {data?.results.map((movie: any) => (
          <SwiperSlide key={movie.id}>
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              {imagesData?.backdrops
                ?.slice(0, 1)
                ?.map((item: any, inx: number) => (
                  <img
                    loading="lazy"
                    key={inx}
                    src={IMAGE_URL + item.file_path}
                    width={180}
                    alt=""
                  />
                ))}
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  );
};

export default memo(MovieSlider);
