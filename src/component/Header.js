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
            <Nav />
            <div className="basket-icon">
                <img src={basket} alt="basket" />
            </div>
        </header>
    );
}
