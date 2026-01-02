import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/features/auth";
import { loginUser } from "../../api/mediaApi";
import { NavLink } from "react-router";

function Login() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await loginUser(data);

      // 🔐 Sensitive data remove + token attach
      const authData = {
        _id: res.user._id,
        name: res.user.name,
        email: res.user.email,
        role: res.user.role,
        token: res.token,
      };

      dispatch(setLogin(authData));

      NavLink("/");

      console.log("Login Success:", authData);
    } catch (err) {
      console.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-800 p-8 rounded-xl w-[350px]"
      >
        <h1 className="text-white text-2xl mb-4 text-center">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-2 p-3 rounded bg-slate-700 text-white"
          {...register("email", { required: "Email required" })}
        />
        {errors.email && (
          <p className="text-red-400 text-sm">{errors.email.message}</p>
        )}

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 rounded bg-slate-700 text-white"
          {...register("password", { required: "Password required" })}
        />
        {errors.password && (
          <p className="text-red-400 text-sm">{errors.password.message}</p>
        )}

        <button
          disabled={isSubmitting}
          className="w-full bg-blue-600 py-3 rounded text-white"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
