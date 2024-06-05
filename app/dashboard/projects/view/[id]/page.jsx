import { fetchProject } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";

const SingleProjectPage = async ({ params }) => {
  const { id } = params;
  const project = await fetchProject(id);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES"); // 'es-ES' para formato español
  };
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        
         <p>{project.nombre}</p>
         <p>Fecha de inicio: {formatDate(project.fechainicio)}</p>
        <p>Fecha de fin: {formatDate(project.fechafin)}</p>
         <p>{project.estado}</p>
        
         
      </div>
    </div>
  );
};

export default SingleProjectPage;
