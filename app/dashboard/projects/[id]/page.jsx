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

          <input
            type="text"
            placeholder={project.nombre}
            id="nombre"
            name="nombre"
            required
          />

          <input
            type="date"
            placeholder={project.fechainicio}
            id="fechainicio"
            name="fechainicio"
            required
          />

          <input
            type="date"
            placeholder={project.fechafin}
            id="fechafin"
            name="fechafin"
            required
          />

          <input
            type="text"
            placeholder={project.estado}
            id="estado"
            name="estado"
          />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProjectPage;
