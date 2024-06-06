import { fetchUser } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/viewProduct/viewProduct.module.css";

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.employeeInfo}>
        <div className={styles.header}>
          <h2>{user.username}</h2>
        </div>
        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span className={styles.label}>Email:</span>
            <span className={styles.value}>{user.email}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Phone:</span>
            <span className={styles.value}>{user.phone}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Address:</span>
            <span className={styles.value}>{user.address}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Is Admin:</span>
            <span className={styles.value}>{user.isAdmin ? "Yes" : "No"}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Is Active:</span>
            <span className={styles.value}>{user.isActive ? "Yes" : "No"}</span>
          </div>
        </div>
      </div>
      <div className={styles.img}>
        <img src="https://images.pexels.com/photos/6804586/pexels-photo-6804586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="User" />
      </div>
    </div>
  );
};

export default SingleUserPage;