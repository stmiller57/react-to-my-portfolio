import React from "react";
import "./style.css";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <a className="navbar-brand" href="index.html">Stephen Miller</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="index.html">About</a>
                    <a className="nav-item nav-link" href="#coding-portfolio">Coding portfolio</a>
                    <a className="nav-item nav-link" href="#recent-writing">Selected writing</a>
                </div>
            </div>
        </nav>
    );
}

export default Header;