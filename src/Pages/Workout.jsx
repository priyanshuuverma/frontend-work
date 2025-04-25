import React from 'react'
import Layout from '../Component/Layout'
import { useNavigate } from 'react-router-dom'

const Workout = () => {
  const navigate = useNavigate();
  const hwork = () => {
    navigate("/workout/Home-workout");
  }
  const gwork = () => {
    navigate("/workout/Gym-workout");
  }
  return (
    
    <div className=' mx-auto '>
      <div className=' rounded-lg lg:w-1/2 p-10 gap-20 grid grid-row-2 lg:grid-cols-2 mx-auto  lg:my-30'>
      <div className='rounded-xl bg-white p-2  grayscale-100 hover:grayscale-0 hover:bg-pink-500'>
        <img className='rounded-xl  mb-5  ' src="https://images.pexels.com/photos/4498456/pexels-photo-4498456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <button onClick={hwork} className="btn btn-ghost">At-home workout</button>
      </div>
      <div className='rounded-xl bg-white p-2  grayscale-100 hover:grayscale-0 hover:bg-blue-500'>
        <img className='rounded-xl  mb-5  ' src="https://img.freepik.com/free-photo/view-gym-room-training-sports_23-2151699497.jpg?semt=ais_hybrid&w=740" alt="" />
        <button onClick={gwork} className="btn btn-ghost">At-Gym workout</button>
      </div>
      </div>
    </div>
 
  )
}

export default Workout