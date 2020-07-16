import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <Link to="/" className={window.location.pathname === "/"
                ? "nav-link active" : "nav-link"
            }><img src="./assets/logo.png" alt="Stephen Miller" className="img-responsive" width="20%" /></Link>
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