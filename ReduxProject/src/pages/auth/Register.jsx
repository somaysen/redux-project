import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setRegister } from "../../redux/features/auth";
import { registerUser } from "../../api/mediaApi";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  // const password = watch("password");

  const onSubmit = async (data) => {
    try {
      const res = await registerUser(data);

      // 🔐 Clean + Secure data
      const authData = {
        _id: res.user._id,
        name: res.user.name,
        email: res.user.email,
        role: res.user.role,
        token: res.token, // agar backend register pe token de raha hai
      };

      dispatch(setRegister(authData));

      console.log("Register Success:", authData);
    } catch (err) {
      console.error(err.response?.data?.message || "Register failed");
    }
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-white">
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="w-full max-w-md p-8"
  >
    

    {/* Heading */}
    <h1 className="text-2xl font-semibold text-center mb-1">
      Create your account
    </h1>
    <p className="text-gray-500 text-center mb-6">
      Please enter your details to get started.
    </p>

    {/* Name */}
    <div className="mb-4">
      <label className="text-sm font-medium">Full Name</label>
      <input
        type="text"
        placeholder="Enter your full name"
        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        {...register("name", {
          required: "Name required",
          minLength: { value: 3, message: "Min 3 characters" },
        })}
      />
      {errors.name && (
        <p className="text-red-500 text-xs mt-1">
          {errors.name.message}
        </p>
      )}
    </div>

    {/* Email */}
    <div className="mb-4">
      <label className="text-sm font-medium">Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        {...register("email", { required: "Email required" })}
      />
      {errors.email && (
        <p className="text-red-500 text-xs mt-1">
          {errors.email.message}
        </p>
      )}
    </div>

    {/* Password */}
    <div className="mb-4">
      <label className="text-sm font-medium">Password</label>
      <input
        type="password"
        placeholder="Create a password"
        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        {...register("password", {
          required: "Password required",
          minLength: { value: 6, message: "Min 6 characters" },
        })}
      />
      {errors.password && (
        <p className="text-red-500 text-xs mt-1">
          {errors.password.message}
        </p>
      )}
    </div>

    {/* Button */}
    <button
      disabled={isSubmitting}
      className="w-full bg-black text-white py-2 rounded-md hover:opacity-90 disabled:opacity-60"
    >
      {isSubmitting ? "Creating account..." : "Register"}
    </button>

    {/* Login link */}
    <p className="text-center text-sm mt-6 text-gray-600">
      Already have an account?{" "}
      <NavLink to="/auth/login" className="underline font-medium">
        Login
      </NavLink>
    </p>
  </form>
</div>
 );
}

export default Register;
