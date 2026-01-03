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
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-800 p-8 rounded-xl w-[360px]"
      >
        <h1 className="text-white text-2xl mb-4 text-center">
          Create Account
        </h1>

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-2 p-3 rounded bg-slate-700 text-white"
          {...register("name", {
            required: "Name required",
            minLength: { value: 3, message: "Min 3 characters" },
          })}
        />
        {errors.name && (
          <p className="text-red-400 text-sm">{errors.name.message}</p>
        )}

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-2 p-3 rounded bg-slate-700 text-white"
          {...register("email", { required: "Email required" })}
        />
        {errors.email && (
          <p className="text-red-400 text-sm">{errors.email.message}</p>
        )}

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-2 p-3 rounded bg-slate-700 text-white"
          {...register("password", {
            required: "Password required",
            minLength: { value: 6, message: "Min 6 characters" },
          })}
        />
        {errors.password && (
          <p className="text-red-400 text-sm">{errors.password.message}</p>
        )}

        
        {errors.confirmPassword && (
          <p className="text-red-400 text-sm">
            {errors.confirmPassword.message}
          </p>
        )}

        <NavLink to="/auth/login" className="text-sm text-blue-500 mb-4 block">
          Already have an account? Login
        </NavLink>

        <button
          disabled={isSubmitting}
          className="w-full bg-blue-600 py-3 rounded text-white"
        >
          {isSubmitting ? "Creating account..." : "Register"}
        </button>
      </form>
    </div>
  );
}

export default Register;
