import React from "react";
import styles from "@/app/ui/login/login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1>iniciar sesion</h1>
        <input type="text" placeholder="usuario" />
        <input type="password" placeholder="contraseña" />
        <button>INGRESAR</button>
      </form>
    </div>
  );
};

export default LoginPage;
