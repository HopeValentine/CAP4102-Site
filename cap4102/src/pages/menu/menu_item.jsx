import React from "react";

export const Item = (props) => {
    const { name, desc, price, category, image} = props.data;
    return (
        <div className="menu-item">
            <div className="name">
                <p>
                    <b className="menu-body-title">
                        {name}
                    </b>
                </p>
            </div>

            <img src={image} className="img-menu"></img>
            <p className="menu-body-text">
                {desc}
            </p>
        </div>
    )

}



