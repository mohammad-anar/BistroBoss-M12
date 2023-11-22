import SectionHeading from "../../Components/Shared/SectionHeading";
import image from "../../assets/home/slide5.jpg"

const OurRecommends = () => {
  return (
    <div className="my-12 px-24">
      <SectionHeading
        subTitle={"Should Try"}
        title={"Cheaf Recommends"}
      ></SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* card 1 */}
        <div className="card card-compact bg-[#F3F3F3] min-h-[300px]  rounded-none shadow-md">
          <figure>
            <img
            className="object-cover w-full h-[300px]"
              src={image}
              alt="remommended card image"
            />
          </figure>
          <div className="card-body  items-center justify-center my-4">
            <h2 className="card-title text-2xl font-semibold">Cheser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="justify-center">
              <button className="btn btn-outline mt-4 hover:bg-[#1F2937] border-0 border-b-4 rounded-xl border-[#BB8506] hover:text-[#BB8506] text-[#BB8506] text-xl uppercase">Add to cart</button>
            </div>
          </div>
        </div>
      {/* card 2 */}
        <div className="card card-compact bg-[#F3F3F3] min-h-[300px]  rounded-none shadow-md">
          <figure>
            <img
            className="object-cover w-full h-[300px]"
              src={image}
              alt="remommended card image"
            />
          </figure>
          <div className="card-body  items-center justify-center my-4">
            <h2 className="card-title text-2xl font-semibold">Cheser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="justify-center">
              <button className="btn btn-outline mt-4 hover:bg-[#1F2937] border-0 border-b-4 rounded-xl border-[#BB8506] hover:text-[#BB8506] text-[#BB8506] text-xl uppercase">Add to cart</button>
            </div>
          </div>
        </div>
      {/* card 3 */}
        <div className="card card-compact bg-[#F3F3F3] min-h-[300px]  rounded-none shadow-md">
          <figure>
            <img
            className="object-cover w-full h-[300px]"
              src={image}
              alt="remommended card image"
            />
          </figure>
          <div className="card-body  items-center justify-center my-4">
            <h2 className="card-title text-2xl font-semibold">Cheser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="justify-center">
              <button className="btn btn-outline mt-4 hover:bg-[#1F2937] border-0 border-b-4 rounded-xl border-[#BB8506] hover:text-[#BB8506] text-[#BB8506] text-xl uppercase">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurRecommends;
