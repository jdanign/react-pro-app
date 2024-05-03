import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import { MyFormCheckbox, MyFormInput, MyFormSelect } from '../components'

import '../styles/styles.css'


interface FormValues {
    firstName:string,
    lastName:string,
    email:string,
    terms?:boolean,
    jobType?:string,
}


export const FormikAbstract = ()=>{
    return (
        <main>
            <h1>Formik Abstract</h1>

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
                        <MyFormInput 
                            name='firstName' 
                            label='First Name' 
                            placeholder='Write your first name'
                        />

                        <MyFormInput 
                            name='lastName' 
                            label='Last Name' 
                            placeholder='Write your last name'
                        />

                        <MyFormInput 
                            name='email' 
                            label='Email' 
                            placeholder='Write your email'
                        />

                        <MyFormSelect name='jobType' label='Job type' >
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-junior">IT Junior</option>
                        </MyFormSelect>

                        <MyFormCheckbox name='terms' label='Terms and conditions' />
        
                        <button type='submit'>Submit</button>
                    </Form>
                }
            </Formik>
        </main>
    )
}