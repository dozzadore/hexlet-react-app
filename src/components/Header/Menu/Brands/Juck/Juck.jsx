import React, {Component} from 'react';
import '../brands.css';
import { Link } from "react-router-dom";


class Juck extends Component{
    render() {
    return (
        <div>
            <p>Juck</p>
            <div className="oneBrand">
                <Link to="/equipment/brands/juck/JUCKJKT457A" style={{
                    textDecoration: "none",
                    color: "black",
                    }}
                >JUCK JK-T457A</Link>
            </div>
        </div>
    );
 }
}


export default Juck;