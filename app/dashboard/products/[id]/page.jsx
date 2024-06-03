import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = async() => {

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="Lupita2005" />
          <label>Price</label>
          <input type="number" name="price" placeholder="Lupita2005@gmail.com" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="Lupita2005" />
          <label>Color</label>
          <input type="text" name="color" placeholder="+51965229225" />
          <label>Size</label>
          <textarea type="text" name="size" placeholder="Puente piedra" />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">kitchen</option>
            <option value="computer">computer</option>
          </select>
          <label>Description</label>
         <textarea name="desc" id="desc" rows="10" placeholder="Description"></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
