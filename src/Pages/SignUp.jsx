import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaRegEye,
  FaRegEyeSlash,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import image from "../assets/others/authentication.png";
import loginbanner from "../assets/others/authentication2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import MyHelmet from "../Components/Shared/myHelmet";
import useMyContext from "../Hooks/useMyContext";
import toast from "react-hot-toast";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const [show, setShow] = useState(false);
  const { createUser, updateUser, googleSignIn } = useMyContext();
  const navigate = useNavigate();
  const location = useLocation();
  const goto = location.state || "/"
  // hook form
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        toast.success("User created");
        updateUser(data.name, data.photo)
          .then(() => {
            // save user in the database 
            const userInfo = {
              name : data.name,
              email: data.email,

            }
            // api request for user save 
             axiosPublic.post("/users", userInfo)
             .then(res => {
              console.log(res.user);
             }).catch(err => {
              console.log(err);
             })
            toast.success("Profile is updated");
            reset();
            navigate("/");
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err);
      });
  };

  //   google sign in
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        const email = res.user?.email;
        const name = res.user?.displayName;
        // user info for save to db
        const userInfo = {
          name:name,
          email:email
        }
        // api request for user save 
        axiosPublic.post("/users", userInfo)
        .then(() => {
        }).catch(err => {
         console.log(err);
        })
        toast.success("successfull!");
        navigate(goto);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <>
      <MyHelmet name={"Sign Up"}></MyHelmet>
      <div
        className="min-h-screen w-full shadow-xl p-24 bg-black bg-opacity-10"
        style={{
          backgroundImage: `url(${image}) `,
          backgroundBlendMode: "darken",
        }}
      >
        <div
          className="hero h-full shadow-xl "
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center lg:text-left">
              <img src={loginbanner} alt="" />
            </div>
            <div className="card order-first flex-shrink-0 w-full p-8 max-w-md  bg-transparent">
              <h2 className="text-2xl font-extrabold -mb-4 text-center">
                Sign Up
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                {/* name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Name</span>
                  </label>
                  <input
                    type="name"
                    name="name"
                    {...register("name", { required: true })}
                    placeholder="Enter name"
                    className="input input-bordered rounded-lg"
                  />
                  {errors.name && (
                    <span className="text-sm text-red-600">
                      This field is required
                    </span>
                  )}
                </div>
                {/* photo */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">photoURL</span>
                  </label>
                  <input
                    type="url"
                    name="photo"
                    {...register("photo", { required: true })}
                    placeholder="Enter url"
                    className="input input-bordered rounded-lg"
                  />
                  {errors.photo && (
                    <span className="text-sm text-red-600">
                      photoURL is required
                    </span>
                  )}
                </div>
                {/* email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                    placeholder="Enter email"
                    className="input input-bordered rounded-lg"
                  />
                  {errors.email && (
                    <span className="text-sm text-red-600">
                      Email is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Password</span>
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type={show ? "text" : "password"}
                      name="password"
                      id="signupPassword"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern:
                          /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
                      })}
                      placeholder="Enter password"
                      className="input input-bordered rounded-lg w-full"
                    />
                    <label
                      htmlFor="signupPassword"
                      onClick={() => setShow(!show)}
                      className="absolute right-4 text-xl"
                    >
                      {!show ? (
                        <FaRegEye></FaRegEye>
                      ) : (
                        <FaRegEyeSlash></FaRegEyeSlash>
                      )}
                    </label>
                  </div>
                  {errors.password?.type === "required" && (
                    <span className="text-sm text-red-600">
                      This field is required
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-sm text-red-600">
                      (password must 6-20 char)
                    </span>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <span className="text-sm text-red-600">
                      (password must 6-20 char)
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="text-sm text-red-600">
                      (password must have a number, uppercase and lowercase
                      letter, and a special character)
                    </span>
                  )}
                </div>
                <div className="form-control ">
                  <input
                    type="submit"
                    className="btn rounded-lg mt-4 text-white bg-[#D1A054]"
                    disabled={false}
                    value={"Sign up"}
                  />
                </div>
              </form>
              <div>
                <div className="-mt-6 text-[#D1A054] flex gap-2 items-center justify-center">
                  <p>Already Register?</p>{" "}
                  <Link to={"/signin"} className="cursor-pointer underline">
                    Sign in
                  </Link>
                </div>
                <div className="text-center mt-3">
                  <h3 className="text-lg text-[#444] border-b-2 border-[#444] pb-1 w-2/4 mx-auto mb-4">
                    Or sign in with
                  </h3>
                  <div className="flex items-center justify-center gap-4">
                    <FaFacebook
                      className="border border-black p-2 cursor-pointer hover:bg-[#D1A054] hover:text-white duration-300 rounded-full"
                      size={35}
                    />
                    <FaGoogle onClick={handleGoogleLogin}
                      className="border border-black p-2 cursor-pointer hover:bg-[#D1A054] hover:text-white duration-300 rounded-full"
                      size={35}
                    />
                    <FaGithub
                      className="border border-black p-2 cursor-pointer hover:bg-[#D1A054] hover:text-white duration-300 rounded-full"
                      size={35}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
