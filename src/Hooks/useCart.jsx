import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure"
import useMyContext from "./useMyContext";

const useCart = () => {
  const axiosSecure = useAxiosSecure()
  const {user} = useMyContext();
  const { refetch, data: carts=[], isLoading, isFetching } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () =>{
        const data = await axiosSecure.get(`/carts?email=${user?.email}`)
        return data.data
    }
  });
  return [carts,refetch, isLoading, isFetching]
};

export default useCart;
