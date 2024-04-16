import { useContext } from "react";

import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'


const {
    buttonsContainer, buttonMinus, buttonAdd, countLabel,
} = styles;




/**
 * Patron de diseño: Compound Component Pattern.
 * Consume las propiedades del contexto generado en ProductContext.
 */
export const ProductButtons = ()=>{
    const {increaseBy, counter} = useContext(ProductContext);


    return (
        <div className={buttonsContainer}>
            <button 
                className={buttonMinus}
                onClick={()=>increaseBy(-1)}
            >
                -
            </button>
            <div className={countLabel}>{counter}</div>
            <button 
                className={buttonAdd}
                onClick={()=>increaseBy(1)}
            >
                +
            </button>
        </div>
    )
}