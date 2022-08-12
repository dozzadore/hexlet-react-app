import React from 'react';
import './dropdownlist.css';
import { Link } from 'react-router-dom';


export default function Dropdownlist() {
    return (
        <div className="dropdown">
            <div className="dropbtn">Dropdown</div>
            <div className="dropdown-content">
                <Link to="/equipment/brands" style={{
                    textDecoration: "none",
                    color: "black",
                    }}
                    >Brands
                </Link>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
      
    );
  }