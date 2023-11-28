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

                    <div className="directions-text-section">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.44626385474874!2d-87.20410312595152!3d30.418269393884643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8890c181e83fad89%3A0xa90964d1dfebfd6!2sDi%20Da%20Food%20Truck!5e0!3m2!1sen!2sus!4v1701140766227!5m2!1sen!2sus" width="800" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </body>
            </div>
        </div>
    )
}

