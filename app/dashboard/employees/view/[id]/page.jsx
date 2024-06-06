import { fetchEmployee } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/viewProduct/viewProduct.module.css";



const SingleEmployeePage = async ({ params }) => {
  const { id } = params;
  const employee = await fetchEmployee(id);

  return (
    <div className={styles.container}>
      <div className={styles.employeeInfo}>
        <div className={styles.header}>
          <h2>{employee.nombre} {employee.apellido}</h2>
        </div>
        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span className={styles.label}>Teléfono:</span>
            <span className={styles.value}>{employee.telefono}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Correo:</span>
            <span className={styles.value}>{employee.correo}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Dirección:</span>
            <span className={styles.value}>{employee.direccion}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Edad:</span>
            <span className={styles.value}>{employee.edad}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Cargo:</span>
            <span className={styles.value}>{employee.cargo}</span>
          </div>
        </div>
      </div>
      <div className={styles.img}>
        <img src="https://images.pexels.com/photos/7256738/pexels-photo-7256738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Employee" />
      </div>
    </div>
  );
};

export default SingleEmployeePage;