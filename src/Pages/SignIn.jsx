import { useEffect, useState } from "react";
import image from "../assets/others/authentication.png";
import loginbanner from "../assets/others/authentication2.png";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaRegEye,
  FaRegEyeSlash,
} from "react-icons/fa";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MyHelmet from "../Components/Shared/myHelmet";
import useMyContext from "../Hooks/useMyContext";
import toast from "react-hot-toast";
import useAxiosPublic from "../Hooks/useAxiosPublic";


const SignIn = () => {
  const [show, setShow] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [captchaValue, setCaptchaValue] = useState(true);
  const [shwoverify, setShowVerify] = useState(false);
  const [verified, setVerify] = useState(false)
  const {signInUser, googleSignIn} = useMyContext();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  // navigate route from useLocation hook 
  let goto = location.state || "/"
  const navigate = useNavigate()
  useEffect(() => { 
      loadCaptchaEnginge(6, "transparent", "green");
    }, []);
    const handleVerify = () => {
        if(validateCaptcha(captchaValue) === true) {
            setDisabled(false);
            setShowVerify(false)
            setVerify(true)
            toast.success("Verified captcha");
    }else{
        toast.error("Captcha not match. Retype..")
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    // signin user 
    signInUser(email, password)
    .then(res => {
        console.log(res.user);
        toast.success("login successfull !");
        navigate(goto)

    })
    .catch(err => {
        console.log(err);
        toast.error(err.message);
    })


  }
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
        toast.success("login successfull !");
        navigate(goto)
    })
    .catch( err => {
        toast.error(err.message);
    })
  }
  return (
    <>
    <MyHelmet name={"Sign in"}></MyHelmet>
        <div
      className="min-h-screen w-full shadow-xl p-24 bg-black bg-opacity-20"
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
          <div className="card p-8 flex-shrink-0 w-full max-w-md  bg-transparent">
            <h2 className="text-2xl font-extrabold -mb-4 text-center">
              Log In
            </h2>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="input input-bordered rounded-lg"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <div className="relative flex items-center">
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    placeholder="Enter password"
                    className="input input-bordered rounded-lg w-full"
                    required
                  />
                  <div
                    onClick={() => setShow(!show)}
                    className="absolute right-4 text-xl"
                  >
                    {!show ? (
                      <FaRegEye></FaRegEye>
                    ) : (
                      <FaRegEyeSlash></FaRegEyeSlash>
                    )}
                  </div>
                </div>
                <div className="form-control my-4 relative">
                  <LoadCanvasTemplate  reloadColor="red" />
                </div>
                <div></div>
                <div className="form-control mb-4">
                  <input
                    type="text"
                    name="captcha"
                    onChange={(e) =>{ 
                        setCaptchaValue(e.target.value);
                        if(captchaValue.length === 5) {                            
                        setShowVerify(true)
                        }else{
                            setShowVerify(false)
                        }
                        }}
                    placeholder="Type captcha here"
                    className="input input-bordered rounded-lg"
                    required
                  />
                  {verified && <p className="text-green-600 ml-2 mt-1">Verified</p>}
                  <div onClick={handleVerify} className={`${!shwoverify&& "hidden"} btn btn-xs btn-outline w-1/4 mt-3 rounded-lg bg-[#D1A054]`}>Verify</div>
                </div>
              </div>
              <div className="form-control ">
                <input type="submit" className="btn rounded-lg text-white bg-[#D1A054]" disabled={disabled} value={"Sign In"}/>
              </div>
            </form>
            <div>
              <div className="-mt-6 text-[#D1A054] flex gap-2 items-center justify-center">
                <p>New here?</p>{" "}
                <Link to={"/signup"} className="cursor-pointer underline">
                  Create a New Account
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

export default SignIn;
