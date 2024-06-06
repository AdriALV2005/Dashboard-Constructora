import { fetchContract, fetchEmployees, fetchClients, fetchProjects } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import { updateContract } from "@/app/lib/actions";

const SingleContractPage = async ({ params, searchParams }) => {
  const { id } = params;
  const contract = await fetchContract(id);
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { employees } = await fetchEmployees(q, page);
  const { clients } = await fetchClients(q, page);
  const { projects } = await fetchProjects(q, page);
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form action={updateContract} className={styles.form}>
        <div className={styles.formcompl}>
          <div className={styles.column}>
          <h3>Título del contrato</h3>
          <input
            type="text"
            placeholder={contract.titulo}
            id="titulo"
            name="titulo"
            required
          />
          <h3>Fecha de inicio del contrato</h3>
          <input
            type="date"
            placeholder={contract.fechainicio}
            id="fechainicio"
            name="fechainicio"
            required
          />
          <h3>Fecha de fin del contrato</h3>
          <input
            type="date"
            placeholder={contract.fechafin}
            id="fechafin"
            name="fechafin"
            required
          />
          <h3>Estado del contrato</h3>
          <select name="estado" id="estado">
            <option value={true}>Estado</option>
            <option value={true}>Activo</option>
            <option value={false}>Inactivo</option>
          </select>
          </div>
          <div className={styles.column}>
          <h3>Tipo de contrato</h3>
          <select name="tipo" id="tipo">
            <option value={true}>Tipo</option>
            <option value={true}>Largo plazo</option>
            <option value={false}>Corto plazo</option>
          </select>
          <h3>Empleado encargado</h3>
          <select name="empleadoNombre" id="empleadoNombre">
            {employees.map((employee) => (
              <option key={employee.nombre} value={employee.nombre}>
                {employee.nombre}
              </option>
            ))}
          </select>
          <h3>Cliente del contrato</h3>
          <select name="clienteNombre" id="clienteNombre">
            {clients.map((client) => (
              <option key={client.nombre} value={client.nombre}>
                {client.nombre}
              </option>
            ))}
          </select>
          <h3>Proyecto del contrato</h3>
          <select name="projectNombre" id="projectNombre">
            {projects.map((project) => (
              <option key={project.nombre} value={project.nombre}>
                {project.nombre}
              </option>
            ))}
          </select>
          </div>
        </div>
          <button>ACTUALIZAR</button>
        </form>
      </div>
    </div>
  );
};

export default SingleContractPage;
