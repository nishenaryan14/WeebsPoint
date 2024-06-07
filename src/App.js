import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/Navbar";

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto Slab", "Raleway", sans-serif',
    h1: {
      fontFamily: '"Roboto Slab", serif',
      fontSize: "3rem",
      letterSpacing: "0.9px",
      background:
        "linear-gradient(90deg, rgb(246, 205, 172) 20%, rgba(249, 211, 180, 0) 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      width: "fit-content",
    },
    h3: {
      fontFamily: '"Roboto Slab", serif',
      color: "#000",
      fontSize: "26px",
      fontWeight: "500",
    },
    h3: {
      fontSize: "22px",
      fontFamily: '"Roboto Slab", serif',
      color: "#f9d3b4",
    },
    span: {
      fontFamily: '"Raleway", sans-serif',
      textTransform: "uppercase",
      fontSize: "13px",
      letterSpacing: "2px",
      fontWeight: 500,
      color: "#f0f0f0",
    },
  },
  palette: {
    background: {
      default: "#413266",
      dark: "#001427",
    },
    primary: {
      main: "#f9d3b4",
    },
    secondary: {
      main: "#1f2123",
    },
    text: {
      primary: "#000",
      secondary: "#a1a1a1",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
