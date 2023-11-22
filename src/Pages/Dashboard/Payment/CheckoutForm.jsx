import { CardElement } from "@stripe/react-stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useMyContext from "../../../Hooks/useMyContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const { user } = useMyContext();
  const [error, setError] = useState("");
  const [clientSectet, setClientSecret] = useState("");
  const [transectionId, setTransectionId] = useState('');
  const axiosSecure = useAxiosSecure();
  const stripe = useStripe();
  const elements = useElements();
  const [carts, refetch] = useCart();
  const totalPrice = carts.reduce((total, current) => total + current.price, 0);
  const navigate = useNavigate();

  useEffect(() => {
   carts &&  axiosSecure
   .post("/create-payment-intent", { price: totalPrice })
   .then((res) => {
     console.log(res.data?.clientSecret);
     setClientSecret(res.data?.clientSecret);
   });
  }, [axiosSecure, totalPrice, carts]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // stripe.js has not loaded yet. Make sure to disable form submission until stripe js has loaded;
      return;
    }

    // get a referance to mounted cardElement
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
      console.log("[error]", error);
    } else {
      setError("");
      console.log("[paymentmethod]", paymentMethod);
    }

    // confirm paymnt
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSectet,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonimous",
            name: user?.displayName || "anonimous"
          },
        },
      }
    );
    if (confirmError) {
      console.log(confirmError);
    } else {
      if(paymentIntent.status === "succeeded"){
        setTransectionId(paymentIntent.id)
         console.log(paymentIntent);
        // save the user in the database 
        const payment = {
          email: user.email,
          transectionId: paymentIntent.id,
          price: totalPrice,
          date: new Date(),
          cartIds : carts.map(item => item._id),
          menuItemIds: carts.map(item => item.menuId),
          status: "pending"
        }
       const result = await axiosSecure.post('/payment', payment)
       console.log(result.data);
       if(result.data.result.insertedId){
         refetch()
         toast.success("payment successfull")
         navigate("/dashboard/paymenthistory")
       }
      }
      console.log(paymentIntent, "paymentintent from confirm card");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn btn-ghost btn-outline rounded-xl border-gray-300"
          disabled={!stripe || !clientSectet}
        >
          Pay
        </button>
        <p className="text-red-600 mt-2 text-[12px]">{error}</p>
        {
          transectionId && <p className="text-green-600"> Your transectionId: {transectionId}</p>
        }
      </form>
    </div>
  );
};

export default CheckoutForm;
