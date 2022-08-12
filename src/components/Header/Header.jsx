
import React, {Component} from 'react';
import './header.css';
import { Link } from "react-router-dom";
import DropdownList from './DropdownMenu/dropDownList';



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
        
        }}
        >Home</Link>

      <Link to="/contacts" style={{
          textDecoration: "none",
          color: "black",
         
        }}
        >Contacts</Link>
      
        <DropdownList />
        
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