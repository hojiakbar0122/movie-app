import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { memo } from "react";
import { IMAGE_URL } from "../../../shared/const";

const MovieSlider = ({ imagesData }: any) => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={12}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 8 },
          640: { slidesPerView: 3, spaceBetween: 10 },
          1024: { slidesPerView: 4, spaceBetween: 12 },
        }}
      >
        {imagesData?.backdrops?.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <div className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
              <img
                loading="lazy"
                src={IMAGE_URL + item.file_path}
                alt={`backdrop-${index}`}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(MovieSlider);
