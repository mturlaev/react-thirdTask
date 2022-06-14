import React from "react";
import css from "./Header.module.css";
import img from "../../images/cart-38.png"

export default function Header () {
    return (
        <div className={css.Header}>
            <b className={css.title}>Intocode Coding Shopcamp</b>
            <div className={css.IMG}>
                <img src={img} alt="картинка" className={css.img}></img>
            </div>
        </div>
    )
}