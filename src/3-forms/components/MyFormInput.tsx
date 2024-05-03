import { ErrorMessage, useField } from "formik"


interface Props {
    label:string,
    name:string,
    id?:string,
    type?:'text' | 'email' | 'password' | 'checkbox' | 'radio',
    placeholder?:string
}


export const MyFormInput = ({label, ...props}:Props)=>{
    const [field, meta] = useField(props);

    const {name, id, type} = props;
    //const {touched, error} = meta;


    return (
        <>
            <label htmlFor={id || name}>{label}</label>
            <input type={type || 'text'} className='text-input' {...field} {...props} />
            <ErrorMessage name={name} component='span' className='error' />
            {
                /* touched && error && <span className='error'>{error}</span> */
            }
        </>
    )
}