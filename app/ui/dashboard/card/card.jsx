import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>total users </span>
        <span className={styles.number}>10.3654</span>
        <span className={styles.detail}>
          <span className={styles.positive} >12%</span> more than last month
        </span>
      </div>
    </div>
  );
};

export default Card;