import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { MyFormCheckbox, MyFormInput, MyFormSelect } from '../components';
import formJson from '../data/custom-form.json';


const initialValues: {[key:string]: any} = {};
const fieldsValidation: {[key:string]: any} = {};

// Recorre cada propiedad que representa un campo de formulario
for (const {name, value, validations} of formJson){
    // Rellena el objeto con los valores iniciales de todos los campos del formulario desde el JSON
    initialValues[name] = value;

    // Añade las reglas de validación a cada propiedad si existe en el JSON
    if (validations){
        const {required, minLength, email} = validations;
        // Asigna el schema de Yup a cada propiedad
        fieldsValidation[name] = Yup.string();

        // Añade las reglas que existan en el JSON
        if (required && required === true)
            fieldsValidation[name] = fieldsValidation[name].required('Este campo obligatorio');
        if (minLength && minLength > 0)
            fieldsValidation[name] = fieldsValidation[name].min(minLength, `Debe tener como mínimo ${minLength} caracteres`);
        if (email && email === true)
            fieldsValidation[name] = fieldsValidation[name].email('El formato de email no es correcto');
    }
}

// Rellena el objeto con el schema de Yup generado por las validaciones para todos los campos
const validationSchema = Yup.object({...fieldsValidation});




export const DynamicForm = ()=>{
    return (
        <div>
            <h1>Dynamic Form</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values)=>{
                    console.log(values)
                }}
            >
                {(formik)=>
                    <Form noValidate>
                        {formJson.map(({type, name, placeholder, label, options}) =>
                            (type === 'select' ? 
                                <MyFormSelect 
                                    key={name}
                                    name={name} 
                                    label={label} 
                                >
                                    {options?.map(({id, label}) =>
                                        <option key={id} value={id}>{label}</option>
                                    )}
                                </MyFormSelect>
                                :
                                (type === 'checkbox' ? 
                                    <MyFormCheckbox
                                        key={name}
                                        name={name} 
                                        label={label} 
                                    />
                                    :
                                    <MyFormInput 
                                        key={name}
                                        type={(type as any)} 
                                        name={name} 
                                        label={label} 
                                        placeholder={placeholder} 
                                    />
                                )
                            )
                        )}
                        <button type="submit">Submit</button>
                    </Form>
                }
            </Formik>
        </div>
    )
}