import { fetchContract } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/viewProduct/viewProduct.module.css";

const SingleContractPage = async ({ params }) => {
  const { id } = params;
  const contract = await fetchContract(id);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES"); // 'es-ES' para formato español
  };

  return (
    <div className={styles.container}>
      <div className={styles.employeeInfo}>
        <div className={styles.header}>
          <h2>{contract.titulo}</h2>
        </div>
        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span className={styles.label}>Fecha de inicio:</span>
            <span className={styles.value}>
              {formatDate(contract.fechainicio)}
            </span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Fecha de fin:</span>
            <span className={styles.value}>
              {formatDate(contract.fechafin)}
            </span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Estado:</span>
            <span className={styles.value}>{contract.estado}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Tipo:</span>
            <span className={styles.value}>{contract.tipo}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Empleado:</span>
            <span className={styles.value}>{contract.empleadoNombre}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Cliente:</span>
            <span className={styles.value}>{contract.clienteNombre}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Proyecto:</span>
            <span className={styles.value}>{contract.projectNombre}</span>
          </div>
        </div>
        <button className={styles.button}>Imprimir</button>
      </div>
      <div className={styles.img}>
        <img
          src="https://images.pexels.com/photos/5668837/pexels-photo-5668837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Contract"
        />
           
      </div>
  
    </div>
  );
};

export default SingleContractPage;