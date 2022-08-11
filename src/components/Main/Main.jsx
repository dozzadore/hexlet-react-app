import React, {Component} from 'react';
import { Outlet } from 'react-router-dom';
import './main.css';


class Main extends Component{
    render() {
    return (
        <div className="Main">
           
           <Outlet/>
        </div>
    );
 }
}


export default Main;