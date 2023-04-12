import { green } from "@mui/material/colors";

export const palette = {
  primary: {
    light: "#FF81AE",
    main: "#F2387B",
    dark: "#F2387B",
    contrastText: "#fff",
  },
  secondary: {
    main: "#f44336",
  },
  warning: {
    main: "#ffc071",
    dark: "#ffb25e",
  },
  error: {
    light: "#FF0000",
    main: "#FF0000",
    dark: "#FF0000",
  },
  success: {
    light: green[50],
    main: green[500],
    dark: green[700],
  },
  bodyBackground: {
    main: "#F5F5F8",
  },
  white: {
    main: "#ffffff",
  },
  green: {
    main: "#65B472",
  },
  checkbox: {
    main: "#8B8EC2",
  },
  status: {
    mandatory: "#F2387B",
    recommended: "#65B472",
    optional: "#BA9EDE",
  },
  grey: {
    50: "#F9FAFC",
    100: "#E3E5ED",
    200: "#D6D8E3",
    300: "#C1C5D5",
    400: "#ADB1C7",
    500: "#989EB9",
    600: "#7D8299",
    700: "#626679",
    800: "#3A3C49",
    900: "#23252D",
  },
};

declare module "@mui/material/styles" {
  interface Palette {
    bodyBackground: Palette["primary"];
    white: Palette["primary"];
    checkbox: Palette["primary"];
    status: Palette["primary"];
  }
  interface PaletteOptions {
    bodyBackground: PaletteOptions["primary"];
  }
}
