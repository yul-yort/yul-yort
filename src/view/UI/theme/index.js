import { createTheme } from "@mui/material";

const components = {
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 8,
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        position: "absolute",
        top: 40,
        marginLeft: 0,
        marginTop: 0,
      },
    },
  },
};

const typography = {
  button: {
    textTransform: "none",
  },
};

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#0db2b2",
      light: "#8ad6d6",
      contrastText: "rgba(255, 255, 255, 0.87)",
    },
    secondary: {
      main: "#9c81e8",
    },
    background: {
      default: "#f2f6f6",
    },
  },
  components,
  typography,
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components,
  typography,
});
