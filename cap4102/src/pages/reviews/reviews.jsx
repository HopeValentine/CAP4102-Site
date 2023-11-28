import React from "react";
import "./reviews.css"

export default function Reviews() {
    var spantag = document.createElement('span');
    spantag.setAttribute('data-review-id', "0vMVDrP7IsiDSMeRCC7KdQ");
    spantag.setAttribute('data-hostname', "www.yelp.com");
    spantag.style = "height: 800px";
    var tag = document.createElement('script');
tag.async = true;
tag.src = "https://www.yelp.com/embed/widgets.js";
tag.type = "text/javascript"
var body = document.getElementsByTagName('body')[0];
spantag.appendChild(tag);
body.appendChild(spantag);

    return(
        <div className="page-container">
            <div className="reviews-container">
                <header className="reviews-header">
                    <h1 className="reviews-header-text">Reviews</h1>
                </header>

                <body className="reviews-body">

                    <div className="reviews-text-section">

                    {/*<div class="yelp-review" data-review-id="0vMVDrP7IsiDSMeRCC7KdQ" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=v2TAq2PfbwOgYVlPbjLJjg" rel="nofollow noopener">mike w.</a>'s <a href="https://www.yelp.com/biz/di-da-pensacola-4?hrid=0vMVDrP7IsiDSMeRCC7KdQ" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/eqGMTgX65PCdeL9NuMmtSg" rel="nofollow noopener">Di Da</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src={yelpscript} type="text/javascript" async></script></div>
                    */}</div>

                </body>
            </div>
        </div>
    )
}

