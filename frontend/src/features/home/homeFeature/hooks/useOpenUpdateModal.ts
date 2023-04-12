import { useState } from "react";

type Return = {
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  open: boolean;
};

export const useOpenUpdateModal = (): Return => {
  const [open, setOpen] = useState(false);

  return {
    open,
    handleOpenModal: () => setOpen(true),
    handleCloseModal: () => setOpen(false),
  };
};
