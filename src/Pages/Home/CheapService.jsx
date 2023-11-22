import Cover from "../../Components/Shared/Cover";
import img from "../../assets/home/chef-service.jpg";
const CheapService = () => {
  const description = (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
      libero accusamus laborum deserunt ratione dolor officiis praesentium!
      Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt
      quibusdam nemo.
    </>
  );
  return (
    <div className="px-24 my-12 mt-24">
      <Cover
      image={img}
      title={"Bistro Boss"}
      description={description}
      bg_color={"white"}
      text_color={"black"}
      cover_h={"700px"}
      bg_opacity={100}
    ></Cover>
    </div>
  );
};

export default CheapService;
