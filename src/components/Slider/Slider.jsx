import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  const data = [
    {
      id: "sdf",
      img: "https://caferati.me/images/series/bojack-0.png",
    },
    {
      id: "dfg",
      img: "https://caferati.me/images/series/bojack-3.jpg",
    },
    {
      id: "shdf",
      img: "https://caferati.me/images/series/bojack-4.jpg",
    },
    {
      id: "ghfd",
      img: "https://caferati.me/images/series/bojack-0.png",
    },
    {
      id: "shddedf",
      img: "https://caferati.me/images/series/bojack-3.jpg",
    },
    {
      id: "gh",
      img: "https://caferati.me/images/series/bojack-4.jpg",
    },
  ];
  return (
    <div className="h-[70vh] mx-auto max-w-[90vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map(d => (
          <SwiperSlide key={d.id}>
            <img className="max-h-[50vh]" src={d.img} alt="slide img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
