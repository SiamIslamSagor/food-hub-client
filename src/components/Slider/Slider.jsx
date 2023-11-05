/* eslint-disable react/no-unescaped-entities */
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
      id: 85367068,
      image: "https://i.ibb.co/Kwk4T4Y/ass11-4.png",
      slogan:
        "Join our mission to combat food waste and hunger. At FoodHub, we believe in the power of sharing. Be a part of our community and help us make a difference. Together, we can ensure that no one goes to bed hungry. Join us in this movement for a world where food is shared, not wasted.",
    },
    {
      id: 23456789,
      image: "https://i.ibb.co/Wt2QNfP/ass11-3.png",
      slogan:
        "Discover the joy of giving and receiving. FoodHub connects caring individuals with surplus food to those who need it most. When you join our platform, you become a Food Hero, spreading kindness one meal at a time. Join us today and let's make a significant impact together.",
    },
    {
      id: 34567890,
      image: "https://i.ibb.co/mG17qsV/ass11-2.png",
      slogan:
        "Welcome to FoodHub, the place where compassion meets action. We're on a quest to make a hunger-free world. By sharing your extra food or receiving nourishment, you become a vital part of our food-sharing ecosystem. Join our growing community and be a force for good. Together, we can transform lives.",
    },
    {
      id: 56789012,
      image: "https://i.ibb.co/yfMdwf6/ass11-7.png",
      slogan:
        "Are you passionate about reducing food waste and helping those in need? FoodHub is your platform to shine. Share your surplus food, connect with fellow food lovers, and make a positive impact. Join us today, and let's create a world where every meal counts.",
    },
    {
      id: 67890123,
      image: "https://i.ibb.co/cDhXVdR/ass11-6.png",
      slogan:
        "FoodHub is your gateway to making a real difference in your community. Our platform brings together people who care about reducing food surplus and ensuring that everyone has enough to eat. Join our vibrant community and help us create a world where food insecurity is a thing of the past.",
    },
    {
      id: 45678901,
      image: "https://i.ibb.co/v1w42pj/ass11-8.png",
      slogan:
        "At FoodHub, we're redefining the way we think about food. Join us in our mission to share food, reduce waste, and strengthen communities. Whether you're a donor or in need, you play a vital role in our vision for a more caring and sustainable world. Join FoodHub and be part of the solution.",
    },
  ];

  return (
    <div className="h-[340px] max-sm:h-[440px] max-md:h-[490px] max-lg:h-[540px]  max-xl:h-[620px] max-2xl:h-[660px] 2xl:h-[690px] w-screen mx-auto ">
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
        {data.map(singleData => (
          <SwiperSlide key={singleData.id}>
            <img
              className="w-full h-full object-cover"
              src={singleData.image}
              alt="slide img"
            />
            <div className="absolute text-white h-full w-full bg-[#000000a1] flex">
              <p className="text-center my-auto mx-auto p-4 sm:p-8 md:p-12 sm:text-2xl lg:text-3xl lg:px-32  xl:px-44 2xl:px-60">
                {singleData.slogan}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
