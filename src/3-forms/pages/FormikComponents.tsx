import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'


interface FormValues {
    firstName:string,
    lastName:string,
    email:string,
    terms?:boolean,
    jobType?:string,
}


export const FormikComponents = ()=>{
    return (
        <main>
            <h1>Formik Components</h1>

            <Formik
                initialValues={
                    {
                        firstName: '',
                        lastName: '',
                        email: '',
                        terms: false,
                        jobType: '',
                    } as FormValues
                }
                validationSchema={
                    Yup.object({
                        firstName: Yup.string().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
                        lastName: Yup.string().max(10, 'Debe tener 10 caracteres o menos').required('Requerido'),
                        email: Yup.string().email('Dirección de email inválida').required('Requerido'),
                        terms: Yup.boolean().oneOf([true], 'Debe aceptar los términos y condiciones'),
                        jobType: Yup.string().notOneOf(['it-junior'], 'Esta opción no es permitida').required('Requerido'),
                    }) as Yup.ObjectSchema<FormValues>
                }
                onSubmit={(values:FormValues)=>{
                    console.log(values)
                }}
            >
                {(formik) => 
                    <Form>
                        <label htmlFor='firstName'>First Name</label>
                        <Field type='text' name='firstName' />
                        <ErrorMessage name='firstName' component='span' />
        
                        <label htmlFor='lastName'>Last Name</label>
                        <Field type='text' name='lastName' />
                        <ErrorMessage name='lastName' component='span' />
        
                        <label htmlFor='email'>Email</label>
                        <Field type='email' name='email' />
                        <ErrorMessage name='email' component='span' />

                        <label htmlFor='jobType'>Job type</label>
                        <Field as='select' name='jobType' >
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-junior">IT Junior</option>
                        </Field>
                        <ErrorMessage name='jobType' component='span' />
                        
                        <label>
                            <Field type='checkbox' name='terms' />
                            Terms and conditions
                        </label>
                        <ErrorMessage name='terms' component='span' />
        
                        <button type='submit'>Submit</button>
                    </Form>
                }
            </Formik>
        </main>
    )
}