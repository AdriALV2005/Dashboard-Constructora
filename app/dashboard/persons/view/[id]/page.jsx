import { fetchPerson } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/viewProduct/viewProduct.module.css";

const SinglePersonPage = async ({ params }) => {
  const { id } = params;
  const person = await fetchPerson(id);

  return (
    <div className={styles.container}>
      <div className={styles.employeeInfo}>
        <div className={styles.header}>
          <h2>{person.nombre} {person.apellido}</h2>
        </div>
        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span className={styles.label}>Teléfono:</span>
            <span className={styles.value}>{person.telefono}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Correo:</span>
            <span className={styles.value}>{person.correo}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Dirección:</span>
            <span className={styles.value}>{person.direccion}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Edad:</span>
            <span className={styles.value}>{person.edad}</span>
          </div>
        </div>
      </div>
      <div className={styles.img}>
        <img src="https://images.pexels.com/photos/2682452/pexels-photo-2682452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Person" />
      </div>
    </div>
  );
};

export default SinglePersonPage;