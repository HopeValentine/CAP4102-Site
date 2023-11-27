import React from "react";
import about1 from "../../images/pork_chops.jpg"
import about2 from "../../images/owner.jpg"
import about3 from "../../images/owner_2.jpg"
import "./about.css"

export default function About() {
    return(
        <div className="page-container">
            <div className="about-container">
                <header className="about-header">
                    <h1 className="about-header-text">About Us</h1>
                </header>

                <body className="about-body">
                    <h1 className="about-subtitle">Welcome to Di Da Food Truck!</h1>

                    <div className="about-text-section">
                        <img src={about1} className="img-about"></img>
                        <div>
                            <p className="about-body-title">
                                Your Gateway to an Authentic Vietnamese Culinary Journey
                            </p>
                            <p className="about-body-text">
                                Discover a blend of flavors from Da Nang and Phan Thiết in our curated menu!
                                Made with love and served with a side of culture, each dish is a taste of our rich Vietnamese heritage.
                            </p>
                        </div>
                    </div>

                    <div className="about-text-section">
                        <div>
                            <p className="about-body-title">
                                Not Just About Food
                            </p>
                            <p className="about-body-text">
                                Our story is about a legacy that spans generations. We've crafted a unique menu 
                                by fusing time-honored recipes from different corners of Vietnam, making each meal 
                                a taste of home. Our aim isn't merely to fill your stomach but to introduce you to 
                                the richness of Vietnamese culture through every bite.
                            </p>
                        </div>
                        <img src={about2} className="img-about"></img>
                    </div>

                    <div className="about-text-section">
                        <img src={about3} className="img-about"></img>
                        <div>
                            <p className="about-body-title">
                                Thank You
                            </p>
                            <p className="about-body-text">
                                We extend our heartfelt gratitude to you for choosing to support our small, family-owned 
                                business. Whether you've stopped by our website, engaged with us on social media, or savored 
                                a meal at our truck, we appreciate the time you've invested in getting to know us. It's our 
                                sincerest hope that you'll continue to be part of our culinary family for years to come.
                            </p>
                            <p className="about-body-title">
                                Di Da Family
                            </p>
                        </div>
                    </div>
                </body>
            </div>
        </div>
    )
}

{/* <div className="about-container">
<header className="about-header">
    <h1 className="about-header-text">About Us</h1>
</header>

<body className="about-body">
    <div className="about-container">
        <img src={about1} className="img-about"></img>
        <p className="about-body-title">
            Discover a blend of flavors from Da Nang and Phan Thiết in our curated about!
            Made with love and served with a side of culture, each dish is a taste of our rich Vietnamese heritage.
        </p>
    </div>
</body>

</div> */}