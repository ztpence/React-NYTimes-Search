import React, { Component } from "react";

const NavBar = () => {

    return (
        <nav>
            <nav className="navbar justify-content-center navbar-expand-lg navbar-light bg-success">
            <h1>NYTimes News Search</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            </nav>
        </nav>
    );
}

export default NavBar;
