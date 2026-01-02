import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setRegister } from "../../redux/features/auth";

function Register() {

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    console.log("Register Data:", data);
    dispatch(setRegister(data));  
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="w-full max-w-md bg-slate-800 p-8 rounded-2xl shadow-xl">

        <h1 className="text-3xl font-semibold text-center text-white mb-6">
          Create Account
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-1 px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
          />
          {errors.name && (
            <p className="text-red-400 text-sm mb-3">
              {errors.name.message}
            </p>
          )}

          {/* Email */}
          <input
            type="email"
            placeholder="Email address"
            className="w-full mb-1 px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mb-3">
              {errors.email.message}
            </p>
          )}

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-1 px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters required",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-400 text-sm mb-3">
              {errors.password.message}
            </p>
          )}

          
          {errors.confirmPassword && (
            <p className="text-red-400 text-sm mb-4">
              {errors.confirmPassword.message}
            </p>
          )}

          {/* Button */}
          <button
            disabled={isSubmitting}
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-semibold disabled:opacity-60"
          >
            {isSubmitting ? "Creating account..." : "Register"}
          </button>
        </form>

        <p className="text-sm text-gray-400 text-center mt-4">
          Already have an account?{" "}
          <span className="text-blue-400 cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
