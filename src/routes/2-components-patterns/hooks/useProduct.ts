import { useEffect, useState } from "react";
import { Product, ProductCardOnChangeArgs } from "../interfaces";




type Props = {
    product: Product,
    onChange?: (args:ProductCardOnChangeArgs)=> void,
    value?: number
}


export const useProduct = ({product, onChange, value=0}:Props)=>{
    // Establece el estado cuando se llama al customHook
    const [counter, setCounter] = useState(value);

    // Cada vez que cambie el valor, se actualiza el estado
    useEffect(() => {
        setCounter(value);
    }, [value]);
    

    const increaseBy = (value:number)=>{
        // Se asegura de que el estado no sea inferior a 0
        const newValue = Math.max(counter + value, 0);

        setCounter(newValue);

        typeof onChange === 'function' && onChange({count:newValue, product});
    }


    return {
        counter,
        increaseBy
    }
}