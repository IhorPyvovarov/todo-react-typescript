import React from "react";

import {NavLink} from "react-router-dom";

export const Navbar: React.FC = () => {
    return (
        <nav className="nav px-1">
            <div className="nav-wrapper">
                <NavLink to="/" className="brand-logo">React Typescript ToDo App</NavLink>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/">List of Todos</NavLink></li>
                    <li><NavLink to="/information">Information page</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}