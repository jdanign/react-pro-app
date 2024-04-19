import { useState } from "react";
import { ProductCardOnChangeArgs, ProductInCart } from "../interfaces";




export const useShoppingCart = ()=>{
    /** 
     * El estado al ser genérico, se le asigna una una interfaz que lo define como un objeto donde 
     * la clave es de tipo 'string' y el valor es de tipo 'ProductInCart'.
     */
    const [shoppingCart, setShoppingCart] = useState<{[key:string]:ProductInCart}>({});


    const onProductCountChange = ({count, product}:ProductCardOnChangeArgs)=>{
        setShoppingCart(prevState => {
            const productInCart: ProductInCart = prevState[product.id] || {...product, count: 0};

            // Inserta o modifica el producto
            if (Math.max(productInCart.count + count, 0) > 0){
                productInCart.count += count;

                return {
                    ...prevState,
                    [product.id]: productInCart
                }
            }
            // Borra el producto
            else {
                const {[product.id]: current, ...rest} = prevState;

                return rest;
            }



            /* // Desestructura y separa el producto actual del resto de productos
            const {[product.id]: current, ...rest} = prevState;

            // Si el contador se pone en 0 solo se devuelve el resto de elementos, 
            // de lo contrario se añade el producto con nuevos datos al resto de elementos
            return (count === 0 ? 
                rest 
                : 
                {
                    ...rest,
                    [product.id]: {...product, count}
                }
            ); */
        })
    }


    return {
        shoppingCart,
        onProductCountChange,
    }
}