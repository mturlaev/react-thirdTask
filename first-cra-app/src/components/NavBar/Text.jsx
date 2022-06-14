import React from "react";
import css from "./Text.module.css";

export default function Text () {
    return (
        <div className={css.Text_item}>
            <p className={css.pshka}>Гаджеты и аксессуары</p>
            <hr className={css.line1}></hr>
            <p className={css.pshka_2}>Бытовая техника</p>
            <hr className={css.line2}></hr>
            <p className={css.pshka_3}>Прочее</p>
            </div>
    )
}