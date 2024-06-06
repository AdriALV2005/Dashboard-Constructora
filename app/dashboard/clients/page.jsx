import React from "react";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchClients } from "@/app/lib/data";
import { deleteClient } from "@/app/lib/actions";
import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";

const ClientsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, clients } = await fetchClients(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Buscar un cliente ..." />
        <Link href="/dashboard/clients/add">
          <button className={styles.addButton}>+</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Apellido</td>
            <td>Teléfono</td>
            <td>Correo</td>
            <td>Acción</td>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.nombre}</td>
              <td>{client.apellido}</td>
              <td>{client.telefono}</td>
              <td>{client.correo}</td>
              <td>
                <div className={styles.buttons}>
                <Link href={`/dashboard/clients/view/${client.id}`}>
                  <button className={`${styles.button} ${styles.ver}`}>
                    <FaEye size={23} />
                  </button>
                </Link>
                  <Link href={`/dashboard/clients/${client.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      <MdEdit size={23} />
                    </button>
                  </Link>
                  <form action={deleteClient}>
                    <input type="hidden" name="id" value={client.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      <MdDelete size={23} />
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default ClientsPage;
