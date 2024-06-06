import { fetchProject } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/viewProduct/viewProduct.module.css";

const SingleProjectPage = async ({ params }) => {
  const { id } = params;
  const project = await fetchProject(id);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES"); // 'es-ES' para formato español
  };

  return (
    <div className={styles.container}>
      <div className={styles.employeeInfo}>
        <div className={styles.header}>
          <h2>{project.nombre}</h2>
        </div>
        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span className={styles.label}>Fecha de inicio:</span>
            <span className={styles.value}>
              {formatDate(project.fechainicio)}
            </span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Fecha de fin:</span>
            <span className={styles.value}>
              {formatDate(project.fechafin)}
            </span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Estado:</span>
            <span className={styles.value}>{project.estado}</span>
          </div>
        </div>
      </div>
      <div className={styles.img}>
        <img
          src="https://images.pexels.com/photos/4571558/pexels-photo-4571558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Project"
        />
      </div>
    </div>
  );
};

export default SingleProjectPage;