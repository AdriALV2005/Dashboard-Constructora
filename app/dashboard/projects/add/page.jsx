import { addProject } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProjectPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProject} className={styles.form}>
        <h3>Nombre del proyecto</h3>
        <input
          type="text"
          placeholder="Ingrese el nombre del proyecto ..."
          id="nombre"
          name="nombre"
          required
        />
        <h3>Fecha de inicio del proyecto</h3>
        <input
          type="date"
          placeholder="fechainicio"
          id="fechainicio"
          name="fechainicio"
          required
        />
        <h3>Fecha de fin del proyecto</h3>
        <input
          type="date"
          placeholder="fechafin"
          id="fechafin"
          name="fechafin"
          required
        />
        <h3>Estado del proyecto</h3>
        <select name="estado" id="estado">
          <option value="Comenzando">Comenzando</option>
          <option value="En proceso">En Proceso</option>
          <option value="Terminado">Terminado</option>
        </select>

        <button type="submit">AGREGAR</button>
      </form>
    </div>
  );
};

export default AddProjectPage;
