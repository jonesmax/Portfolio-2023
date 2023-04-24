import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import { Route, Link, Routes, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./theme";
import "./App.css";

import Home from "./Components/Home";


import { styled } from "@mui/material/styles";

function App() {
  const navigate = useNavigate();

  const initialState = {};

  const reducer = (state, newState) => ({ ...state, ...newState });
  const [state, setState] = useReducer(reducer, initialState);
  const [open, setOpen] = React.useState(true);

  return (



    
           <Home />
   

  );
}

export default App;
