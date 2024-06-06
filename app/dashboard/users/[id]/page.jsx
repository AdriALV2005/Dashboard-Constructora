import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";

const SingleUserPage = async ({ params }) => {
  const { id } = params
  const user = await fetchUser(id);
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <div className={styles.formcompl}>
            <div className={styles.column}>
              <input type="hidden" name="id" value={user.id} />
              <label>Nombre de usuario</label>
              <input type="text" name="username" placeholder={user.username} />
              <label>Correo electrónico</label>
              <input type="email" name="email" placeholder={user.email} />
              <label>Contraseña</label>
              <input type="password" name="password" placeholder="Lupita2005" />
            </div>
            <div className={styles.column}>
              <label>Teléfono</label>
              <input type="text" name="phone" placeholder={user.phone} />
              <label>¿Es administrador?</label>
              <select name="isAdmin" id="isAdmin">
                <option value={true} select={user.isAdmin}>Sí</option>
                <option value={false} select={!user.isAdmin}>No</option>
              </select>
              <label>¿Es activo?</label>
              <select name="isActive" id="isActive">
                <option value={true} select={user.isActive}>Sí</option>
                <option value={false} select={!user.isActive}>No</option>
              </select>
            </div>
          </div>
          <label>Dirección</label>
          <textarea type="text" name="address" placeholder={user.address} />
          <button>ACTUALIZAR</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
