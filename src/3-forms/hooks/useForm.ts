import { ChangeEvent, useState } from "react";




/**
 * CustomHook
 * @param initialState Estado inicial del formulario. Es de tipo genérico.
 * @returns 
 */
export const useForm = <T>(initialState:T)=>{
    /** Estado interno del customHook. */
    const [formData, setFormData] = useState(initialState);


    /** Función que añade al estado del formulario el valor del input que cambie. */
    const onChange = ({target}:ChangeEvent<HTMLInputElement>)=>{
        setFormData({
            ...formData, 
            [target.name]: target.value
        });
    }


    const resetForm = ()=>{
        setFormData(initialState);
    }


    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }




    return {
        ...formData,
        isValidEmail,
        onChange,
        resetForm,
    }
}