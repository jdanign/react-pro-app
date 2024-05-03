import { FormikErrors, useFormik } from 'formik'
import '../styles/styles.css'


interface FormValues {
    firstName: string,
    lastName: string,
    email: string,
}


export const FormikBasicPage = ()=>{
    /** Función de validación que usará formik para validar los campos del formulario. */
    const validate = ({firstName, lastName, email}:FormValues)=>{
        const errors:FormikErrors<FormValues> = {};

        if (!firstName.trim()){
            errors.firstName = 'Required';
        }
        else if (firstName.trim().length >= 15){
            errors.firstName = 'Must be 15 characters or less';
        }

        if (!lastName.trim()){
            errors.lastName = 'Required';
        }
        else if (lastName.trim().length >= 10){
            errors.lastName = 'Must be 10 characters or less';
        }

        if (!email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }


        return errors;
    }


    /** Usa el customHook de formik. */
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        validate,
        onSubmit: values =>{
            console.log(values)
        },
    });


    return (
        <main>
            <h1>Formik Basic</h1>

            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text"
                    name='firstName'
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text"
                    name='lastName'
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="email">Email</label>
                <input 
                    type="text"
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type='submit'>Submit</button>
            </form>
        </main>
    )
}