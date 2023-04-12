import { useState, ChangeEvent } from "react";

type Return = {
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  handleChangeRowsPerPage: (event: ChangeEvent<HTMLInputElement>) => void;
  page: number;
  rowsPerPage: number;
};

export const usePagination = (): Return => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return { handleChangePage, handleChangeRowsPerPage, page, rowsPerPage };
};