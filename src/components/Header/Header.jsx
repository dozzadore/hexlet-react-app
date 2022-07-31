import React, {Component} from 'react';
import './header.css';

class Header extends Component {
    render() {
      return (
        <div className="Header">
          <div className="headerUp">Верхний див</div>
          <div className="headerDown">Нижний див</div>
        </div>
      );
    }
  }
  
  export default Header;