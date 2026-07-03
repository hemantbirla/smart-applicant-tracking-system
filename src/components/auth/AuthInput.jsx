const AuthInput = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
}) => {
  return (
    <div className="auth-input-group">
      <label htmlFor={name} className="auth-label">
        {label}
      </label>

      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className="auth-input"
        {...register(name)}
      />

      {error && (
        <small className="auth-error">
          {error.message}
        </small>
      )}
    </div>
  );
};

export default AuthInput;