import React from "react";
import Nav from "./Nav";
import '../styles/common.css';
import '../styles/header.css';
import logo from "../images/logo.png";
import basket from "../images/basket.svg";


export default function Header() {
    return (
        <header>
            <div className="header-menu">
                <div className="header-menu__line"></div>
            </div>
            <h1 className='logo'>
                <img src={logo} alt="logo" />
            </h1>
            {/* <nav>
                <ul className="menu-list">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Menu</a></li>
                    <li><a>Reservations</a></li>
                    <li><a>Order online</a></li>
                    <li><a>Login</a></li>
                </ul>
            </nav> */}
            <Nav />
            <div className="basket-icon">
                <img src={basket} alt="basket" />
            </div>
        </header>
    );
}
