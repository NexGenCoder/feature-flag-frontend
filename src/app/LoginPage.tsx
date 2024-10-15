'use client';

import React from 'react';
import { User, Lock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const LoginPage: React.FC = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-purple-700 to-indigo-900">
      <div className="m-auto bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-4xl font-bold mb-8 text-center text-indigo-800">Welcome Back!</h1>
        
        <form className="space-y-6">
          <div className="relative">
            <User className="absolute top-3 left-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Username"
              className="w-full pl-10 pr-4 py-2 border-2 border-indigo-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
          
          <div className="relative">
            <Lock className="absolute top-3 left-3 text-gray-400" size={20} />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2 border-2 border-indigo-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
          >
            <span>Login</span>
            <ArrowRight className="ml-2" size={20} />
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <Link href="/forgot-password" className="text-indigo-600 hover:text-indigo-800 transition-colors">
            Forgot password?
          </Link>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600">Don't have an account?</p>
          <Link href="/signup" className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors">
            Sign up now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;