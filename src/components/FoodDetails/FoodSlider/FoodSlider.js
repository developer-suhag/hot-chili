import { Container } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import useAuth from "../../../hooks/useAuth";
import Slide from "../FoodSlider/Slide/Slide";

const FoodSlider = () => {
  const { foods } = useAuth();

  return (
    <Container sx={{ mt: 4 }}>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        centeredSlides
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          {foods.slice(0, 1).map((food) => (
            <Slide food={food}></Slide>
          ))}
        </SwiperSlide>
        <SwiperSlide>
          {foods.slice(1, 2).map((food) => (
            <Slide food={food}></Slide>
          ))}
        </SwiperSlide>
        <SwiperSlide>
          {foods.slice(2, 3).map((food) => (
            <Slide food={food}></Slide>
          ))}
        </SwiperSlide>
        <SwiperSlide>
          {foods.slice(3, 4).map((food) => (
            <Slide food={food}></Slide>
          ))}
        </SwiperSlide>
        <SwiperSlide>
          {foods.slice(4, 5).map((food) => (
            <Slide food={food}></Slide>
          ))}
        </SwiperSlide>

        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}
      </Swiper>
    </Container>
  );
};

export default FoodSlider;
