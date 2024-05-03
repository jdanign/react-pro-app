import { ErrorMessage, useField } from "formik"


interface Props {
    label:string,
    name:string,
    id?:string,
    placeholder?:string,
    [x:string]:any
}


export const MyFormSelect = ({label, ...props}:Props)=>{
    const [field, meta] = useField(props);

    const {name, id} = props;
    const {touched, error} = meta;


    return (
        <>
            <label htmlFor={id || name}>{label}</label>
            <select {...field} {...props} />
            <ErrorMessage name={name} component='span' className='error' />
        </>
    )
}