import { addEmployee } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddEmployeePage = () => {

  return (
    <div className={styles.container}>
      <form action={addEmployee} className={styles.form}>
       
      <input type="text" id="nombre" placeholder="nombre" name="nombre" minlength="3" maxlength="20" required/>
<input type="text" placeholder="apellido" id="apellido" name="apellido" minlength="3" maxlength="20" required/>
<input type="text" placeholder="telefono"  name="telefono" minlength="3" maxlength="20" required/>
<input type="email" placeholder="correo" name="correo" required/>
<input type="text"placeholder="direccion" name="direccion"/>
<input type="number" placeholder="edad" name="edad" min="0"/>
<input type="text" placeholder="cargo" name="cargo"/>

      
       
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddEmployeePage;
