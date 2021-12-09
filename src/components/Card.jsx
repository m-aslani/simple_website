import React,{useState} from 'react';
import style from "./Card.module.css";
import dislike from "../images/dislike.png";
import like from "../images/like.png";
import heart from "../images/heart.png";


const Card = ({image,title}) => {

    const [count, setCount] = useState(0);

    const dislikeHandler = ()=>{
        if(count > 0)
        setCount(count-1);
    }

    const likeHandler = ()=>{
        setCount(count+1);
    }

    return (
        <div className={style.container}>
            <img src={image} alt="card" />
            <h3>{title}</h3>

            <div className={style.like}>
                <img src={like} alt="like" onClick={()=>likeHandler()} />
                <div className={style.heart}>
                    <img src={heart} alt="heart" />
                    <span>{count}</span>
                </div>
                <img src={dislike} alt="dislike" onClick={()=>dislikeHandler()}/>
            </div>
        </div>
    )
}

export default Card
