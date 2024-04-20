import { useCallback, useContext } from "react";

import { ProductButtonsProps } from "../interfaces";

import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'


const {
    buttonsContainer, buttonMinus, buttonAdd, countLabel, disabled
} = styles;




/**
 * Patron de diseño: Compound Component Pattern.
 * Consume las propiedades del contexto generado en ProductContext.
 */
export const ProductButtons = ({className='', style}:ProductButtonsProps)=>{
    const {counter, maxCount, increaseBy } = useContext(ProductContext);


    /** Límite máximo alcanzado. */
    const isMaxCheached = useCallback(
        () => !!maxCount && counter === maxCount,
        [counter, maxCount]
    );
    

    return (
        <div className={`${buttonsContainer} ${className}`} style={style}>
            <button 
                className={buttonMinus}
                onClick={()=>increaseBy(-1)}
            >
                -
            </button>
            <div className={countLabel}>{counter}</div>
            <button 
                className={`${buttonAdd} ${isMaxCheached() ? disabled : ''}`}
                onClick={()=>increaseBy(1)}
            >
                +
            </button>
        </div>
    )
}