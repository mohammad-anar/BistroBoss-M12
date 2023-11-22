import { Helmet } from "react-helmet-async";

const MyHelmet = ({ name }) => {
  return (
    <>
      <Helmet>
        <title>Bistro | {name && name}</title>
      </Helmet>
    </>
  );
};

export default MyHelmet;
