import { fetchEmployee } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/viewProduct/viewProduct.module.css";



const SingleEmployeePage = async ({ params }) => {
  const { id } = params;
  const employee = await fetchEmployee(id);

  return (
    <div className={styles.container}>
      <div>
        <p>{employee.nombre}</p>
        <p>{employee.apellido}</p>
        <p>Teléfono: {employee.telefono}</p>
        <p>Correo: {employee.correo}</p>
        <p>Dirección: {employee.direccion}</p>
        <p>Edad: {employee.edad}</p>
        <p>Cargo: {employee.cargo}</p>
      </div>
    </div>
  );
};

export default SingleEmployeePage;