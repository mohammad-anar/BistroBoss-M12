import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useLoadData = () => {
  const axiosSecure = useAxiosSecure()
  const {data : menus=[], isLoading, refetch} = useQuery({
    queryKey:["menu"],
    queryFn: async () => {
      const res = await axiosSecure.get("/menus")
      return res.data
    }
  })
  //   const [menus, setMenus] = useState([]);
  // useEffect(() => {
  //   fetch("https://bistro-boss-server-psi-six.vercel.app/menus")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setMenus(data);
  //     });
  // }, []);
    return [menus, isLoading , refetch]
};

export default useLoadData;