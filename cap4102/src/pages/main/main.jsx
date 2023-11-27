import React from "react";
import  Button  from "../../components/homepage_button";
import styles from "./main.css"

export default function Main() {
    return(
        <div className="main-container">
            <div className="main-content">
                <h2 className="main-header">OPEN TODAY</h2>
                <h2 className="main-header">UNTIL 7:30PM</h2>
                <Button location="MENU"/>
                <Button action="yes" location="CALL NOW!"/>

            </div>
            <center>
            </center>
        </div>
    )
}