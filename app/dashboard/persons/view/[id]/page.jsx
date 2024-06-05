import { fetchPerson } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";



const SinglePersonPage = async ({ params }) => {
  const { id } = params;
  const person = await fetchPerson(id);

  return (
    <div className={styles.container}>
      <div>
        <h1>{person.nombre} {person.apellido}</h1>
        <p>Teléfono: {person.telefono}</p>
        <p>Correo: {person.correo}</p>
        <p>Dirección: {person.direccion}</p>
        <p>Edad: {person.edad}</p>
      </div>
    </div>
  );
};

export default SinglePersonPage;