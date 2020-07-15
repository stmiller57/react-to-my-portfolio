import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <svg width="50px" height="50px" viewBox="0 0 16 16" className="bi bi-laptop text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M13.5 3h-11a.5.5 0 0 0-.5.5V11h12V3.5a.5.5 0 0 0-.5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11z" />
                <path d="M0 12h16v.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5V12z" />
            </svg>
            <Link to="/portfolio" className={window.location.pathname === "/"
                ? "nav-link active" : "nav-link"
            }><h2>Stephen Miller</h2></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <Link to="/portfolio" className={window.location.pathname === "/portfolio"
                        ? "nav-link active" : "nav-link"
                    }><h5>Coding</h5></Link>
                    <Link to="/writing" className={window.location.pathname === "/writing"
                        ? "nav-link active" : "nav-link"
                    }><h5>Writing</h5></Link>
                </div>
            </div>
        </nav >
    );
}

export default Header;