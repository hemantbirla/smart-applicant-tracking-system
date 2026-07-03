import * as yup from "yup";
import { validationMessages } from "./validationMessages";

// ----------------------
// Login Schema
// ----------------------
export const loginSchema = yup.object({
  email: yup
    .string()
    .trim()
    .required(validationMessages.email.required)
    .email(validationMessages.email.invalid),

  password: yup
    .string()
    .required(validationMessages.password.required)
    .min(8, validationMessages.password.min),
});

// ----------------------
// Signup Schema
// ----------------------
export const signupSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .required(validationMessages.fullName.required),

  email: yup
    .string()
    .trim()
    .required(validationMessages.email.required)
    .email(validationMessages.email.invalid),

  password: yup
    .string()
    .required(validationMessages.password.required)
    .min(8, validationMessages.password.min),

  confirmPassword: yup
    .string()
    .required(validationMessages.confirmPassword.required)
    .oneOf(
      [yup.ref("password")],
      validationMessages.confirmPassword.match
    ),
});

// ----------------------
// Forgot Password Schema
// ----------------------
export const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .trim()
    .required(validationMessages.email.required)
    .email(validationMessages.email.invalid),
});

// ----------------------
// Reset Password Schema
// ----------------------
export const resetPasswordSchema = yup.object({
  password: yup
    .string()
    .required(validationMessages.password.required)
    .min(8, validationMessages.password.min),

  confirmPassword: yup
    .string()
    .required(validationMessages.confirmPassword.required)
    .oneOf(
      [yup.ref("password")],
      validationMessages.confirmPassword.match
    ),
});