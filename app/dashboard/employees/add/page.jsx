import { addEmployee } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddEmployeePage = () => {

  return (
    <div className={styles.container}>
      <form action={addEmployee} className={styles.form}>
       
        <input type="text" placeholder="nombre" name="nombre" required />
      
       
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddEmployeePage;
