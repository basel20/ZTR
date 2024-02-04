import { createTheme } from "@mui/material";

// we still need to add arabic and english mode because arabic is writen from right to left

export const tokens = () => {
  return {
    primary: {
      100: "#e1dbbe",
      200: "#dcd5b3",
      300: "#d7cfa8",
      400: "#d2c99d",
      500: "#cdc392",
      600: "#b9b083",
      700: "#a49c75",
      800: "#908966",
      900: "#7b7558",
    },

    secondary: {
      50: "#80adad",
      100: "#669c9c",
      200: "#4d8c8c",
      300: "#337b7b",
      400: "#196b6b",
      500: "#005a5a",
      600: "#005151",
      700: "#004848",
      800: "#003f3f",
      900: "#003636",
    },
  };
};

const themeSittings = () => {
  const colors = tokens();

  return {
    palette: {
      primary: {
        main: colors.primary[500],
        light: colors.primary[300],
        dark: colors.primary[800],
      },
      secondary: {
        main: colors.secondary[500],
        light: colors.secondary[300],
        dark: colors.secondary[800],
      },
      text: {
        primary: "#212529",
      },
    },
    typography: {
      fontFamily: ["Bai Jamjuree", " sans-serif"].join(","),
      fontSize: 18,
      h1: {
        fontFamily: ["Bai Jamjuree", " sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Bai Jamjuree", " sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Bai Jamjuree", " sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Bai Jamjuree", " sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Bai Jamjuree", " sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Bai Jamjuree", " sans-serif"].join(","),
        fontSize: 14,
      },
      cardTitle: {
        color: "#FFFFFF",
        fontWeight: 500,
        fontFamily: "Bai Jamjuree",
        fontStyle: "normal",
        fontSize: 34,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1550,
      },
    },
  };
};

const theme = createTheme(themeSittings());

export default theme;
