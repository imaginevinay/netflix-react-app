import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="relative h-screen">
      {/* Background image */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg" // Replace with the correct path
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Header */}
      <Header />

      {/* Form */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <form className="absolute p-14 w-1/4 my-36 mx-auto right-0 left-0 text-white bg-black bg-opacity-80">
          <div>
            <h1 className="text-3xl font-semibold mb-7">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            {isSignIn ? (
              ""
            ) : (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-[#333] h-12 py-4 px-5 rounded mb-4 leading-[50px]"
              />
            )}
            <input
              type="text"
              placeholder="Email Address"
              className="w-full bg-[#333] h-12 py-4 px-5 rounded mb-4 leading-[50px]"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-[#333] h-12 py-4 px-5 rounded mb-4 leading-[50px]"
            />
            <button
              type="submit"
              className="bg-red-700 w-full p-4 rounded font-semibold mt-6 mb-3 leading-3"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </div>

          <div className="flex justify-between">
            <div className="flex">
              <input
                type="checkbox"
                name="remember_me"
                className="mr-[10px] text-black"
              />
              <p>Remember me</p>
            </div>

            <a href="/LoginHelp">Need help?</a>
          </div>
          <div className="mt-14">
            <div className="cursor-pointer flex">
              <p className="text-[#737373] mr-1">
                {isSignIn ? "New to Netflix?" : "Already Registered?"}{" "}
              </p>
              <p className="font-semibold" onClick={toggleSignIn}>
                {isSignIn ? "Sign up now." : "Sign In"}
              </p>
            </div>

            <br />
            <span className="text-[13px] text-[#8c8c8c]">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <a href="" className="text-[#0071eb]">
                Learn more.
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
