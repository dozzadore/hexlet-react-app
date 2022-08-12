import React, {Component} from 'react';
import '../brands.css';
import { Link } from "react-router-dom";


class Jack extends Component{
    render() {
    return (
        <div>
            <p>Jack</p>
            <div className="oneBrand">
                <Link to="/equipment/brands/jack/JACKJK8558GWZ1" style={{
                    textDecoration: "none",
                    color: "black",
                    }}
                >JK-8558G-WZ-1</Link>
            
            </div>
        </div>
    );
 }
}


export default Jack;