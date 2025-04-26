import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaGoogle, FaInstagram, FaUser, FaLock, FaEnvelope } from 'react-icons/fa';

const User = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className=" bg-gray-50 flex items-center justify-center p-4">
      {/* Main Container */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-xl">
        
        {/* Left Panel (Login) / Right Panel (Signup) */}
        <motion.div 
          initial={false}
          animate={{ 
            order: isLogin ? 0 : 1,
            backgroundColor: isLogin ? 'rgba(251, 146, 60, 0.9)' : 'rgba(112, 68, 207, 0.9)'
          }}
          transition={{ duration: 0.5 }}
          className={`flex-1 p-8 md:p-12 flex flex-col justify-center ${isLogin ? 'bg-orange-400' : 'bg-[#7044CF]'}`}
        >
          <motion.div
            key={isLogin ? 'login-welcome' : 'signup-welcome'}
            initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <h1 className="text-4xl font-bold mb-4">
              {isLogin ? 'Welcome Back!' : 'Join Us Today!'}
            </h1>
            <p className="text-lg mb-8">
              {isLogin ? 'Login to access your account and continue your journey with us.' : 'Create an account to get started and explore our services.'}
            </p>
            <div className="flex space-x-4">
              <motion.div whileHover={{ y: -5 }} className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <FaFacebook className="text-xl" />
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <FaGoogle className="text-xl" />
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <FaInstagram className="text-xl" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Panel (Login) / Left Panel (Signup) */}
        <div className="flex-1 bg-white p-8 md:p-12 flex flex-col justify-center">
          <motion.div
            key={isLogin ? 'login-form' : 'signup-form'}
            initial={{ opacity: 0, x: isLogin ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              {isLogin ? 'Login' : 'Sign Up'}
            </h2>

            {/* Form */}
            <form className="space-y-6">
              {!isLogin && (
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className={`text-lg ${isLogin ? 'text-orange-400' : 'text-[#7044CF]'}`} />
                  </div>
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
              )}

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className={`text-lg ${isLogin ? 'text-orange-400' : 'text-[#7044CF]'}`} />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className={`text-lg ${isLogin ? 'text-orange-400' : 'text-[#7044CF]'}`} />
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className={`w-full py-3 px-4 rounded-lg text-white font-medium ${isLogin ? 'bg-orange-400 hover:bg-orange-500' : 'bg-[#7044CF] hover:bg-[#5d3ab5]'}`}
              >
                {isLogin ? 'Login' : 'Sign Up'}
              </motion.button>
            </form>

            {/* Social Login */}
            <div className="mt-8">
              <div className="flex items-center mb-4">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="px-4 text-gray-500">or continue with</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>
              <div className="flex justify-center space-x-4">
                <motion.button
                  whileHover={{ y: -3 }}
                  type="button"
                  className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center"
                >
                  <FaFacebook className="text-blue-600 text-xl" />
                </motion.button>
                <motion.button
                  whileHover={{ y: -3 }}
                  type="button"
                  className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center"
                >
                  <FaGoogle className="text-red-500 text-xl" />
                </motion.button>
                <motion.button
                  whileHover={{ y: -3 }}
                  type="button"
                  className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center"
                >
                  <FaInstagram className="text-pink-600 text-xl" />
                </motion.button>
              </div>
            </div>

            {/* Toggle Auth Mode */}
            <div className="mt-8 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className={`font-medium ${isLogin ? 'text-[#7044CF]' : 'text-orange-400'}`}
              >
                {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default User;