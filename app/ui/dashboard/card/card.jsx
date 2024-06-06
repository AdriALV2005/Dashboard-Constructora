import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";
import { fetchProjects, fetchEmployees, fetchClients, fetchContracts } from "@/app/lib/data";
// Card component
const Card = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count: projectCount } = await fetchProjects(q, page);
  const { count: clientCount } = await fetchClients(q, page);
  const { count: employeeCount } = await fetchEmployees(q, page);
  const { count: contractCount } = await fetchContracts(q, page);
  return (
    <>
      {/* First Card */}
      <div className={styles.container}>
        <div className={styles.icons}>
          <MdSupervisedUserCircle size={50} />
        </div>{" "}
        <div className={styles.texts}>
          <span className={styles.title}>Proyectos</span>
          <span className={styles.number}>{projectCount}</span>
          <span className={styles.detail}>
            <span className={styles.positive}>12%</span> more than last month
          </span>
        </div>
      </div>

      {/* Second Card */}
      <div className={styles.container}>
        <div className={styles.icons}>
          <MdSupervisedUserCircle size={50} />
        </div>
        <div className={styles.texts}>
          <span className={styles.title}>Trabajadores</span>
          <span className={styles.number}>{employeeCount}</span>
          <span className={styles.detail}>Some detail</span>
        </div>
      </div>

      {/* Third Card */}
      <div className={styles.container}>
        <div className={styles.icons}>
          <MdSupervisedUserCircle size={50} />
        </div>
        <div className={styles.texts}>
          <span className={styles.title}>Clientes</span>
          <span className={styles.number}>{clientCount}</span>
          <span className={styles.detail}>Some detail</span>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.icons}>
          <MdSupervisedUserCircle size={50} />
        </div>
        <div className={styles.texts}>
          <span className={styles.title}>Contratos</span>
          <span className={styles.number}>{contractCount }</span>
          <span className={styles.detail}>Some detail</span>
        </div>
      </div>
    </>
  );
};

export default Card;
