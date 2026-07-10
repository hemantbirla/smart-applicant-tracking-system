import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, ToastContainer } from "react-toastify";

import AuthCard from "../../components/auth/AuthCard";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";

import { loginSchema } from "../../constants/validationSchemas";

import useAuth from "../../hooks/useAuth";

import "../../styles/auth.css";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Login Data:", data);

    // Fake token (until backend integration)
    const fakeToken = "fake-access-token";

    login(fakeToken);

    toast.success("Login Successful");

    setTimeout(() => {
      navigate("/dashboard");
    }, 800);
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="auth-container">
        <AuthCard title="Welcome Back" subtitle="Login to your account">
          <form
            className="auth-form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <AuthInput
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              register={register}
              error={errors.email}
            />

            <AuthInput
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              register={register}
              error={errors.password}
            />

            <div className="auth-options">
              <label className="auth-checkbox">
                <input type="checkbox" {...register("remember")} />
                <span>Remember Me</span>
              </label>

              <Link to="/forgot-password" className="auth-link">
                Forgot Password?
              </Link>
            </div>

            <AuthButton type="submit">Login</AuthButton>

            <p className="auth-footer">
              Don't have an account?{" "}
              <Link to="/signup" className="auth-link">
                Sign Up
              </Link>
            </p>
          </form>
        </AuthCard>
      </div>
    </>
  );
};

export default Login;
