import { addUser } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddUserPage = () => {
  return (


    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <div className={styles.formcompl}>
          <div className={styles.column}>
            <h3>Nombre de usuario</h3>
            <input type="text" placeholder="Ingrese su nombre de usuario ..." name="username" required />
            <h3>Correo electronico</h3>
            <input type="email" placeholder="Ingrese su correo electronico ..." name="email" required />
            <h3>Contraseña</h3>
            <input
              type="password"
              placeholder="Ingrese su contraseña ..."
              name="password"
              required
            />
          </div>
          <div className={styles.column}>
            <h3>Teléfono</h3>
            <input type="phone" placeholder="Ingrese su teléfono ..." name="phone" />
            <h3>¿Es administrador?</h3>
            <select name="isAdmin" id="isAdmin" required>
              <option value={false} >
                Elija su opción
              </option>
              <option value={true}>Sí</option>
              <option value={false}>No</option>
            </select>
            <h3>¿Es activo?</h3>
            <select name="isActive" id="isActive" required>
              <option value={true} >
                Elija su opción
              </option>
              <option value={true}>Sí</option>
              <option value={false}>No</option>
            </select>
          </div>
        </div>
        <h3>Dirección</h3>
        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Ingrese su dirección ..."
        ></textarea>
        <button type="submit">CREAR</button>
      </form>
    </div>




  );
};

export default AddUserPage;
