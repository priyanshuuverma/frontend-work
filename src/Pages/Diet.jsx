import React, { useEffect, useState } from "react";
import Layout from "../Component/Layout";
import '../Component/Components.css'
import 'react-alice-carousel/lib/alice-carousel.css';
import myvideo from '../assets/Dietrecom.mp4'
const Diet = () => {
    const [selectedMeals, setSelectedMeals] = useState([]);

    const foodItems = [
      { name: "🍚 Rice 1 plate (300g)", calories: 390 },
      { name: "🥣 Pulses 1 bowl (200g)", calories: 300 },
      { name: "🍞 Roti 1 piece", calories: 149 },
      { name: "🥚 Egg 1 piece", calories: 78 },
      { name: "🍪 Biscuit 1 piece", calories: 50 },
      { name: "☕ Tea 1 cup (150ml)", calories: 30 },
      { name: "🍛 Biriyani 1 plate (300g)", calories: 630 },
      { name: "🧀 Paneer 150g", calories: 398 },
      { name: "🥤 Energy Drink 1 cup (250ml)", calories: 113 },
      { name: "🍌 Banana 1 piece", calories: 105 },
      { name: "🥗 Salad 1 bowl (200g)", calories: 100 },
      { name: "🥛 Milk 1 glass (250ml)", calories: 150 },
      { name: "🥬 Spinach 1 bowl (150g)", calories: 35 },
      { name: "🥜 Peanuts 50g", calories: 285 },
      { name: "🥗 Dry Fruits 50g", calories: 325 },
      { name: "🍜 Noodles 1 plate (300g)", calories: 414 },
    ];
  
    const handleCheckboxChange = (index) => {
      setSelectedMeals((prev) =>
        prev.includes(index)
          ? prev.filter((item) => item !== index)
          : [...prev, index]
      );
    };
  
    const calculateTotalCalories = () => {
      return selectedMeals.reduce(
        (total, index) => total + foodItems[index].calories,
        0
      );
    };
  
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        fetch("/Data/diet.json")
            .then((res) => res.json())
            .then((data) => setFaqs(data));
    }, []);

    return (
        <>
            <div className="bg-black nav text-white px-7 py-10 lg:text-4xl lg:text-center lg:px-10   ">Get detailed information and <span className="bg-red-100 text-black"> if your question matches then please follow it</span> and click to the question below to continue..</div>
            <div className=" h-full gap-10 bg-white m-0 px-10 py-10 grid grid-row-3 lg:grid-cols-2 lg:px-20 ">
                <div className="space-y-4 ">
                    {faqs.map((faq, idx) => {
                        const modalId = `modal_${idx}`;
                        return (
                            <div key={idx}>
                                <button
                                    className="btn bg-white text-black border-2 py-10 lg:py-5 lg:px-10"
                                    onClick={() =>
                                        document.getElementById(modalId).showModal()
                                    }
                                >
                                    {faq.question}
                                </button>
                                <dialog id={modalId} className="modal">
                                    <div className="modal-box">
                                        <form method="dialog">
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                                ✕
                                            </button>
                                        </form>
                                        <h3 className=" text-lg">{faq.answer}</h3>
                                    </div>
                                </dialog>
                            </div>
                        );
                    })}
                </div>
                <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
                    <div className="carousel-item">
                        <img
                            src="https://img.freepik.com/free-psd/nutrition-still-life-illustration_23-2151734884.jpg?semt=ais_country_boost&w=740"
                            className="rounded-box w-70" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://img.freepik.com/free-photo/top-view-lettuce-with-apple-weight_23-2148262164.jpg?ga=GA1.1.1697140792.1734711011&semt=ais_country_boost&w=740"
                            className="rounded-box w-80" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://img.freepik.com/free-photo/flat-lay-salad-juice-bottle_23-2148262146.jpg?ga=GA1.1.1697140792.1734711011&semt=ais_country_boost&w=740"
                            className="rounded-box w-80" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                            className="rounded-box w-70" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                            className="rounded-box w-70" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                            className="rounded-box w-70" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                            className="rounded-box w-70" />
                    </div></div>
            </div>
            <div className="bg-zinc-900 text-gray-300 w-full h-full">
                <h1 className="text-4xl py-10 px-5 navtext lg:text-6xl lg:py-10 lg:px-10">
                    GET YOUR DIET RECOMMENDANCE USING GEN AI ?
                </h1>
                <video width="100%" autoPlay loop className="lg:w-1/2 lg:mx-auto">
                    <source src={myvideo} type="video/mp4" />
                </video>
                <div className="px-10 py-10 lg:px-20 lg:py-12 text-2xl lg:4xl grid grid-row-2 lg:grid-cols-2 gap-10 lg:gap-5">
                    <h1>Then try this for free!</h1>
                    <a href="https://chat-bot-1-r1lq.onrender.com">
                    <button className="btn w-50 lg:w-90 bg-[#FEE502] text-[#181600] border-[#f1d800]">
                        <svg aria-label="Kakao logo" width="16" height="16" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#181600" d="M255.5 48C299.345 48 339.897 56.5332 377.156 73.5996C414.415 90.666 443.871 113.873 465.522 143.22C487.174 172.566 498 204.577 498 239.252C498 273.926 487.174 305.982 465.522 335.42C443.871 364.857 414.46 388.109 377.291 405.175C340.122 422.241 299.525 430.775 255.5 430.775C241.607 430.775 227.262 429.781 212.467 427.795C148.233 472.402 114.042 494.977 109.892 495.518C107.907 496.241 106.012 496.15 104.208 495.248C103.486 494.706 102.945 493.983 102.584 493.08C102.223 492.177 102.043 491.365 102.043 490.642V489.559C103.126 482.515 111.335 453.169 126.672 401.518C91.8486 384.181 64.1974 361.2 43.7185 332.575C23.2395 303.951 13 272.843 13 239.252C13 204.577 23.8259 172.566 45.4777 143.22C67.1295 113.873 96.5849 90.666 133.844 73.5996C171.103 56.5332 211.655 48 255.5 48Z"></path></svg>
                        Try Now 
                    </button>
                    </a> 
                </div>
            </div>
            <div className="bg-white text-black w-full h-full m-0 px-5 py-10 ">
                <h1 className="underline text-2xl lg:text-5xl lg:text-right font-bold nav"> Count your Calories</h1>
                <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🍽️ Select Your Meals</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {foodItems.map((item, index) => (
          <label
            key={index}
            className="flex items-center p-2 bg-white border rounded-lg shadow-sm cursor-pointer hover:bg-gray-100"
          >
            <input
              type="checkbox"
              checked={selectedMeals.includes(index)}
              onChange={() => handleCheckboxChange(index)}
              className="mr-3 w-5 h-5"
            />
            <span className="text-lg">{item.name}</span>
          </label>
        ))}
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">📝 Selected Meals Summary</h2>

        {selectedMeals.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-md shadow-md">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="px-4 py-2">Meal</th>
                  <th className="px-4 py-2">Calories</th>
                </tr>
              </thead>
              <tbody>
                {selectedMeals.map((index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2">{foodItems[index].name}</td>
                    <td className="px-4 py-2">{foodItems[index].calories}</td>
                  </tr>
                ))}
                <tr className="font-bold bg-gray-100">
                  <td className="px-4 py-2">Total Calories</td>
                  <td className="px-4 py-2">{calculateTotalCalories()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-600">No meals selected yet.</p>
        )}
      </div>
    </div>
            </div>
            <div className="bg-black text-white w-full h-full px-10 py-10">
                <h1 className="text-2xl lg:text-5xl   text-white">
                !! Still have doubts and worried about your diet plan?<span className="text-blue-400 mt-3 ">Talk to our personalized GPT for free!</span> 
                </h1>
                <button className="btn mt-10 bg-[#5d5c5c] text-white white-[#4eaa0c]">
  <svg aria-label="WeChat logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="white"><path d="M11.606,3.068C5.031,3.068,0,7.529,0,12.393s4.344,7.681,4.344,7.681l-.706,2.676c-.093,.353,.284,.644,.602,.464l3.173-1.798c1.403,.447,4.381,.59,4.671,.603-.208-.721-.311-1.432-.311-2.095,0-3.754,3.268-9.04,10.532-9.04,.165,0,.331,.004,.496,.011-.965-4.627-5.769-7.827-11.195-7.827Zm-4.327,7.748c-.797,0-1.442-.646-1.442-1.442s.646-1.442,1.442-1.442,1.442,.646,1.442,1.442-.646,1.442-1.442,1.442Zm8.386,0c-.797,0-1.442-.646-1.442-1.442s.646-1.442,1.442-1.442,1.442,.646,1.442,1.442-.646,1.442-1.442,1.442Z"></path><path d="M32,19.336c0-4.26-4.998-7.379-9.694-7.379-6.642,0-9.459,4.797-9.459,7.966s2.818,7.966,9.459,7.966c1.469,0,2.762-.211,3.886-.584l2.498,1.585c.197,.125,.447-.052,.394-.279l-.567-2.46c2.36-1.643,3.483-4.234,3.483-6.815Zm-12.73-.81c-.704,0-1.275-.571-1.275-1.275s.571-1.275,1.275-1.275,1.275,.571,1.275,1.275c0,.705-.571,1.275-1.275,1.275Zm6.373,0c-.704,0-1.275-.571-1.275-1.275s.571-1.275,1.275-1.275,1.275,.571,1.275,1.275-.571,1.275-1.275,1.275Z"></path></g></svg>
  Login To Talk to GPT
</button>

            </div>

        </>
    );
};

export default Diet;
