import React from 'react';
import Card from './Card';
import style from "./Cards.module.css";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";

const Cards = () => {
    return (
        <div className={style.container}>
            <Card image={pic1} title = "image"/>
            <Card image={pic2} title = "image"/>
            <Card image={pic3} title = "image"/>
            <Card image={pic4} title = "image"/>
        </div>
    )
}

export default Cards
