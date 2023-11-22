import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Button = ({ category, name }) => {
  console.log(category,name);
  return (
    <Link to={`/ourshop/${category}`}>
      <button className="btn btn-lg btn-outline uppercase rounded-xl border-0 border-b-4  border-black text-lg">
        {name}
      </button>
    </Link>
  );
};

export default Button;
