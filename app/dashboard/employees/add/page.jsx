import { addEmployee } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddEmployeePage = () => {
  return (
    <div className={styles.container}>
      <form action={addEmployee} className={styles.form}>
      
            <h3>Nombre del trabajador</h3>
            <input
              type="text"
              id="nombre"
              placeholder="Ingrese el nombre del trabajador ..."
              name="nombre"
              minlength="3"
              maxlength="20"
              required
            />
            <h3>Apellido del trabajador</h3>
            <input
              type="text"
              placeholder="Ingrese el apellido del trabajador ..."
              id="apellido"
              name="apellido"
              minlength="3"
              maxlength="20"
              required
            />
            <h3>Teléfono del trabajador</h3>
            <input
              type="text"
              placeholder="Ingrese el teléfono del trabajador ..."
              name="telefono"
              minlength="3"
              maxlength="20"
              required
            />
            <h3>Correo electrónico del trabajador</h3>
            <input
              type="email"
              placeholder="Ingrese el correo electrónico del trabajador ..."
              name="correo"
              required
            />{" "}
         
            {" "}
            <h3>Dirreción del trabajador</h3>
            <input type="text" placeholder="Ingrese la dirección del trabajador ..." name="direccion" />{" "}
            <h3>Edad del trabajador</h3>
            <input type="number" placeholder="Ingrese la edad del trabajador ..." name="edad" min="0" />{" "}
            <h3>Cargo del trabajador</h3>
            <input type="text" placeholder="Ingrese el cargo del trabajador ..." name="cargo" />
        
        <button type="submit">AGREGAR</button>
      </form>
    </div>
  );
};

export default AddEmployeePage;
