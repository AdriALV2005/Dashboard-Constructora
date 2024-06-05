import { addClient } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddClientPage = () => {

  return (
    <div className={styles.container}>
      <form action={addClient} className={styles.form}>
        <div className={styles.formcompl}>
          <div className={styles.column}>
            <h3>hola</h3>
            <input type="text" id="nombre" placeholder="nombre" name="nombre" minlength="3" maxlength="20" required />   <h3>hola</h3>
            <input type="text" placeholder="apellido" id="apellido" name="apellido" minlength="3" maxlength="20" required />
            <h3>hola</h3>
            <input type="text" placeholder="telefono" name="telefono" minlength="3" maxlength="20" required /> </div>
          <div className={styles.column}>
            <h3>hola</h3>
            <input type="email" placeholder="correo" name="correo" required /> <h3>hola</h3>
            <input type="text" placeholder="direccion" name="direccion" /> <h3>hola</h3>
            <input type="number" placeholder="edad" name="edad" min="0" />
          </div>
        </div>




        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddClientPage;
