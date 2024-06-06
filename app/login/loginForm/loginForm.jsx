"use client";

import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <form action={formAction} className={styles.form}>
      <div className={styles.div}>
        <h1>Iniciar sesión</h1>
        <p>Por favor, introduce tus credenciales</p>
        <h3>Usuario</h3>
        <input type="text" placeholder="Ingresa tu usuario" name="username" />
        <h3>Contraseña</h3>
        <input type="password" placeholder="Ingresa tu contraseña" name="password" />
        <button>INGRESAR</button>
        {state && state}
      </div>
      <div>
        <img
          src="https://i.ibb.co/kyM1gwT/00de44ff37d68a3ef16720f5f3ec60b0.jpg"
          alt=""
        />
      </div>
    </form>
  );
};

export default LoginForm;
