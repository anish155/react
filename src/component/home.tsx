// import React from "react";
import './css/home.css';
import { Link } from "react-router-dom";
function Home(){
    return(
        <div className='home'>
            <nav><Link to="/">Home</Link>
            &nbsp;
            <Link to="/about">About</Link>
            </nav>
            <h1>Super M</h1>
            <p>This is a super market website.</p>
        </div>
    );
}

export default Home;
