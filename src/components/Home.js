import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div>
            <h1>Todo list Router</h1>
            <nav>
                <ul>
                    <li style={{marginRight : "50px"}}><Link to="/class" style={{textDecoration: "none", color: "white"}}>Todo list class</Link></li>
                    <li><Link to="/function" style={{textDecoration: "none", color: "white"}}>Todo list function</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;