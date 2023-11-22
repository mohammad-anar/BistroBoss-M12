import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SectionHeading from "../Shared/SectionHeading"

const Category = () => {
  return (
    <section className="mt-20 mb-6 px-24">
      <div>
        <SectionHeading subTitle={"From 07:00 am to 12:00pm"} title={"Order Online"}></SectionHeading>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper mt-12"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h2 className="text-3xl text-white absolute bottom-4 w-full text-center uppercase">
            Salat
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h2 className="text-3xl text-white text-center absolute bottom-4 w-full uppercase">
            Pizza
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h2 className="text-3xl text-white text-center absolute bottom-4 w-full uppercase">
            Soup
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h2 className="text-3xl text-white text-center absolute bottom-4 w-full uppercase">
            Dessert
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h2 className="text-3xl text-white text-center absolute bottom-4 w-full uppercase">
            Salat
          </h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
