import { fetchProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div>
        <h1>{product.title}</h1>
        <p>Price: {product.price}</p>
        <p>Stock: {product.stock}</p>
        <p>Color: {product.color}</p>
        <p>Size: {product.size}</p>
        <p>Category: {product.cat}</p>
        <p>Description: {product.desc}</p>
      </div>
    </div>
  );
};

export default SingleProductPage;