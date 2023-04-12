import { createTheme } from "@mui/material/styles";

import { palette } from "./palette";
import { typography } from "./typography";
import { general } from "./general";

const initTheme = {
  ...general,
  palette,
  typography,
};

export const theme = createTheme(initTheme);
