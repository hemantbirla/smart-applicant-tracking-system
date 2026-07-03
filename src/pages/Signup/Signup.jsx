import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../../constants/validationSchemas";
import AuthCard from "../../components/auth/AuthCard";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";
import "../../styles/auth.css";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
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
