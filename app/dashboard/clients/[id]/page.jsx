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
                    <h3>Nombre del cliente</h3>
                    <input type="text" name="nombre" placeholder={client.nombre} />
                    <h3>Apellido del cliente</h3>
                    <input type="text" name="apellido" placeholder={client.apellido} />
                    <h3>Teléfono del cliente</h3>
                    <input type="number" name="telefono" placeholder={client.telefono} />
                    <h3>Correo electrónico del cliente</h3>
                    <input type="email" name="correo" placeholder={client.correo} />
                    <h3>Dirección del cliente</h3>
                    <input type="text" name="direccion" placeholder={client.direccion} />
                    <h3>Edad del cliente</h3>
                    <input type="number" name="stock" placeholder={client.telefono} />

                    <button>ACTUALIZAR</button>
                </form>
            </div>
        </div>
    );
};

export default SingleClientPage;