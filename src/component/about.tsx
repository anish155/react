// import React from "react";
import {Link} from 'react-router-dom';
function About() {
    return(
        <div>
            <h1 className="header">About Us</h1>
            <p className="box">
                This is a dedicated web for Super M a local maket located at ..... location.<br/>
                It serves as a positive work environment for both the locals and the visitors.
            </p>
            <Link to="/">Home Page</Link>
        </div>
    );
}
export default About