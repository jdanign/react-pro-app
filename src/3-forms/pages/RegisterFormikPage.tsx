import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import { MyFormInput } from '../components';

import '../styles/styles.css'


interface FormValues {
    name:string,
    email:string,
    password1:string,
    password2:string,
}


export const RegisterFormikPage = ()=>{
    return (
        <main>
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                } as FormValues} 
                validationSchema={
                    Yup.object({
                        name: Yup.string().required('Requerido')
                                .min(2, 'Debe tener 2 caracteres o más')
                                .max(15, 'Debe tener 15 caracteres o menos'),
                        email: Yup.string().required('Requerido')
                                .email('Dirección de email inválida'),
                        password1: Yup.string().required('Requerido')
                                .min(6, 'Debe tener 6 caracteres al menos'),
                        password2: Yup.string().required('Requerido')
                                .equals([Yup.ref('password1')], 'Las contraseñas deben ser iguales'),
                    }) as Yup.ObjectSchema<FormValues>
                    
                }
                onSubmit={(values:FormValues)=>{
                    console.log(values)
                }}
            >
                {(formik) => 
                    <Form>
                        <MyFormInput name='name' label='Nombre' />
                        <MyFormInput type='email' name='email' label='Email' />
                        <MyFormInput type='password' name='password1' label='Contraseña' />
                        <MyFormInput type='password' name='password2' label='Repite contraseña' />

                        <button type="submit">Create</button>

                        <button type="reset">Reset</button>
                    </Form>
                }
            </Formik>
        </main>
    )
}