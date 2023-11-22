import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useMyContext from "./useMyContext";

const useGetAdmin = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useMyContext();

    const token = localStorage.getItem("access_token")
    // ---------------
    const {data: isAdmin, isLoading:isAdminLoading} = useQuery({
        queryKey: [user?.email, "isAdmin"],
        enabled: !!user?.email && !!token, // check if email and token have or not. if token and email have then run query function
        queryFn: async () => {
            const result = await axiosSecure.get(`/users/admin/${user?.email}`);
           
            return result.data?.admin

        }
    });
    return [isAdmin, isAdminLoading]
};

export default useGetAdmin;