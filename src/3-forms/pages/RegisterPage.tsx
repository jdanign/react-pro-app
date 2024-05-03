import { FormEvent } from 'react'
import { useForm } from '../hooks';
import '../styles/styles.css'


export const RegisterPage = ()=>{
    /** CustomHook para manejar formularios */
    const {
        name, email, password1, password2, 
        isValidEmail, onChange, resetForm,
    } = useForm({
        name: 'Fernando',
        email: 'fernando@email.com',
        password1: '123456',
        password2: '123456',
    });


    const onSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log({name, email, password1, password2})
    }


    return (
        <main>
            <h1>Register Page</h1>
            <form onSubmit={onSubmit} noValidate>
                <input 
                    type="text" 
                    name='name' 
                    value={name} 
                    onChange={onChange} 
                    placeholder="Name" 
                    className={``}
                />
                {name.trim().length <= 0 && <span>Este campo es necesario</span>}

                <input 
                    type="email" 
                    name='email' 
                    value={email} 
                    onChange={onChange} 
                    placeholder="Email" 
                    className={`${isValidEmail(email) || 'has-error'}`}
                />
                {email.trim().length <= 0 && <span>Este campo es necesario</span>}
                {email.trim().length > 0 && !isValidEmail(email) && <span>El email no es válido</span>}

                <input 
                    type="password" 
                    name='password1' 
                    value={password1} 
                    onChange={onChange} 
                    placeholder="Password" 
                />
                {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password1.trim().length > 0 && password1.trim().length < 6 && 
                <span>La contraseña debe tener 6 caracteres</span>}

                <input 
                    type="password" 
                    name='password2' 
                    value={password2} 
                    onChange={onChange} 
                    placeholder="Reapeat password" 
                />
                {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben coincidir</span>}

                <button 
                    type="submit"
                >
                    Create
                </button>

                <button 
                    type="button" 
                    onClick={resetForm}
                >
                    Reset
                </button>
            </form>
        </main>
    )
}