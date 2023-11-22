import Button from "../../Components/Shared/Button";
import MenuItem from "../../Components/Shared/MenuItem";
import SectionHeading from "../../Components/Shared/SectionHeading";
import { useEffect, useState } from "react";

const Menu = () => {
  const [popularmenu, setPopularmenu] = useState([]);
  useEffect(() => {
    fetch("../menu.json")
      .then((res) => res.json())
      .then((data) => {
        const filtedMenu = data.filter((item) => item.category === "popular");
        setPopularmenu(filtedMenu);
      });
  }, []);
  console.log(popularmenu);
  return (
    <section className="px-24">
      <SectionHeading
        subTitle={"Check it out"}
        title={"From Our Menu"}
      ></SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-12 mt-16">
        {popularmenu?.map((menu) => (
          <MenuItem key={menu._id} menu={menu}></MenuItem>
        ))}
      </div>

      <div className="flex items-center justify-center mt-12">
        <Button name="View Full Menu"></Button>
      </div>
    </section>
  );
};

export default Menu;
