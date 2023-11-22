import { useQuery } from "@tanstack/react-query";
import SectionHeading from "../../../Components/Shared/SectionHeading";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useMyContext from "../../../Hooks/useMyContext";

const PaymentHistory = () => {
  const { user } = useMyContext();
  const axiosSecure = useAxiosSecure();
  const { data: payments, isLoading } = useQuery({
    queryKey: ["paymenthistory"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/${user?.email}`);
      return res.data;
    },
  });
  const reverseStr = (str) => {
    const string = str.split("").reverse().join("");
    return string;
  }
  return (
    <div>
      <SectionHeading
        subTitle={"At a Glance"}
        title={"Payment History"}
      ></SectionHeading>
      <div className="bg-white p-8">
        <div className="flex  flex-col items-start justify-between mb-4">
          <h2 className="text-xl font-bold text-[#151515] uppercase">
            Total Orders:{payments?.length.toString().padStart(2, 0)}
          </h2>
          <table className="table table-zebra">
            {/* head */}
            <thead className="text-base"> 
              <tr>
                <th>SL</th>
                <th>Email</th>
                <th>Transection Id</th>
                <th>Price</th>
                <th>Date</th>
              </tr>
            </thead>
            {isLoading || <tbody>
              {/* row 1 */}
              {payments?.map((payment, index) => (
                <tr key={payment._id}>
                  <th>{index+1}</th>
                  <td>{payment.email}</td>
                  <td>{payment.transectionId}</td>
                  <td>${payment.price}</td>
                  <td>{reverseStr((payment.date).slice(5, 10))}-{(payment.date).slice(0, 4)}<br/>{(payment.date).slice(11, -1)}</td>
                </tr>
              ))}
            </tbody>}
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
