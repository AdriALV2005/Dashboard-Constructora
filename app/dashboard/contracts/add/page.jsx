import { addContract } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";
import { fetchClients, fetchEmployees, fetchProjects } from "@/app/lib/data";
fetchClients;

const AddContractPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { employees } = await fetchEmployees(q, page);
  const { clients } = await fetchClients(q, page);
  const { projects } = await fetchProjects(q, page);
  
  return (
    <div className={styles.container}>
      <form action={addContract} className={styles.form}>
      <div className={styles.formcompl}>
          <div className={styles.column}>
        <h3>hola</h3>
        <input
          type="text"
          placeholder="titulo"
          id="titulo"
          name="titulo"
          required
        />
        <h3>hola</h3>
        <input
          type="date"
          placeholder="fechainicio"
          id="fechainicio"
          name="fechainicio"
          required
        />
        <h3>hola</h3>
        <input
          type="date"
          placeholder="fechafin"
          id="fechafin"
          name="fechafin"
          required
        />
         </div>
          <div className={styles.column}>
        <h3>hola</h3>
        <select name="estado" id="estado">
          <option value={true}>Estado</option>
          <option value={true}>Activo</option>
          <option value={false}>Inactivo</option>
        </select>
        <h3>hola</h3>
        <select name="tipo" id="tipo">
          <option value={true}>Tipo</option>
          <option value={true}>Largo plazo</option>
          <option value={false}>Corto plazo</option>
        </select>
        <h3>hola</h3>
        <select name="empleadoNombre" id="empleadoNombre">
          {employees.map((employee) => (
            <option key={employee.nombre} value={employee.nombre}>
              {employee.nombre}
            </option>
          ))}
        </select>
         <select name="clienteNombre" id="clienteNombre">
          {clients.map((client) => (
            <option key={client.nombre} value={client.nombre}>
              {client.nombre}
            </option>
          ))}
        </select>
         <select name="projectNombre" id="projectNombre">
          {projects.map((project) => (
            <option key={project.nombre} value={project.nombre}>
              {project.nombre}
            </option>
          ))}
        </select>
        </div>
          </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddContractPage;
