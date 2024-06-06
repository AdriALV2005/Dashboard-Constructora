import { addClient } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddClientPage = () => {

  return (
    <div className={styles.container}>
      <form action={addClient} className={styles.form}>
        <h3>Nombre del cliente</h3>
        <input type="text" id="nombre" placeholder="Ingrese el nombre del cliente" name="nombre" minlength="3" maxlength="20" required />
        <h3>Apellido del cliente</h3>
        <input type="text" placeholder="Ingrese el apellido del cliente" id="apellido" name="apellido" minlength="3" maxlength="20" required />
        <h3>Teléfono del cliente</h3>
        <input type="text" placeholder="Ingrese el teléfono del cliente" name="telefono" minlength="3" maxlength="20" required />
        <h3>Correo electrónico del cliente</h3>
        <input type="email" placeholder="Ingrese el correo electrónico del cliente" name="correo" required />
        <h3>Dirección del cliente</h3>
        <input type="text" placeholder="Ingrese la dirección del cliente" name="direccion" />
        <h3>Edad del cliente</h3>
        <input type="number" placeholder="Ingrese la edad del cliente" name="edad" min="0" />
        <button type="submit">AGREGAR</button>
      </form>
    </div>
  );
};

export default AddClientPage;
