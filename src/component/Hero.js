import React from "react";
import { Link } from "react-router-dom";
import '../styles/common.css';
import '../styles/main.css';
import top_image from "../images/restauranfood.jpg";

export default function Hero() {
    return (
        <section className="top">
            <div className="top__container">
                <div className="top__container__text-wrapper">
                    <h2 className="display-title">Little Lemon</h2>
                    <h3 className="sub-title">Chicago</h3>
                    <p className="lead-text">
                        We are a family owned Mediterranean restaurant,
                        focused on traditional recipes served with a modern twist.
                    </p>
                    <button className="btn-primary">
                        <Link to="/bookingPage" className="link-res">Reserve a Table</Link>
                    </button>
                </div>
                <img className="top-image" src={top_image} alt="restaurant food"></img>
            </div>
        </section>
    );
}