import React from "react";
import styles from "@/app/ui/login/login.module.css";
import { authenticate } from "../lib/actions";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action={authenticate} className={styles.form}>
        <h1>iniciar sesion</h1>
        <input type="text" placeholder="usuario" name = "username"/>
        <input type="password" placeholder="contraseña" name="password"/>
        <button>INGRESAR</button>
      </form>
    </div>
  );
};

export default LoginPage;
