import React from "react";
import css from "./Container.module.css"

export default function Main (props) {
    return (
           
            <div className={css.products}>
                <img className={css.img2} src={props.image} alt="foto"/>
                <p className={css.price}>{props.price}</p>
                <p className={css.name}>{props.name}</p>
                <button className={css.btn}>Купить</button>
            </div>
           
    )
}