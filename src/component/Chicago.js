import React from "react";
import '../styles/common.css';
import '../styles/main.css';
import chef_A from "../images/restaurant_chef_A.jpg";
import chef_B from "../images/restaurant_chef_B.jpg";

export default function Chicago() {
    return (
        <section className="about">
            <div className="about__container">
                <div className="about__container__text-wrapper">
                    <h2 className="display-title">Little Lemon</h2>
                    <h3 className="sub-title">Chicago</h3>
                    <div className="lead-text">
                        <p>
                            Welcome to Little Lemon, where tradition meets innovation in Mediterranean cuisine.
                        </p>
                        <p>
                            Our family-owned restaurant offers a modern twist on classic recipes.
                            Experience a culinary journey through the Mediterranean with our thoughtfully crafted dishes.
                        </p>
                        <p>
                            From creamy hummus to inventive fusion salads, our menu is a delightful fusion of flavors.
                            Discover a world of flavor in every bite at Little Lemon.
                        </p>
                    </div>
                </div>
                <div className="about__container__images">
                    <img className="up-image" src={chef_B} alt="Chef"></img>
                    <img className="bottom-image" src={chef_A} alt="Chef"></img>

                </div>
            </div>
        </section>
    )
}