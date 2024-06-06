import { fetchClient } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/viewProduct/viewProduct.module.css";

const SingleClientPage = async ({ params }) => {
  const { id } = params;
  const client = await fetchClient(id);

  return (
    <div className={styles.container}>
      <div className={styles.employeeInfo}>
        <div className={styles.header}>
          <h2>{client.nombre} {client.apellido}</h2>
        </div>
        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span className={styles.label}>Teléfono:</span>
            <span className={styles.value}>{client.telefono}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Correo:</span>
            <span className={styles.value}>{client.correo}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Dirección:</span>
            <span className={styles.value}>{client.direccion}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Edad:</span>
            <span className={styles.value}>{client.edad}</span>
          </div>
        </div>
      </div>
      <div className={styles.img}>
        <img src="https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Client" />
      </div>
    </div>
  );
};

export default SingleClientPage;