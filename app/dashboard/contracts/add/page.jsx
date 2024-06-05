import { addContract } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddContractPage = () => {
  return (
    <div className={styles.container}>
      <form action={addContract} className={styles.form}>
        <input
          type="text"
          placeholder="titulo"
          id="titulo"
          name="titulo"
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
          <option value={true}>Estado</option>
          <option value={true}>Activo</option>
          <option value={false}>Inactivo</option>
        </select>

        <select name="tipo" id="tipo">
          <option value={true}>Tipo</option>
          <option value={true}>Largo plazo</option>
          <option value={false}>Corto plazo</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddContractPage;
