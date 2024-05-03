import { ErrorMessage, useField } from "formik"


interface Props {
    label:string,
    name:string,
    id?:string,
}


export const MyFormCheckbox = ({label, ...props}:Props)=>{
    const [field, meta] = useField({...props, type:'checkbox'});

    const {name} = props;


    return (
        <>
            <label>
                <input type='checkbox' {...field} {...props} />
                {label}
            </label>
            <ErrorMessage name={name} component='span' className='error' />
        </>
    )
}