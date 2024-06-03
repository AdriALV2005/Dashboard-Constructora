"use client";

import { authenticate } from "@/app/lib/actions"
import styles from "./loginForm.module.css"
import {useFormState} from "react-dom"

const LoginForm = ()=>{

    const[state, formAction] = useFormState(authenticate, undefined);

   
    

    return(
        <form action= {formAction} className={styles.form}>
            <h1>iniciar sesion</h1>
            <input type="text" placeholder="usuario" name = "username"/>
            <input type="password" placeholder="contraseña" name="password"/>
            <button>INGRESAR</button>
            {state && state}
         </form>
    );
};

export default LoginForm;