import { useEffect, useRef, useState } from "react";
import { InitialValues, Product, ProductCardOnChangeArgs } from "../interfaces";
import { count } from "console";




type Props = {
    product: Product,
    onChange?: (args:ProductCardOnChangeArgs)=> void,
    value?: number,
    initialValues?: InitialValues,
}


export const useProduct = ({product, onChange, value=0, initialValues}:Props)=>{
    const resetValue = initialValues?.count || value;

    // Establece el estado cuando se llama al customHook
    const [counter, setCounter] = useState<number>(resetValue);

    const isMounted = useRef(false);

    // Cada vez que cambie el valor, se actualiza el estado
    useEffect(() => {
        if (isMounted.current === true)
            setCounter(value);
    }, [value]);

    // Se establece en true solo la primera vez que se carga el componente
    /* useEffect(() => {
        isMounted.current = true;
    }, []); */
    

    const increaseBy = (value:number)=>{
        // Se asegura de que el estado no sea inferior a 0
        let newValue = Math.max(counter + value, 0);
        
        // Se asegura de que el contador no sea superior al máximo establecido si éste existe
        newValue = initialValues?.maxCount ? Math.min(newValue, initialValues.maxCount) : newValue;

        if (newValue !== counter){
            setCounter(newValue);

            typeof onChange === 'function' && onChange({count:newValue, product});
        }
    }


    const reset = ()=> setCounter(resetValue);
    


    return {
        counter,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
        increaseBy,
        reset,
    }
}