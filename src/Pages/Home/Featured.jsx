import SectionHeading from "../../Components/Shared/SectionHeading";
import featured from "../../assets/home/featured.jpg";
const Featured = () => {
  return (
    <div
      className="hero h-full max-h-[840px] bg-fixed min-h-[500px] my-12"
      style={{
        backgroundImage: `url(${featured})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-center bg-black bg-opacity-40 text-neutral-content">
        <div className="max-w-full flex flex-col gap-4 p-12 px-20">
          <SectionHeading
            subTitle={"Check it our"}
            title={"From our Menu"}
          ></SectionHeading>
          <div className="grid mt-8 grid-cols-1 items-center md:grid-cols-2 gap-6">
            <img
              className="max-w-[450px]
            "
              src={featured}
              alt="featured image"
            />
            <div
              className="text-left 
            "
            >
              <p className="text-2xl text-white">
                March 20, 2023 <br /> WHERE CAN I GET SOME? <br />{" "}
                <span className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  voluptate facere, deserunt dolores maiores quod nobis quas
                  quasi. Eaque repellat recusandae ad laudantium tempore
                  consequatur consequuntur omnis ullam maxime tenetur.
                </span>
              </p>
              <button className="btn text-white border-white my-6 btn-outline border-0 border-b-4 rounded-xl">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
