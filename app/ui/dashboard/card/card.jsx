import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";


// Card component
const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
      <MdSupervisedUserCircle size={50} />
      </div>
     
      <div className={styles.texts}>
        <span className={styles.title}>Total users </span>
        <span className={styles.number}>10.3654</span>
        <span className={styles.detail}>
          <span className={styles.positive} >12%</span> more than last month
        </span>
      </div>
    </div>
  );
};

export default Card;