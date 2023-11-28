import React from "react";
import  Button  from "../../components/homepage_button";
import styles from "./main.css"
import foodpic from "../../images/mainpage_food.png";

export default function Main() {
    return(
        <div>
        <div className="overlay">
                        <img className="overlay-image" src={foodpic}/>
        </div>
        <div className="main-container">
                <div className="background">
                    <div className="main-flex">
                        <div className="textdiv">
                    <h2 className="main-header">OPEN TODAY</h2>
                    <h2 className="main-header-two">OPEN TODAY</h2>
                    </div>
                    <div className="textdiv">
                    <h2 className="main-header">UNTIL 7:30PM</h2>
                    <h2 className="main-header-two">UNTIL 7:30PM</h2>

                    </div>

                    <Button location="MENU"/>
                    <Button action="yes" location="CALL NOW!"/>
                    <Button action="hours" location="BUSINESS HOURS"/>
                    </div>

            </div>
            <center>
            </center>
        </div>
        </div>
    )
}