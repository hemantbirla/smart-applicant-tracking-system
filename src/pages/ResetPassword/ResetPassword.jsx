import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import AuthCard from "../../components/auth/AuthCard";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";

import { resetPasswordSchema } from "../../constants/validationSchemas";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
  });

  const onSubmit = (data) => {
    console.log(data);

    // API integration will be added later
    toast.success("Ready for Reset Password API Integration");
  };

  return (
    <div className="auth-container">
      <AuthCard
        title="Reset Password"
        subtitle="Create a new password for your account."
      >
        <form
          className="auth-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <AuthInput
            label="New Password"
            type="password"
            name="password"
            placeholder="Enter new password"
            register={register}
            error={errors.password}
          />

          <AuthInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            placeholder="Confirm new password"
            register={register}
            error={errors.confirmPassword}
          />

          <AuthButton type="submit">
  Reset Password
</AuthButton>

          <p className="auth-footer">
            Remember your password?{" "}
            <Link to="/login" className="auth-link">
              Login
            </Link>
          </p>
        </form>
      </AuthCard>
    </div>
  );
};

export default ResetPassword;
