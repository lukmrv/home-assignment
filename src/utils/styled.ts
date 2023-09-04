import baseStyled from "styled-components";

export const theme = {
  color: {
    "grey.200": "#E4E6E8",
    "grey.800": "#54585C",
    "blue.50": "#E3F2FD",
    "blue.600": "#1E88E5",
    white: "white",
    black: "black",
  },
  fontWeight: {
    thin: 200,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  gap: {
    8: "8px",
    16: "16px",
    24: "24px",
  },
  radius: {
    8: "8px",
    16: "16px",
  },
} as const;

export type Theme = typeof theme;
export const styled = baseStyled;
