import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from '../../Context/AuthContext';

const Register = () => {

  const { createUser } = useContext(AuthContext);

  

    const handleregister = e =>
    {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // console.log(name,email,password)

  //       createUserWithEmailAndPassword (auth, email,password)
  //       .then((result) => {
 
  //   console.log(result)
  
  // })
  // .catch((error) => {
  //  console.log(error)
  // });

  createUser(email,password)
  .then((result) => { 
console.log(result)
    })
    .catch((error) => {
     console.log(error)
    });
  }
  return (
    <div>
      <div className="max-w-md w-full mx-auto mt-16 p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h1 className="text-3xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Please Register 
        </h1>
        <form onSubmit={handleregister}className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text" name="name"
              placeholder="enter your name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none transition"
            />
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email" name="email"
              placeholder="enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password" name="password"
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
            Register
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600 dark:text-gray-400">
         Already have an account? please  {" "}

           <Link
            className="text-blue-700 dark:text-blue-400 font-medium hover:underline"
            to="/register"
          >
            login
          </Link>
          
        </p>
      </div>
    </div>
  );
};

export default Register;
