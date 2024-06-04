import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";
import { fetchProducts } from "@/app/lib/data";
import { fetchEmployees } from "@/app/lib/data";
import { fetchClients } from "@/app/lib/data";
// Card component
const Card = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count: productCount } = await fetchProducts(q, page);
  const {count: clientCount} = await fetchClients(q, page);
  const { count: employeeCount } = await fetchEmployees();
  return (
    <>
      {/* First Card */}
      <div className={styles.container}>
        <div className={styles.icons}>
          <MdSupervisedUserCircle size={50} />
        </div>{" "}
        <div className={styles.texts}>
          <span className={styles.title}>Products</span>
          <span className={styles.number}>{productCount}</span>
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
          <span className={styles.number}>{clientCount}</span>
          <span className={styles.detail}>Some detail</span>
        </div>
      </div>
    </>
  );
};

export default Card;
