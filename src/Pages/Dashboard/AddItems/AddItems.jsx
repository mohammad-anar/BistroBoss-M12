import { FaUtensils } from "react-icons/fa6";
import SectionHeading from "../../../Components/Shared/SectionHeading";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const image_hosting_apikey = import.meta.env.VITE_IMG_HOSTING_KEY;
  const image_hosting_apikey_url = `https://api.imgbb.com/1/upload?key=${image_hosting_apikey}`

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   form submit function
  const onSubmit = async (data) => {
    const formData = new FormData();
    const image = data.image[0];
    formData.append("image", image)
    console.log(data);
    const res = await axiosPublic.post(image_hosting_apikey_url, formData, {
      headers: {
        "content-type": "multipart/form-data",
      }
    })
   try{
    if (res.data.status === 200){
      const image_link = res.data.data.display_url;
      const menu = {
        name: data.recipeName,
        category:data.category,
        recipe: data.recipeDetails,
        image: image_link,
        price: parseFloat(data.price)
      }
      const menuRes = await axiosSecure.post("/menus", menu)
      if(menuRes.data.insertedId){
        toast.success("menu added successfully")
      }else{
        toast.error("can't add menu")
      }
     }
   }catch(err){
    toast.error(err.message)
   }
    
    
  };
  return (
    <div>
      <SectionHeading
        subTitle={"What's New"}
        title={"Add An Item"}
      ></SectionHeading>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center w-full gap-3 justify-center"
        >
          {/* register your input into the hook by invoking the "register" function */}
          {/* first row  */}
          <div className="w-full">
            <label
              className="text-base mb-2 inline-block font-semibold text-[#444]"
              htmlFor="recipeName"
            >
              Recipe Name*
            </label>
            <input
              id="recipeName"
              {...register("recipeName", { required: true })}
              type="text"
              placeholder="Enter recipe name"
              className="input input-bordered w-full"
            />
            {errors.recipeName && <span>This field is required</span>}
          </div>

          {/* second row  */}
          <div className="flex items-center gap-4 w-full">
            {/* select category  */}
            <div className="w-full">
              <label
                className="text-base mb-2 inline-block font-semibold text-[#444]"
                htmlFor="category"
              >
                Category*
              </label>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                id="category"
                className="select select-bordered w-full"
              >
                <option disabled value="default" selected>
                  Select a category
                </option>
                <option>salad</option>
                <option>pizza</option>
                <option>soup</option>
                <option>desert</option>
                <option>drinks</option>
              </select>
              {errors.category && <span>This field is required</span>}
            </div>
            {/* Price */}
            <div className="w-full">
              <label
                className="text-base mb-2 inline-block font-semibold text-[#444]"
                htmlFor="price"
              >
                Price*
              </label>
              <input
                id="price"
                {...register("price", { required: true })}
                type="text"
                placeholder="Price here"
                className="input input-bordered w-full"
              />
              {errors.price && <span>This field is required</span>}
            </div>
          </div>

          {/* third row  */}
          <div className="w-full">
            <label
              className="text-base mb-2 inline-block font-semibold text-[#444]"
              htmlFor="recipeDetails"
            >
              Recipe description*
            </label>
            <textarea
              id="recipeDetails"
              {...register("recipeDetails", { required: true })}
              placeholder="Wtite details "
              className="textarea w-full resize-none textarea-bordered"
            ></textarea>

            {errors.recipeDetails && <span>This field is required</span>}
          </div>
          <div className="w-full flex flex-col">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs rounded-md"
            />
            {errors.photo && <span>This field is required</span>}
          </div>

          <div className="flex w-full mt-6">
            <button className="btn btn-primary bg-gradient-to-r from-[#835D23] to-[#B58130] outline-none border-0">
              Add Item <FaUtensils></FaUtensils>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
