import React, { useState } from "react";
import logo1 from "../assets/twitter-logo.png";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/userSlice";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginSignupHandler = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, username, email, password);

    if (isLogin) {
      // login
      try {
        const res = await axios.post(
          `${USER_API_END_POINT}/login`,
          {
            email,
            password,
          },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );

        dispatch(getUser(res?.data?.user));

        if (res.data.success) {
          navigate("/");
          toast.success(res.data.message);
        }
        console.log(res);
      } catch (error) {
        toast.success(error.response.data.message);
        console.log(error);
      }
    } else {
      // signup
      try {
        const res = await axios.post(
          `${USER_API_END_POINT}/register`,
          {
            name,
            username,
            email,
            password,
          },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        if (res.data.success) {
          toast.success(res.data.message);
        }
        console.log(res);
      } catch (error) {
        toast.success(error.response.data.message);
        console.log(error);
      }
    }
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
          <form className="flex flex-col" onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="outline-blue-500 border border-gray-800 text-lg rounded-full px-4 py-3 my-2 font-semibold"
                />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  className="outline-blue-500 border border-gray-800 text-lg rounded-full px-4 py-3 my-2 font-semibold"
                />
              </>
            )}

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="outline-blue-500 border border-gray-800 text-lg rounded-full px-4 py-3 my-2 font-semibold"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
