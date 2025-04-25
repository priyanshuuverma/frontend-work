import React, { useEffect, useState } from "react";
import Layout from "../Component/Layout";

const Register = () => {
  const fulltext = "Hello !! Get Yourself Register here...";
  const [txt, setTxt] = useState("");
  const [idx, SetIdx] = useState(0);
  useEffect(() => {
    if (idx < fulltext.length) {
      const timeOut = setTimeout(() => {
        setTxt((prev) => prev + fulltext[idx]);
        SetIdx(idx + 1);
      }, 100);
      return () => clearTimeout(timeOut);
    }
  }, [idx]);
  return (
    <Layout>
      <div className="w-full h-full text-white font-bold bg-black justify-center mx-auto ">
        <h1 className="text-center text-3xl lg:text-5xl py-10 nav1">
          {txt} <span className="inline-block w-[1ch] animate-bounce">|</span>
        </h1>
        <div className=" nav w-full bg-[url(https://img.freepik.com/free-photo/modern-urban-gym_23-2151917990.jpg?ga=GA1.1.1697140792.1734711011&semt=ais_hybrid&w=740)] h-full bg-cover bg-center grid lg:grid-cols-1 lg:justify-center text-white ">
          <div className="bg-white text-black rounded-xl   my-10 mx-auto lg:px-0 lg:pl-30 px-10 py-10 ">
            <form action="/register" method="POST">
              <input
                type="input"
                className="input validator rounded-xl bg-white mb-5"
                required
                placeholder="Enter Your Name"
              />
              <br />
              <input
                className="bg-white rounded-xl input validator mb-5"
                type="email"
                required
                placeholder="mail@gmail.com"
              />
              <input
                type="tel"
                className="input validator tabular-nums  rounded-xl bg-white"
                required
                placeholder="Enter Your Phone Number"
                pattern="[0-9]*"
                minlength="10"
                maxlength="10"
                title="Must be 10 digits"
              />
              <p className="validator-hint  rounded-xl ">Must be 10 digits</p>
              <input
                type="number"
                className=" bg-white rounded-xl input validator"
                required
                placeholder="Age "
                min="13"
                max="100"
                title="Must be between be 13 to 100"
              />
              <p className="validator-hint">Must be between be 13 to 100</p>
              <input
                type="number"
                className=" bg-white rounded-xl input validator"
                required
                placeholder="Height in CM "
                min="100"
                max="250"
                title="Must be between be 100 to 250"
              />
              <p className="validator-hint">Must be between be 100 t 250</p>
              <select
                className=" bg-white rounded-xl  select validator"
                required
              >
                <option disabled selected value="">
                  Gender:
                </option>
                <option>Men</option>
                <option>Women</option>
                <option>Prefer not to say</option>
              </select>
              <p className="validator-hint">Required</p>
              <input
                type="number"
                className=" bg-white rounded-xl input validator"
                required
                placeholder="Weight in Kg "
                min="30"
                max="300"
                title="Must be between be 13 to 100"
              />
              <p className="validator-hint">Must be between be 30 to 300</p>
              <input
                type="password"
                className=" rounded-xl input validatobg-black"
                required
                placeholder="Password"
                minlength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              />
              <p className="rounded-xl validator-hint">
                Must be more than 8 characters, including
                <br />
                At least one number
                <br />
                At least one lowercase letter
                <br />
                At least one uppercase letter
              </p>
              <form action="/verify" method="POST">
              <div className="g-recaptcha" data-sitekey="6Lcq3RMrAAAAABdbW1uYIoMD1VZN_l4gsYj4hZV5"></div>             
              <script src="https://www.google.com/recaptcha/api.js" async defer></script>
              <button className="btn bg-blue-400 mt-5 border-0 outline-0 text-xl" type="submit">
                Submit form
              </button>
              </form>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
