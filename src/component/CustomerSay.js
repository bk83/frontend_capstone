import React from "react";
import '../styles/common.css';
import '../styles/main.css';
import user_1 from "../images/user_1.png";
import user_2 from "../images/user_2.png";
import user_3 from "../images/user_3.png";
import user_4 from "../images/user_4.png";


export default function CustomerSay() {
    return (
        <section className="testinominals">
            <div className="testimonials__container">
                <h2 className="section-title">Testimonials</h2>
                <div className="testimonials__container__review-list">
                    <div className="review-card">
                        <div className="review-card__rating">
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                        </div>
                        <div className="review-card__user">
                            <img className="review-card__user__image" src={user_1} alt="User"></img>
                            <span className="review-card__user__name highlight-text">Tom</span>
                            <p>
                                "This restaurant surpassed my expectations with its impeccable service, mouthwatering dishes,
                                and a delightful ambiance that made every moment enjoyable."
                            </p>
                        </div>
                    </div>
                    <div className="review-card">
                        <div className="review-card__rating">
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                        </div>
                        <div className="review-card__user">
                            <img className="review-card__user__image" src={user_2} alt="User"></img>
                            <span className="review-card__user__name highlight-text">Lin</span>
                            <p>
                                "The knowledgeable and passionate staff guided us through an extraordinary gastronomic adventure,
                                leaving us in awe of the culinary expertise displayed at this establishment."
                            </p>
                        </div>
                    </div>
                    <div className="review-card">
                        <div className="review-card__rating">
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                        </div>
                        <div className="review-card__user">
                            <img className="review-card__user__image" src={user_3} alt="User"></img>
                            <span className="review-card__user__name highlight-text">Monica</span>
                            <p>
                                "The inviting atmosphere, coupled with the impeccable service and delectable cuisine,
                                made this restaurant an instant favorite that I can't wait to revisit."
                            </p>
                        </div>
                    </div>
                    <div className="review-card">
                        <div className="review-card__rating">
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                        </div>
                        <div className="review-card__user">
                            <img className="review-card__user__image" src={user_4} alt="User"></img>
                            <span className="review-card__user__name highlight-text">John</span>
                            <p>
                                "The unique blend of flavors, innovative menu o fferings, and impeccable
                                execution of each dish demonstrated the culinary mastery of the chefs at this exceptional restaurant."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}