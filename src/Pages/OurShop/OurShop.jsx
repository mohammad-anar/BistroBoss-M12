import { useState } from "react";
import bannerImage from "../../assets/shop/banner2.jpg";
import Cover from "../../Components/Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useLoadData from "../../Hooks/useLoadData";
import ShopTabs from "./ShopTabs";
import { useNavigate, useParams } from "react-router-dom";
import MyHelmet from "../../Components/Shared/myHelmet";
const OurShop = () => {
  const navigate = useNavigate();
  const allCategory = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initailIndx = allCategory.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initailIndx);

  // all menu load
  const [menus ]= useLoadData();
  // filted by category
  const drinksMenues = menus?.filter((item) => item.category === "drinks");
  const dessertMenues = menus?.filter((item) => item.category === "dessert");
  const pizzaMenues = menus?.filter((item) => item.category === "pizza");
  const saladMenues = menus?.filter((item) => item.category === "salad");
  const soupMenues = menus?.filter((item) => item.category === "soup");
  const menu = ["salad", "pizza", "soup", "desserts", "drinks"];
  return (
    <div>
      <MyHelmet name={"Shop"}></MyHelmet>
      <div className="my-12 mt-0">
        <Cover
          image={bannerImage}
          title={"DESSERTS"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          bg_color={"black"}
          text_color={"white"}
          cover_h={"600"}
          bg_opacity={40}
        ></Cover>
        <div>
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList className={"text-center text-xl  uppercase"}>
              {menu.map((item, indx) => (
                <Tab onClick={() => navigate(`/ourshop/${item}`)} key={indx}>{item}</Tab>
              ))}
            </TabList>
            <TabPanel>
              <ShopTabs item={saladMenues}></ShopTabs>
            </TabPanel>
            <TabPanel>
              <ShopTabs item={pizzaMenues}></ShopTabs>
            </TabPanel>
            <TabPanel>
              <ShopTabs item={soupMenues}></ShopTabs>
            </TabPanel>
            <TabPanel>
              <ShopTabs item={dessertMenues}></ShopTabs>
            </TabPanel>
            <TabPanel>
              <ShopTabs item={drinksMenues}></ShopTabs>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      <div className="text-center my-8">
        <div className="join">
          <button className="join-item btn">Prev</button>
          <button className="join-item btn ">1</button>
          <button className="join-item btn">2</button>
          <button className="join-item btn">Next</button>
        </div>
      </div>
    </div>
  );
};

export default OurShop;
