import { useFormik } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'


interface FormValues {
    firstName:string,
    lastName:string,
    email:string,
}


export const FormikYupPage = ()=>{
    /** Usa el customHook de formik. */
    const {
        errors,
        touched,
        getFieldProps,
        handleSubmit,
    } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        } as FormValues,
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
            lastName: Yup.string().max(10, 'Debe tener 10 caracteres o menos').required('Requerido'),
            email: Yup.string().email('Dirección de email inválida').required('Requerido'),
        }) as Yup.ObjectSchema<FormValues>,
        onSubmit: (values:FormValues) =>{
            console.log(values)
        },
    });


    return (
        <main>
            <h1>Formik Yup</h1>

            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="firstName">First Name</label>
                <input type="text" {...getFieldProps('firstName')} />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input type="text" {...getFieldProps('lastName')} />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="email">Email</label>
                <input type="text" {...getFieldProps('email')} />
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type='submit'>Submit</button>
            </form>
        </main>
    )
}