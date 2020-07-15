import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <Link
                to="/"
                className={
                    window.location.pathname === "/" ||
                        window.location.pathname === "/portfolio"
                        ? "nav-link active"
                        : "nav-link"
                }>
                <h2>Stephen Miller</h2>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="#coding-portfolio">Coding portfolio</a>
                    <Link
                        to="/writing"
                        className={
                            window.location.pathname === "/" ||
                                window.location.pathname === "/writing"
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        Selected writing                </Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;