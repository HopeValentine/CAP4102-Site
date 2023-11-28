import React from "react";
import "./directions.css"

export default function Directions() {
    return(
        <div className="page-container">
            <div className="directions-container">
                <header className="directions-header">
                    <h1 className="directions-header-text">Directions</h1>
                </header>

                <body className="directions-body">
                    <h1 className="directions-subtitle">Welcome to Di Da Food Truck!</h1>

                    <div className="directions-text-section">
                        <img className="img-directions"></img>
                        <div>
                            <p className="directions-body-title">
                                Your Gateway to an Authentic Vietnamese Culinary Journey
                            </p>
                            <p className="directions-body-text">
                                Discover a blend of flavors from Da Nang and Phan Thiết in our curated menu!
                                Made with love and served with a side of culture, each dish is a taste of our rich Vietnamese heritage.
                            </p>
                        </div>
                    </div>

                    <div className="directions-text-section">
                        <div>
                            <p className="directions-body-title">
                                Not Just directions Food
                            </p>
                            <p className="directions-body-text">
                                Our story is directions a legacy that spans generations. We've crafted a unique menu 
                                by fusing time-honored recipes from different corners of Vietnam, making each meal 
                                a taste of home. Our aim isn't merely to fill your stomach but to introduce you to 
                                the richness of Vietnamese culture through every bite.
                            </p>
                        </div>
                        <img  className="img-directions"></img>
                    </div>

                    <div className="directions-text-section">
                        <img className="img-directions"></img>
                        <div>
                            <p className="directions-body-title">
                                Thank You
                            </p>
                            <p className="directions-body-text">
                                We extend our heartfelt gratitude to you for choosing to support our small, family-owned 
                                business. Whether you've stopped by our website, engaged with us on social media, or savored 
                                a meal at our truck, we appreciate the time you've invested in getting to know us. It's our 
                                sincerest hope that you'll continue to be part of our culinary family for years to come.
                            </p>
                            <p className="directions-body-title">
                                Di Da Family
                            </p>
                        </div>
                    </div>
                </body>
            </div>
        </div>
    )
}
