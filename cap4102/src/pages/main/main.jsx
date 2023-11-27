import React from "react";
import  Button  from "../../components/homepage_button";

export default function Main() {
    return(
        <div className="home">
            <h1>WELCOME!</h1>
            <h2>OPEN TODAY</h2>
            <h2>UNTIL 7:30 PM</h2>
            <p>Main page.</p>
            <center>
            <Button location="Menu"/>
            <Button action="yes" location="Call now!"/>
            </center>
        </div>
    )
}