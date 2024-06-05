import { addProject } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProjectPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProject} className={styles.form}>
        <input
          type="text"
          placeholder="nombre"
          id="nombre"
          name="nombre"
          required
        />

        <input
          type="date"
          placeholder="fechainicio"
          id="fechainicio"
          name="fechainicio"
          required
        />

        <input
          type="date"
          placeholder="fechafin"
          id="fechafin"
          name="fechafin"
          required
        />

        <select name="estado" id="estado">
          <option value="Comenzando">Comenzando</option>
          <option value="En proceso">En Proceso</option>
          <option value="Terminado">Terminado</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProjectPage;
