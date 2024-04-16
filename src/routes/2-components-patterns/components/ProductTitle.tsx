import { useContext } from "react";

import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'




/**
 * Patron de diseño: Compound Component Pattern.
 * Consume las propiedades del contexto generado en ProductContext.
 */
export const ProductTitle = ({title=''}:{title?:string})=>{
    const {product} = useContext(ProductContext);

    const titleToShow:string = title ? title : (product.title ? product.title : '');


    return (
        <span className={styles.productDescription}>{titleToShow}</span>
    )
}