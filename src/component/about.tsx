// import React from "react";
import './css/about.css';
import {Link} from 'react-router-dom';
function About() {
    return(
        <div className='about'>
            <nav><Link to="/">Home</Link>
            &nbsp;
            <Link to="/about">About</Link>
            </nav>
            <h1 className="header">About Us</h1>
            <p className="box">
                This is a dedicated web for Super M a local maket located at ..... location.<br/>
                It serves as a positive work environment for both the locals and the visitors.
            </p>
        </div>
    );
}
export default About