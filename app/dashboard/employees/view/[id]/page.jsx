import { fetchEmployee } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";



const SingleEmployeePage = async ({ params }) => {
  const { id } = params;
  const employee = await fetchEmployee(id);

  return (
    <div className={styles.container}>
      <div>
        <h1>{employee.nombre} {employee.apellido}</h1>
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