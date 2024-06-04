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

        <input type="text" placeholder="estado" id="estado" name="estado" />

        <input type="text" placeholder="tipo" id="tipo" name="tipo" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddContractPage;
