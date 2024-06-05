import { addProduct } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <div className={styles.formcompl}>
          <div className={styles.column}>
            <h3>hola</h3>
            <input type="text" placeholder="title" name="title" required />
            <h3>hola</h3>
            <select name="cat" id="cat" required>
              <option value="general">Choose a Category</option>
              <option value="gato1">Gato 1</option>
              <option value="gato2">Gato 2</option>
              <option value="gato3">Gato 3</option>
            </select>
            <h3>hola</h3>
            <input type="number" placeholder="price" name="price" />
          </div>
          <div className={styles.column}>
            <h3>hola</h3>
            <input type="number" placeholder="stock" name="stock" />
            <h3>hola</h3>
            <input type="text" placeholder="color" name="color" />
            <h3>hola</h3>
            <input type="text" placeholder="size" name="size" />
          </div>
        </div>

        <textarea
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
