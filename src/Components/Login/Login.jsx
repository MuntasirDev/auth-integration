import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div>
      <div className="max-w-md w-full mx-auto mt-16 p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h1 className="text-3xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Log In Now!
        </h1>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none transition"
            />
          </div>
          <div className="flex justify-between text-sm">
            <a className="text-blue-600 dark:text-blue-400 hover:underline">
              Forgot password?
            </a>
          </div>
          <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-md transition">
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600 dark:text-gray-400">
          New here?{" "}
          <Link
            className="text-blue-700 dark:text-blue-400 font-medium hover:underline"
            to="/register"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
