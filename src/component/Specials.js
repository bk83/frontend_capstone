import React from "react";
import '../styles/common.css';
import '../styles/main.css';
import greekSalad from "../images/greek_salad.jpg";
import bruschetta from "../images/bruschetta.jpg";
import lemoDessert from "../images/lemon_dessert.jpg";


export default function Specials() {
    return (
        <section className="highlights">
            <div className="highlights__container">
                <h2 className="section-title">This weeks specials!</h2>
                <button className="btn-primary online-menu-btn">Online Menu</button>
                <div className="highlights__container__menu-list">
                    <div className="card">
                        <div className="card__image">
                            <img src={greekSalad} alt="Greek Salad"></img>
                        </div>
                        <div className="card__body">
                            <h4 className="card__body__name card-title">Greek Salad</h4>
                            <span className="card__body__price highlight-text">$12.99</span>
                            <p className="card__body__desc">
                                The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese,
                                garnished with crunchy garlic and rosemary croutons.
                            </p>
                            <div className="card__body__deliverly-link highlight-text">Order a Deliverly</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__image">
                            <img src={bruschetta} alt="Bruschetta"></img>
                        </div>
                        <div className="card__body">
                            <h4 className="card__body__name card-title">Bruchetta</h4>
                            <span className="card__body__price highlight-text">$5.99</span>
                            <p className="card__body__desc">
                                Our Bruschetta is made from grilled bread that has
                                been smeared with garlic and seasoned with salt and olive oil.
                            </p>
                            <div className="card__body__deliverly-link highlight-text">Order a Deliverly</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__image">
                            <img src={lemoDessert} alt="Lemon Dessert"></img>
                        </div>
                        <div className="card__body">
                            <h4 className="card__body__name card-title">Lemon Dessert</h4>
                            <span className="card__body__price highlight-text">$5.00</span>
                            <p className="card__body__desc">
                                This comes straight from grandma’s recipe book,
                                every last ingredient has been sourced and is as authentic as can be imagined.
                            </p>
                            <div className="card__body__deliverly-link highlight-text">Order a Deliverly</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}