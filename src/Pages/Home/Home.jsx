import { Helmet } from "react-helmet-async";
import Category from "../../Components/Category/Category";
import Slider from "../../Components/Slider";
import CallUs from "./CallUs";
import CheapService from "./CheapService";
import Featured from "./Featured";
import Menu from "./Menu";
import OurRecommends from "./OurRecommends";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
     <Helmet>
        <title>Bistro | Home</title>
      </Helmet>
      <Slider></Slider>
      <Category></Category>
      <CheapService></CheapService>
      <Menu></Menu>
      <CallUs></CallUs>
      <OurRecommends></OurRecommends>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
