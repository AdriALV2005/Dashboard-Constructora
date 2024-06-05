import { fetchProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import { updateProduct } from "@/app/lib/actions";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>

      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <div className={styles.formcompl}>
            <div className={styles.column}>

              <input type="hidden" name="id" value={product.id} />
              <h3>hola</h3>
              <input type="text" name="title" placeholder={product.title} />
              <h3>hola</h3>

              <input type="number" name="price" placeholder={product.price} />

              <h3>hola</h3>
              <input type="number" name="stock" placeholder={product.stock} />
            </div>
            <div className={styles.column}>
              <h3>hola</h3>
              <input
                type="text"
                name="color"
                placeholder={product.color || "color"}
              />
              <h3>hola</h3>
              <input
                type="text"
                name="size"
                placeholder={product.size || "size"}
              />
              <h3>hola</h3>
              <select name="cat" id="cat">
                <option value="kitchen">Kitchen</option>
                <option value="computers">Computers</option>
              </select>
            </div>
          </div>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={product.desc}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;