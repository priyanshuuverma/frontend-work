import React from 'react';
import Layout from '../Component/Layout';
import '../Component/Components.css'
import Diet from './Diet';
import { useNavigate } from 'react-router-dom';
const Homepage = () => {
  const navigate = useNavigate();
  const handlec = () => {
    navigate("/diet");
  }
  const handlereg = () => {
    navigate("/register")
  }
  return (
    <Layout >
      <div className='bg-center bg-cover bg-[url(https://images.pexels.com/photos/15373908/pexels-photo-15373908/free-photo-of-man-weightlifting-at-gym.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] text-black   grid grid-row-2 p-10  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-10'>
      <div className='mt-10 lg:mt-50 ml-1 lg:ml-10 w-70 lg:w-110'>
      <h1 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-blue-500">
      Get Stronger with A.I.
      </h1>
      <h2 className="text-base mb-4 d sm:text-lg md:text-xl lg:text-2xl text-white">
      Fueling AI with Wellness: Curating Smart Datasets for Fitness, Yoga, Nutrition & Mindful Living.Train Smarter AI for a Healthier Tomorrow
      </h2>
      <button onClick={handlereg} type="submit" class="btn mr-5 mb-2 lg:mb-0 bg-white text-black">Get Started</button>
          <button  class="btn bg-white text-black border-[#e5e5e5]">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Login with Google
          </button>
      </div>      
        <div className='pl-2 lg:pl-30 lg:pt-20'>
        <img className='w-1/2 lg:w-90 ' src="https://cdn.prod.website-files.com/5c34b1d990599d63c8b3e892/5ea9c3177f8af205356e7263_fitnessai-screenshot-p-800.png" alt="" />
      </div>
      
        
      </div>
      <div className=' mt-3 ml-3 mr-3  text-black h-full gap-5  bg-white mb-3'>
            <div className='p-10  grid  grid-row-3 lg:grid-cols-5 gap-9 '>
              <img className='w-30' src="https://cdn.prod.website-files.com/5c34b1d990599d63c8b3e892/66df05931d1e28173f6382f6_cnet-p-500.png" alt="" />
              <img className='w-30' src="https://cdn.prod.website-files.com/5c34b1d990599d63c8b3e892/5ea9fc9bdfb4b6212eedf612_Group%203.svg" alt="" />
              <img className='w-30' src="https://cdn.prod.website-files.com/5c34b1d990599d63c8b3e892/66df0732dff57bff0e4bb548_well%2Bgood-p-500.png" alt="" />
              <img className='w-30' src="https://cdn.prod.website-files.com/5c34b1d990599d63c8b3e892/5ea9fcb70e437c67c597b169_Group%202.svg" alt="" />
              <img className='w-30' src="https://cdn.prod.website-files.com/5c34b1d990599d63c8b3e892/5ec2b0ec7bcce322162c297e_Forbes_logo.svg" alt="" />
            </div>
      </div>
      <div className='mt-3 ml-3 mr-3 mb-3 relative h-screen text-black bg-white '>
      <div className="rating absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" defaultChecked />
      </div>
      <h1 className='absolute text-center text-2xl top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <span className='font-bold text-blue-600'>“Progressive overload</span> is a proven concept.<span className='underline bg-yellow-100'> FitnessAI is easy to use and the AI-generated routine gets me out of my headspace</span> and allows me to focus on the task in front of me. I see no need for any other lifting site.” <br/><br/>
      <span className='text-gray-600 text-base'>5-star review from Grifffin10101 on the website  </span>
      </h1>
      <button className="text-white rounded-2xl p-8 btn btn-active btn-accent absolute text-center text-2xl top-120 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Workout Now</button>
      </div>
      <div className='text-center mt-3 mb-3 ml-3 mr-3 bg-white px-5 py-10 '>
        <h1 className='text-2xl lg:5xl nav'><span className='text-blue-700'>Tired of reading long jour</span>nals and confusing guides? Visit our page and <span className='bg-blue-200 text-black font-bold'> get all your diet related </span> doubts cleared—simple, fast, and easy!</h1>  
        <div className="tooltip m-10 " data-tip="Diet Pool">
            <button  onClick={handlec} className="btn bg-amber-500 w-60 mx-auto">Click ME</button>
        </div>
        <div className='mx-auto'>
          <ol className='number text-xl lg:3xl text-left'>
            <li>1️⃣ Personalized Diet Plans.</li>
            <li>2️⃣ Smart FAQ Assistant.</li>
            <li>3️⃣ AI-Powered Diet Planner.</li>
            <li>4️⃣ GPT-Based Virtual Assistance;</li>
          </ol>
        </div>
         <video width="100%" autoPlay loop className="lg:w-1/2 lg:mx-auto my-10 rounded-lg ">
            <source src='https://videos.pexels.com/video-files/854082/854082-sd_640_360_25fps.mp4' type="video/mp4" />
          </video>
        
      </div>
      
    </Layout>
  );
};

export default Homepage;
