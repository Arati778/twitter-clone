import React, { useState } from "react";
import logo1 from "../assets/twitter-logo.png";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const loginSignupHandler = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex items-center w-[80%] justify-evenly ">
        <div>
          <img src={logo1} alt="" />
        </div>
        <div className="">
          <div className="my-9">
            <h1 className="font-bold text-7xl">Happening now.</h1>
          </div>
          <h1 className="mb-2 font-bold text-3xl ">
            {isLogin ? "Login" : "Signup"}
          </h1>
          <form className="flex flex-col">
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  className="outline-blue-500 border border-gray-800 text-lg rounded-full px-4 py-3 my-2 font-semibold"
                />
                <input
                  type="text"
                  placeholder="Username"
                  className="outline-blue-500 border border-gray-800 text-lg rounded-full px-4 py-3 my-2 font-semibold"
                />
              </>
            )}

            <input
              type="text"
              placeholder="Email"
              className="outline-blue-500 border border-gray-800 text-lg rounded-full px-4 py-3 my-2 font-semibold"
            />
            <input
              type="text"
              placeholder="Password"
              className="outline-blue-500 border border-gray-800 rounded-full text-lg px-4 py-3 my-2 font-semibold"
            />
            <button className="bg-[#1098F0] text-white text-xl rounded-full px-3 py-3 hover:bg-[#6798b8] cursor-pointer font-bold">
              {isLogin ? "Login" : "Create Account"}
            </button>

            <h1 className="my-3 text-lg">
              {isLogin ? "Do not have an account?" : "Already have an account?"}

              <span
                onClick={loginSignupHandler}
                className="text-blue-600 font-bold cursor-pointer"
              >
                {isLogin ? "Signup" : "Login"}
              </span>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
