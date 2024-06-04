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
          src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </form>
  );
};

export default LoginForm;
