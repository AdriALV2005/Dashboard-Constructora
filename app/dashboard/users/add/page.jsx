import { addUser } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <div className={styles.formcompl}>
          <div className={styles.column}>
            <h3>hola</h3>
            <input type="text" placeholder="username" name="username" required />
            <h3>hola</h3>
            <input type="email" placeholder="email" name="email" required />
            <h3>hola</h3>
            <input
              type="password"
              placeholder="password"
              name="password"
              required
            />
             </div>
          <div className={styles.column}>
          <h3>hola</h3>
            <input type="phone" placeholder="phone" name="phone" />
            <h3>hola</h3>
            <select name="isAdmin" id="isAdmin" required>
              <option value={false} >
                Is Admin?
              </option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
            <h3>hola</h3>
            <select name="isActive" id="isActive" required>
              <option value={true} >
                Is Active?
              </option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
        </div>
        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
