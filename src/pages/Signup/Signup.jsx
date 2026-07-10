import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import AuthCard from "../../components/auth/AuthCard";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";

import { signupSchema } from "../../constants/validationSchemas";

import useAuth from "../../hooks/useAuth";

import "../../styles/auth.css";

const Signup = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data) => {
    console.log("Signup Data:", data);

    // Fake token until backend
    const fakeToken = "fake-access-token";

    login(fakeToken);

    toast.success("Registration Successful");

    setTimeout(() => {
      navigate("/dashboard");
    }, 800);
  };

  return (
    <div className="auth-container">
      <AuthCard title="Create Account" subtitle="Sign up to get started.">
        <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
          <AuthInput
            label="Full Name"
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            register={register}
            error={errors.fullName}
          />

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

          <AuthInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            register={register}
            error={errors.confirmPassword}
          />

          <AuthButton type="submit">Register</AuthButton>

          <p className="auth-footer">
            Already have an account?{" "}
            <Link to="/login" className="auth-link">
              Login
            </Link>
          </p>
        </form>
      </AuthCard>
    </div>
  );
};

export default Signup;
