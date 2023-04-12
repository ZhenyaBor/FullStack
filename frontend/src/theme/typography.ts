const FONT_PRIMARY = "Mulish, sans-serif";

export const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  fontWeightExtraBold: 800,
  h1: {
    fontWeight: 800,
    lineHeight: 64 / 48,
    fontSize: 48,
  },
  h2: {
    fontWeight: 700,
    lineHeight: 44 / 36,
    fontSize: 36,
  },
  h3: {
    fontWeight: 800,
    fontSize: 28,
    lineHeight: 30 / 24,
  },
  h4: {
    fontWeight: 400,
    lineHeight: 24 / 20,
    fontSize: 20,
  },
  h5: {
    fontWeight: 700,
    lineHeight: 28 / 16,
    fontSize: 16,
  },
  h6: {
    fontWeight: 400,
    lineHeight: 20 / 16,
    fontSize: 16,
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 16 / 14,
    fontSize: 14,
  },
  subtitle2: {
    fontWeight: 400,
    lineHeight: 16 / 13,
    fontSize: 13,
  },
  subtitle3: {
    fontWeight: 400,
    lineHeight: 16 / 12,
    fontSize: 12,
  },
  body1: { fontWeight: 400, lineHeight: 24 / 16, fontSize: 16 },
  body2: { fontWeight: 400, lineHeight: 16 / 10, fontSize: 10 },
  caption: {},
  overline: {},
  button: { fontWeight: 600, lineHeight: 16 / 14, fontSize: 14 },
  test: {
    color: "#3A3C49",
    fontWeight: 600,
    lineHeight: 14,
    fontSize: 1,
  },
};

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    fontWeightRegular: true;
    fontWeightSemiBold: true;
    fontWeightBold: true;
    fontWeightExtraBold: true;
    subtitle3: true;
  }
}
