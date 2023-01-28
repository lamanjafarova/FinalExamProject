import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"
const Header = () => {
  return (
    <div id='header'>
        <div className="container">
            <div className="headers">
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"}>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"}>Our Services</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/wish-list"}>Wish List</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/add-page"}>Add</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="btn">
                    <button className='header-btn'>GET A QUOTE</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header