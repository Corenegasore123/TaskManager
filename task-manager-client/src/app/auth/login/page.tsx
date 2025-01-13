'use client';

import React, { useState, FormEvent } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import '@fontsource/poppins';

interface LoginFormData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    console.log('Login attempted with:', formData.email);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Back to Home */}
      <div className="absolute top-6 left-6 z-10">
        <Link href="/" className="group inline-flex items-center text-gray-800 hover:text-purple-600 transition-colors duration-200">
          <div className="bg-white border-2 border-gray-800 group-hover:border-purple-600 rounded-full p-1 mr-2 transition-colors duration-200 shadow-sm">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="font-medium">Back To Home</span>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 p-4 md:p-8 relative z-10">
        {/* Left Side Image */}
        <div className="hidden md:block w-1/2 max-w-lg transform transition-transform duration-500 hover:scale-105">
          <div className="relative">
            <div className="relative bg-white">
              <Image
                src="/auth/auth.png"
                alt="Authentication"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 max-w-md">
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold">
                <span className="text-black">Login To <span className='text-purple1'>Task</span>Manager</span>
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="e.g. min@gmail.com"
                  className="w-full px-4 py-3 border-2 border-borderblue rounded-xl bg-white/50 backdrop-blur-sm focus:outline-none focus:border-borderblue focus:ring-2 focus:ring-borderblue transition-all duration-200"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 border-2 border-borderblue rounded-xl bg-white/50 backdrop-blur-sm focus:outline-none focus:border-borderblue focus:ring-2 focus:ring-borderblue transition-all duration-200"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-600 transition-colors duration-200"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple1 to-purple3 text-white py-3 rounded-xl font-medium 
                         shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 
                         transform hover:-translate-y-0.5 transition-all duration-200
                         disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin mr-2"></div>
                    <span>Logging in...</span>
                  </div>
                ) : (
                  'Login'
                )}
              </button>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">OR</span>
                </div>
              </div>

              {/* Google Login */}
              <button
                type="button"
                className="w-full border-2 border-borderblue bg-white text-gray-700 px-4 py-3 rounded-xl 
                         flex items-center justify-center gap-3
                         hover:border-borderblue hover:bg-purple-50 
                         transform hover:-translate-y-0.5 transition-all duration-200 
                         shadow-sm hover:shadow-md"
              >
                <Image
                  src="/auth/google.png"
                  alt="Google"
                  width={20}
                  height={20}
                />
                <span className="font-medium">Login with Google</span>
              </button>

              {/* Register Link */}
              <p className="text-center text-gray-600 mt-8">
                Don't have an account?{' '}
                <Link 
                  href="/register" 
                  className="text-purple-600 font-medium hover:text-purple-700 hover:underline transition-all duration-200"
                >
                  Register Now
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;