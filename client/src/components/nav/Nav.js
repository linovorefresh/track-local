import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {


    return (
        <ul className="nav d-flex justify-content-between lead">
            <li>
                <NavLink className="nav-link" to="/">
                Home
                </NavLink>
            </li>
            <li>
                <NavLink className="nav-link" to="/register">
                Register
                </NavLink>
            </li>

            <div className="dropdown">
                <li>
                <a
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    // href='/'
                >
                    User
                </a>
                <ul className="dropdown-menu">
                    <li>
                    <NavLink className="nav-link" to={`/dashboard`}>
                        Dashboard
                    </NavLink>
                    </li>
                    <li>
                    <a className="nav-link" >Logout</a>
                    </li>
                </ul>
                </li>
            </div>
    </ul>
    )
}
