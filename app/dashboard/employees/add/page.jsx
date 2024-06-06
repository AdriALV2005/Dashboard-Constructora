import { addEmployee } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddEmployeePage = () => {
  return (
    <div className={styles.container}>
      <form action={addEmployee} className={styles.form}>
        <div className={styles.formcompl}>
          <div className={styles.column}>
            <h3>Nombre del trabajador</h3>
            <input
              type="text"
              id="nombre"
              placeholder="nombre"
              name="nombre"
              minlength="3"
              maxlength="20"
              required
            />
            <h3>Apellido del trabajador</h3>
            <input
              type="text"
              placeholder="apellido"
              id="apellido"
              name="apellido"
              minlength="3"
              maxlength="20"
              required
            />
            <h3>hola</h3>
            <input
              type="text"
              placeholder="telefono"
              name="telefono"
              minlength="3"
              maxlength="20"
              required
            />
            <h3>hola</h3>
            <input
              type="email"
              placeholder="correo"
              name="correo"
              required
            />{" "}
          </div>
          <div className={styles.column}>
            {" "}
            <h3>hola</h3>
            <input type="text" placeholder="direccion" name="direccion" />{" "}
            <h3>hola</h3>
            <input type="number" placeholder="edad" name="edad" min="0" />{" "}
            <h3>hola</h3>
            <input type="text" placeholder="cargo" name="cargo" />
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddEmployeePage;
