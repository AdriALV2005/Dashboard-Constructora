import { fetchProject } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import { updateProject } from "@/app/lib/actions";

const SingleProjectPage = async ({ params }) => {
  const { id } = params;
  const project = await fetchProject(id);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form action={updateProject} className={styles.form}>
          <input type="hidden" name="id" value={project.id} />
          <h3>Nombre del proyecto</h3>
          <input
            type="text"
            placeholder={project.nombre}
            id="nombre"
            name="nombre"
            required
          />
          <h3>Fecha de inicio del proyecto</h3>
          <input
            type="date"
            placeholder={project.fechainicio}
            id="fechainicio"
            name="fechainicio"
            required
          />
          <h3>Fecha de fin del proyecto</h3>
          <input
            type="date"
            placeholder={project.fechafin}
            id="fechafin"
            name="fechafin"
            required
          />
          <h3>Estado del proyecto</h3>
          <select name="estado" id="estado">
            <option value="Comenzando">Comenzando</option>
            <option value="En proceso">En Proceso</option>
            <option value="Terminado">Terminado</option>
          </select>
          <button>ACTUALIZAR</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProjectPage;
