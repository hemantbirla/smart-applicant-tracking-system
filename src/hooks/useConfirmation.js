import { useState } from "react";

const useConfirmation = () => {

  const [open, setOpen] =
    useState(false);

  const show = () => setOpen(true);

  const hide = () => setOpen(false);

  return {
    open,
    show,
    hide,
  };
};

export default useConfirmation;