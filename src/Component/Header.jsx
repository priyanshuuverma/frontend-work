import React from "react";
import "./Components.css"
import { FcCustomerSupport } from "react-icons/fc";
import { FaRobot } from "react-icons/fa6";
import {useNavigate} from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate();
  const handlelog = () =>{
    navigate("/login")
  }
  const dietlog = () =>{
    navigate('/diet')
  }
  const workoutlog = () => {
    navigate('/workout')
  }
  const askailog = () => {
    navigate("/Gpt")
  }
  const mindCarelog = () =>{
    navigate("/mindcare")
  } 

  return (
    <div className=" navtext  w-full ">
      <div className="navbar bg-black text-white nav  shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu text-black menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 pr-10 shadow"
            >
              <li>
                <a onClick={dietlog}>Diet</a>
              </li>
              <li>
                <a>ASK Gen A.Is</a>
                <ul className="p-2">
                  <li>
                    <a>Ask AI</a>
                  </li>
                  <li onClick={askailog}>
                    <a>Ask Gpt</a>
                  </li>
                </ul>
              </li>
              <li>
                <a onClick={workoutlog}>Workout</a>
              </li>
              <li>
                <a onClick={mindCarelog}> MindCare </a>
              </li>
              <li>
                <a href="https://chatify-ccrf.onrender.com/signup"> Get Trainer</a>
              </li>
            </ul>
          </div>
          <h1 className="pl-3 flex flex-row headertext text-white btn-ghost text-xl"> Fitness<span className="text-blue-400 font-extrabold">AI</span></h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-lg text-zinc-700 menu-horizontal px-1 gap-5 ">
            <li onClick={dietlog} className="hover:text-white cursor-pointer">
              Diet
            </li>
            <li onClick={workoutlog} className="hover:text-white cursor-pointer">
              workout
            </li>
            <li onClick={mindCarelog} className="hover:text-white cursor-pointer">
              MindCare
            </li>
            <li onClick={askailog} className="hover:text-white cursor-pointer">
              Ask Ai
            </li>
            <a href="https://chatify-ccrf.onrender.com/signup">
            <li  className="hover:text-white cursor-pointer">
              Get Trainer
             
            </li>
            </a>
          </ul>
        </div>
        <div className="navbar-end">
          <a onClick={handlelog} className="btn bg-blue-500 outline-0 border-0   lg:w-2/9">Log In</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
