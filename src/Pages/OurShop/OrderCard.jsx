import Swal from "sweetalert2";
import useMyContext from "../../Hooks/useMyContext";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import useCart from "../../Hooks/useCart";


const OrderCard = ({menu}) => {
  const [,refetch] = useCart();
  const {name, image, price, _id} = menu;
  const {user} = useMyContext();
  const navigate = useNavigate();
  const location = useLocation();
  const handleCart = () => {
    if (user && user?.email) {
      const cartData = {
        menuId :_id,
        email:user?.email,
        name,
        image,
        price
      }
      axios.post("http://localhost:5000/carts", cartData)
      .then(res => {
        toast.success("cart saved")
        refetch()
        console.log(res.data)})
      .catch(err => {
        toast.error(err.message)
        console.log(err)})
    }else{
      Swal.fire({
        title: "Add to cart is need to login",
        text: "Do you want to add cart? please login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#000",
        confirmButtonText: "Sign in"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signin", {state: location?.pathname})
        }
      });
    }
  }
    return (
        <div className="card card-compact text-center relative bg-[#F3F3F3] min-h-[300px]  rounded-none shadow-md">
          <figure>
            <img
            className="object-cover w-full h-[300px]"
              src={menu?.image}
              alt="remommended card image"
            />
          </figure>
          <div className="card-body  items-center justify-center my-4">
            <h2 className="card-title text-2xl font-semibold">{menu?.name}</h2>
            <p>{menu?.recipe}</p>
            <div className="justify-center">
              <button
              onClick={handleCart}
               className="btn btn-outline mt-4 hover:bg-[#1F2937] border-0 border-b-4 rounded-xl border-[#BB8506] hover:text-[#BB8506] text-[#BB8506] text-xl uppercase">Add to cart</button>
            </div>
          </div>
          <p className="absolute top-4 right-4 p-2 px-6 bg-[#1a2336]  text-base text-white">${menu?.price}</p>
        </div>
    );
};

export default OrderCard;