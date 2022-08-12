import React from 'react';
import './dropdownmenu.css';
import { Link } from 'react-router-dom';

  class DropdownMenu extends React.Component {
      state = {
        open: false
    }
    handleClick = () => {
        this.setState({ open: !this.state.open });
    }
    render () {
        const { open } = this.state;
        return (
          <div className="link">
            <span onMouseEnter={this.handleClick} onMouseLeave={!this.handleClick}>Equipment</span>
          <div className={`menu ${open ? 'open' : ''}`}>
            <ul>
              <li>
              <Link to="/equipment/brands" style={{
          textDecoration: "none",
          color: "black",
        }}
        >Brands</Link>
              </li>
              <li>Test 2</li>
              <li>Test 3</li>
            </ul>
          </div>
          </div>
      )
    }
  }
  
  export default DropdownMenu;