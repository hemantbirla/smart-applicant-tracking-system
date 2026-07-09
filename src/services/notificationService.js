import { toast } from "react-toastify";

export const showSuccess = (message) => {
  toast.success(message);
};

export const showError = (message) => {
  toast.error(message);
};

export const showWarning = (message) => {
  toast.warning(message);
};

export const showInfo = (message) => {
  toast.info(message);
};

/*
Promise Notifications
*/

export const showPromise = (
  promise,
  loading,
  success,
  error
) => {
  return toast.promise(promise, {
    pending: loading,
    success,
    error,
  });
};