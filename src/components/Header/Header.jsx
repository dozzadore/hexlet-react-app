
import React, {Component} from 'react';
import './header.css';
import { Link } from "react-router-dom";


class Header extends Component{
  render() {

  return (
    <div className="Header">
      <div className="headerUp">
        <p>Your info</p>
        </div>
      <div className="headerDown">
      <nav>
      <Link to="/" style={{
          textDecoration: "none",
          color: "black",
          marginLeft: "20px",
        }}
        >Home</Link>
        <Link to="/contacts" style={{
          textDecoration: "none",
          color: "black",
          marginLeft: "20px",
        }}
        >Invoices</Link>
        <Link to="/equipment" style={{
          textDecoration: "none",
          color: "black",
          marginLeft: "20px",
        }}>Expenses</Link>
        
      </nav>
      <div className='inputSearch'>
          <input type="text" />
        </div>
      </div>
    </div>
  );
}
}
  export default Header;