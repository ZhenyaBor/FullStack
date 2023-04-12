export const general = {
  spacing: 4,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      sm750: 750,
      md: 1000,
      lg: 1200,
      lg1465: 1465,
      xl: 1536,
      xl1584: 1584,
      xl1700: 1700,
      xl1920: 1920,
    },
  },
};

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    sm750: true;
    md: true;
    lg: true;
    lg1465: true;
    xl: true;
    xl1584: true;
    xl1700: true;
    xl1920: true;
  }
}
