import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import SectionHeading from "../../../Components/Shared/SectionHeading";

//TODO: ADD publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GAETWAY_PK);
const Payment = () => {
  return (
    <div>
      <SectionHeading subTitle={"Please pay to eat"} title={"Payment"}></SectionHeading>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
