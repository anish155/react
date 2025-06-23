import React from "react";
import { Link } from "react-router-dom";
function Home(){
    return(
        <div>
            <h1>Super M</h1>
            <p>This is a super market website.</p>
            <Link to="/about">About Page</Link>
        </div>
    );
}

export default Home;
