import React from 'react'
import {useNavigate} from 'react-router-dom'
import Layout from '../Component/Layout'
const Login = () => {
  const navigate = useNavigate();
  const  reg = () => {
    navigate('/register');
  }
  return (
    <Layout>
      <section className="min-h-screen bg-gray-200 flex items-center justify-center">
  <div className="container mx-auto p-6">
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white rounded-3xl shadow-lg flex flex-col lg:flex-row w-full max-w-5xl overflow-hidden">
        {/* Left side form */}
        <div className="w-full lg:w-1/2 p-10">
          <div className="text-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
              alt="logo"
              className="w-44 mx-auto"
            />
            <h4 className="mt-4 mb-8 text-xl font-semibold text-gray-700">
              We are The Lotus Team
            </h4>
          </div>

          <form>
            <p className="text-gray-600 mb-4">Please login to your account</p>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder=" email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="text-center mb-5">
              <button
                type="button"
                className="w-full bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 text-white py-2 rounded-md shadow-md hover:opacity-90 transition duration-300"
              >
                Log in
              </button>
              <a href="#!" className="text-sm text-gray-500 hover:underline mt-2 inline-block">
                Forgot password?
              </a>
            </div>

            <div className="flex items-center justify-center mt-6">
              <p className="text-sm mr-2">Don't have an account?</p>
              <button
                onClick={reg}
                type="button"
                className="text-red-500 border border-red-500 hover:bg-red-50 px-4 py-1 rounded-md transition"
              >
                Create new
              </button>
            </div>
          </form>
        </div>

        {/* Right side gradient info */}
        <div className="w-full lg:w-1/2 bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 text-white p-10 flex flex-col justify-center rounded-br-3xl rounded-tr-3xl">
          <h4 className="text-2xl font-semibold mb-4">We are more than just a Guide</h4>
          <p className="text-sm">
          FitnessAI is a cutting-edge fitness platform that leverages artificial intelligence to deliver hyper-personalized workout and wellness experiences. Designed for users of all levels—beginners to athletes—it adapts and evolves based on your goals, performance, and progress.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </Layout>
  )
}

export default Login