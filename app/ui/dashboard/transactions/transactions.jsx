import Image from "next/image";
import styles from "./transactions.module.css";
import { fetchProjects } from "@/app/lib/data";
import { fetchEmployees } from "@/app/lib/data";
import { fetchClients } from "@/app/lib/data";
import { fetchContracts } from "@/app/lib/data";

const Transactions = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { projects } = await fetchProjects(q, page);
  const { employees } = await fetchEmployees(q, page);
  const { clients } = await fetchClients(q, page);
  const { contracts } = await fetchContracts(q, page);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Campos Generales </h2>
      <table className={styles.table}>
        <thead className={styles.tr}>
          <tr >
            <td>Proyectos</td>
            <td>Trabajadores</td>
            <td>Clientes</td>
            <td>Contratos</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {projects.map((project) => (
                <div className={styles.user} key={project.id}>
                  {project.nombre}
                </div>
              ))}
            </td>
            <td>
              {employees.map((employee) => (
                <div className={styles.user} key={employee.id}>
                  {employee.nombre}
                </div>
              ))}
            </td>
         
            <td>
              {clients.map((client) => (
                <div className={styles.user} key={client.id}>
                  {client.nombre}
                </div>
              ))}
            </td>
            <td>
              {contracts.map((contract) => (
                <div className={styles.user} key={contract.id}>
                  {contract.titulo}
                </div>
              ))}
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
