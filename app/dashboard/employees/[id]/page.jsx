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
          <h3>Nombre del trabajador</h3>
          <input type="text" name="nombre" placeholder={employee.nombre} />
          <h3>Apellido del trabajador</h3>
          <input type="text" name="apellido" placeholder={employee.apellido} />
          <h3>Teléfono del trabajador</h3>
          <input type="number" name="telefono" placeholder={employee.telefono} />
          <h3>Correo electrónico del trabajador</h3>
          <input type="email" name="correo" placeholder={employee.correo} />
          <h3>Dirreción del trabajador</h3>
          <input type="text" name="direccion" placeholder={employee.direccion} />
          <h3>Edad del trabajador</h3>
          <input type="number" name="stock" placeholder={employee.telefono} />
          <h3>Cargo del trabajador</h3>
          <input type="text" name="stock" placeholder={employee.cargo} />
          <button>ACTUALIZAR</button>
        </form>
      </div>
    </div>
  );
};

export default SingleEmployeePage;