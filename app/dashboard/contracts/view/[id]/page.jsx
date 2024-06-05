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
      <div className={styles.formContainer}>
        <input type="hidden" name="id" value={contract.id} />
        <p>{contract.titulo}</p>
        <p>Fecha de inicio: {formatDate(contract.fechainicio)}</p>
        <p>Fecha de fin: {formatDate(contract.fechafin)}</p>
        <p>{contract.estado}</p>
        <p>{contract.tipo}</p>
        <p>{contract.empleadoNombre}</p>
        <p>{contract.clienteNombre}</p>
        <p>{contract.projectNombre}</p>
      </div>
    </div>
  );
};

export default SingleContractPage;
