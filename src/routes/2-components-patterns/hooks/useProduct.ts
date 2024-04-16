import { useState } from "react";




export const useProduct = (initialValue:number)=>{
    const [counter, setCounter] = useState(initialValue);


    const increaseBy = (value:number)=>{
        // Se asegura de que el estado no sea inferior a 0
        setCounter(prevState => Math.max(prevState + value, 0));
    }



    return {
        counter,
        increaseBy
    }
}