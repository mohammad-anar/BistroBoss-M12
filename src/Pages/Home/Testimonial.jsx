import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "../../../src/style.css";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import SectionHeading from "../../Components/Shared/SectionHeading";

const Testimonial = () => {
    const [revies, setREviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
        .then(res => res.json())
        .then(data => setREviews(data))
    },[])
  return (
    <div className="px-24">
      <SectionHeading subTitle={"What Our Client Say"} title={"Testimonials"}></SectionHeading>
   
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper min-h-[80vh]"
      >
         {
        revies?.map(review =><SwiperSlide key={review._id} className="min-h-[80vh] flex flex-col items-center justify-center px-20">
          <div className="flex flex-col items-center gap-2 w-11/12">
            <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
            <FaQuoteLeft className="my-8" size={60} />
            
            <p>
              {review.details}
            </p>
            <h2 className="text-3xl text-[#CD9003]">{review.name}</h2>
          </div>
        </SwiperSlide>)
      }
        
      </Swiper>
    </div>
  );
};

export default Testimonial;
