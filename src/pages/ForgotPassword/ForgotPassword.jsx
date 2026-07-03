import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer } from "react-toastify";

import AuthCard from "../../components/auth/AuthCard";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";

import { forgotPasswordSchema } from "../../constants/validationSchemas";

import "../../styles/auth.css";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const onSubmit = (data) => {
    // API Integration will be added later
    console.log("Forgot Password Data:", data);
  };

  return (
    <>
      <div className="auth-container">
        <AuthCard
          title="Forgot Password"
          subtitle="Enter your email to receive a password reset link."
        >
          <form
            className="auth-form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <AuthInput
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
              register={register}
              error={errors.email}
            />

            <AuthButton type="submit">Send Reset Link</AuthButton>

            <p className="auth-footer">
              Remember your password?{" "}
              <Link to="/login" className="auth-link">
                Back to Login
              </Link>
            </p>
          </form>
        </AuthCard>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default ForgotPassword;
