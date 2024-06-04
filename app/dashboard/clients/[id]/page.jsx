import { fetchClient } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
import { updateClient } from "@/app/lib/actions";

const SingleClientPage = async ({ params }) => {
    const { id } = params;
    const client = await fetchClient(id);

    return (
        <div className={styles.container}>

            <div className={styles.formContainer}>
                <form action={updateClient} className={styles.form}>
                    <input type="hidden" name="id" value={client.id} />
                    <label>Nombre</label>
                    <input type="text" name="nombre" placeholder={client.nombre} />
                    <label>Apellido</label>
                    <input type="text" name="apellido" placeholder={client.apellido} />
                    <label>Telefono</label>
                    <input type="number" name="telefono" placeholder={client.telefono} />
                    <label>correo</label>
                    <input type="email" name="correo" placeholder={client.correo} />
                    <label>direccion</label>
                    <input type="text" name="direccion" placeholder={client.direccion} />
                    <label>edad</label>
                    <input type="number" name="stock" placeholder={client.telefono} />

                    <button>Update</button>
                </form>
            </div>
        </div>
    );
};

export default SingleClientPage;