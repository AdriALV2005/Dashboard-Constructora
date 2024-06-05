import { fetchContract } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
import {updateContract} from "@/app/lib/actions";

const SingleContractPage = async ({ params }) => {
  const { id } = params;
  const contract = await fetchContract(id);

  return (
    <div className={styles.container}>
      
      <div className={styles.formContainer}>
        <form action={updateContract} className={styles.form}>
         
        <input type="hidden" name="id" value={contract.id} />
         <p>{contract.titulo}</p>
        <input
          type="text"
          placeholder={contract.titulo}
          id="titulo"
          name="titulo"
          required
        />

        <input
          type="date"
          placeholder={contract.fechainicio}
          id="fechainicio"
          name="fechainicio"
          required
        />

        <input
          type="date"
          placeholder={contract.fechafin}
          id="fechafin"
          name="fechafin"
          required
        />

        <input type="text" placeholder={contract.estado} id="estado" name="estado" />

        <input type="text" placeholder={contract.tipo} id="tipo" name="tipo" required />
       
        
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleContractPage;