import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/features/auth";
import { loginUser } from "../../api/mediaApi";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
  try {
    const res = await loginUser(data);

    console.log("LOGIN RESPONSE:", res.data);

    const { user, token } = res.data || {};

    if (!token || !user) {
      throw new Error("Invalid login response");
    }

    dispatch(
      setLogin({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token,
      })
    );

    navigate("/");

  } catch (err) {
    console.error("LOGIN ERROR:", err);
    alert(
      err.response?.data?.message ||
      err.message ||
      "Login failed"
    );
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
      Log in to your account
    </h1>
    <p className="text-gray-500 text-center mb-6">
      Welcome back! Please enter your details.
    </p>

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
        placeholder="Password"
        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        {...register("password", { required: "Password required" })}
      />
      {errors.password && (
        <p className="text-red-500 text-xs mt-1">
          {errors.password.message}
        </p>
      )}
    </div>

    {/* Remember / Forgot */}
    <div className="flex items-center justify-between text-sm mb-6">
      <label className="flex items-center gap-2">
        <input type="checkbox" />
        Remember me
      </label>

      <NavLink to="/forgot-password" className="underline">
        Forgot password
      </NavLink>
    </div>

    {/* Button */}
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full bg-black text-white py-2 rounded-md hover:opacity-90 disabled:opacity-60"
    >
      {isSubmitting ? "Logging in..." : "Sign in"}
    </button>

    {/* Register */}
    <p className="text-center text-sm mt-6 text-gray-600">
      Don’t have an account?{" "}
      <NavLink to="/auth/register" className="underline font-medium">
        Sign up
      </NavLink>
    </p>
  </form>
</div>
 );
}

export default Login;
