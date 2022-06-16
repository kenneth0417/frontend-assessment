import React from "react";
import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Cards />
    </ThemeProvider>
  );
}

export default App;
