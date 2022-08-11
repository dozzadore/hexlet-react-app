import React from "react"
import ReactDOM from 'react-dom';
import "./index.css"
import App from "./App"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Contacts from "./components/Header/Menu/Contacts";
import Equipment from "./components/Header/Menu/Equipment";
import Home from "./components/Header/Menu/Home";


const root = ReactDOM.createRoot(
document.getElementById("root")
  );

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home/>} />
        <Route path="contacts" element={<Contacts/>} />
        <Route path="equipment" element={<Equipment />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
