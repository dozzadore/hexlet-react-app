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
import JUCKJKT457A from "./components/Header/Menu/Brands/Juck/JUCKJK-T457A/JUCK JK-T457A";
import Brands from './components/Header/Menu/Brands/Brands';
import Juck from './components/Header/Menu/Brands/Juck/Juck';
import Jack from './components/Header/Menu/Brands/Jack/Jack';
import JACKJK8558GWZ1 from './components/Header/Menu/Brands/Jack/JackJK-8558G-WZ-1/JackJK-8558G-WZ-1';



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
        <Route path="equipment/brands/juck/JUCKJKT457A" element={<JUCKJKT457A />} />
        <Route path="equipment/brands" element={<Brands />} />
        <Route path="equipment/brands/juck" element={<Juck />} />
        <Route path="equipment/brands/jack" element={<Jack />} />
        <Route path="equipment/brands/jack/JACKJK8558GWZ1" element={<JACKJK8558GWZ1 />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
