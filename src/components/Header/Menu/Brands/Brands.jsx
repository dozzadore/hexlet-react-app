import React, {Component} from 'react';
import { Link } from "react-router-dom";


class Brands extends Component{
    render() {
    return (
        <div className="Brands">
            <p>Brands</p>
            <div className='oneBrand'>
                <Link to="/equipment/brands/juck" style={{
                    textDecoration: "none",
                    color: "black",
                    }}
                >Juck</Link>
            </div>
            <div className='oneBrand'>
                <Link to="/equipment/brands/jack" style={{
                    textDecoration: "none",
                    color: "black",
                    }}
                >Jack</Link>
            </div>
        </div>
    );
 }
}


export default Brands;