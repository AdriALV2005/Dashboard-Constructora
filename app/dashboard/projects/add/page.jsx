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

        <input type="text" placeholder="estado" id="estado" name="estado" />

        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProjectPage;
