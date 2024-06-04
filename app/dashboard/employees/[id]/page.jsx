import { fetchEmployee } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
import {updateEmployee} from "@/app/lib/actions";

const SingleEmployeePage = async ({ params }) => {
  const { id } = params;
  const employee = await fetchEmployee(id);

  return (
    <div className={styles.container}>
      
      <div className={styles.formContainer}>
        <form action={updateEmployee} className={styles.form}>
          <input type="hidden" name="id" value={employee.id} />
          <label>Nombre</label>
          <input type="text" name="nombre" placeholder={employee.nombre} />
          <label>Apellido</label>
          <input type="text" name="apellido" placeholder={employee.apellido} />
          <label>Telefono</label>
          <input type="number" name="telefono" placeholder={employee.telefono} />
         
          <label>correo</label>
          <input type="email" name="correo" placeholder={employee.correo} />
         
          <label>direccion</label>
          <input type="text" name="direccion" placeholder={employee.direccion} />
          <label>edad</label>
          <input type="number" name="stock" placeholder={employee.telefono} />
          <label>cargo</label>
          <input type="text" name="stock" placeholder={employee.cargo} />
         
         
        
       
        
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleEmployeePage;