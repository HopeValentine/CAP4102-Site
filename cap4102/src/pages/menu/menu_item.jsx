import React from "react";

export const Item = (props) => {
    const { name, desc, price, category, image} = props.data;
    return (
        <div className="item">
            <div className="name">
                <p>
                    <b>{name}</b>
                </p>
            </div>
            <img src={image}></img>
            <p>
            costs ${price} - 
                    {desc}
                    <i>category: {category}</i> </p>
        </div>
    )

}



