import { fetchClient } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";

const SingleClientPage = async ({ params }) => {
  const { id } = params;
  const client = await fetchClient(id);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <p>{client.nombre}</p>
        <p>{client.apellido}</p>
        <p>{client.telefono}</p>
        <p>{client.correo}</p>
        <p>{client.direccion}</p>
        <p>{client.telefono}</p>
      </div>
    </div>
  );
};

export default SingleClientPage;
