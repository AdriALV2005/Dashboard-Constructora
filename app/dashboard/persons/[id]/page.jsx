import { fetchPerson } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import { updatePerson } from "@/app/lib/actions";

const SinglePersonPage = async ({ params }) => {
    const { id } = params;
    const person = await fetchPerson(id);

    return (
        <div className={styles.container}>

            <div className={styles.formContainer}>
                <form action={updatePerson} className={styles.form}>
                    <input type="hidden" name="id" value={person.id} />
                    <label>Nombre</label>
                    <input type="text" name="nombre" placeholder={person.nombre} />
                    <label>Apellido</label>
                    <input type="text" name="apellido" placeholder={person.apellido} />
                    <label>Telefono</label>
                    <input type="number" name="telefono" placeholder={person.telefono} />
                    <label>correo</label>
                    <input type="email" name="correo" placeholder={person.correo} />
                    <label>direccion</label>
                    <input type="text" name="direccion" placeholder={person.direccion} />
                    <label>edad</label>
                    <input type="number" name="edad" placeholder={person.telefono} />

                    <button>Update</button>
                </form>
            </div>
        </div>
    );
};

export default SinglePersonPage;