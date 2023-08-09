import React from "react";

import { Link } from "react-router-dom";
import { Login } from "./LoginBtn";
import { SearchBtn } from "./SearchBtn";


export default function Header() {
    

    return (
        <div className="header">
            <div className="home-icon">
                <Link to="/">
                    <b>H O M E</b>
                </Link>
            </div>
            <div className="qwer">
                <SearchBtn/>
                <Login/>
            </div>
            
        </div>
    );
}
