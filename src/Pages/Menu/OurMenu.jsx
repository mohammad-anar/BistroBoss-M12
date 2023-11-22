import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Shared/Cover";
import bannerImage from "../../assets/menu/banner3.jpg";
import desertImage from "../../assets/menu/dessert-bg.jpeg";
import pizzaImage from "../../assets/menu/pizza-bg.jpg";
import saladImage from "../../assets/menu/salad-bg.jpg";
import soupImage from "../../assets/menu/soup-bg.jpg";


import SectionHeading from "../../Components/Shared/SectionHeading";
import MenuItem from "../../Components/Shared/MenuItem";
import Button from "../../Components/Shared/Button";
import useLoadData from "../../Hooks/useLoadData";

const OurMenu = () => {
  // load all data from custom hoom 
  const menus = useLoadData();
  // here filted all data by category and sliced for show min size 
  const offeredMenues = menus?.filter((item) => item.category === "offered");
  const dessertMenues = menus
    ?.filter((item) => item.category === "dessert")
    .slice(0, 6);
  const pizzaMenues = menus
    ?.filter((item) => item.category === "pizza")
    .slice(0, 6);
  const saladMenues = menus
    ?.filter((item) => item.category === "salad")
    .slice(0, 6);
  const soupMenues = menus
    ?.filter((item) => item.category === "soup")
    .slice(0, 6);
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover
        image={bannerImage}
        title={"OUR MENU"}
        description={"Would you like to try a dish?"}
        bg_color={"black"}
        text_color={"white"}
        cover_h={"600"}
        bg_opacity={40}
      ></Cover>
      {/* offered manu  */}
      <div className="my-12 px-24">
        <SectionHeading
          subTitle={"Don't miss"}
          title={"today's offer"}
        ></SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-12">
          {offeredMenues.map((menu) => (
            <MenuItem key={menu._id} menu={menu}></MenuItem>
          ))}
        </div>
        <div className="flex justify-center items-center my-6 mt-2">
          <Button category={"offered"}  name={"ORDER YOUR FAVOURITE FOOD"}></Button>
        </div>
      </div>
      {/* dessert cover  */}
      <div>
        <Cover
          image={desertImage}
          title={"DESSERTS"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          bg_color={"black"}
          text_color={"white"}
          cover_h={"500"}
          bg_opacity={40}
        ></Cover>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-12 px-24">
            {dessertMenues.map((menu) => (
              <MenuItem key={menu._id} menu={menu}></MenuItem>
            ))}
            <div></div>
          </div>
          <div className="flex justify-center items-center my-6 mt-2">
            <Button category={"dessert"}  name={"ORDER YOUR FAVOURITE FOOD"}></Button>
          </div>
        </div>
      </div>
      {/* Pizza cover  */}
      <div>
        <Cover
          image={pizzaImage}
          title={"PIZZA"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          bg_color={"black"}
          text_color={"white"}
          cover_h={"500"}
          bg_opacity={40}
        ></Cover>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-12 px-24">
            {pizzaMenues.map((menu) => (
              <MenuItem key={menu._id} menu={menu}></MenuItem>
            ))}
            <div></div>
          </div>
          <div className="flex justify-center items-center my-6 mt-2">
            <Button category={"pizza"} name={"ORDER YOUR FAVOURITE FOOD"}></Button>
          </div>
        </div>
      </div>
      {/* Salad cover  */}
      <div>
        <Cover
          image={saladImage}
          title={"SALADS"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          bg_color={"black"}
          text_color={"white"}
          cover_h={"500"}
          bg_opacity={40}
        ></Cover>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-12 px-24">
            {saladMenues.map((menu) => (
              <MenuItem key={menu._id} menu={menu}></MenuItem>
            ))}
            <div></div>
          </div>
          <div className="flex justify-center items-center my-6 mt-2">
            <Button category={"salad"}  name={"ORDER YOUR FAVOURITE FOOD"}></Button>
          </div>
        </div>
      </div>
      {/* SOUPS cover  */}
      <div>
        <Cover
          image={soupImage}
          title={"SOUPS"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          bg_color={"black"}
          text_color={"white"}
          cover_h={"500"}
          bg_opacity={40}
        ></Cover>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-12 px-24">
            {soupMenues.map((menu) => (
              <MenuItem key={menu._id} menu={menu}></MenuItem>
            ))}
            <div></div>
          </div>
          <div className="flex justify-center items-center my-6 mt-2">
            <Button category={"soup"}  name={"ORDER YOUR FAVOURITE FOOD"}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
