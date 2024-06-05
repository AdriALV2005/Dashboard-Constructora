import React from "react";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchPersons } from "@/app/lib/data";
import { deletePerson } from "@/app/lib/actions";
import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";

const PersonsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, persons } = await fetchPersons(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user" />
        <Link href="/dashboard/persons/add">
          <button className={styles.addButton}>+</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Apellido</td>
            <td>Telefono</td>
            <td>Correo</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person.id}>
              <td>{person.nombre}</td>
              <td>{person.apellido}</td>
              <td>{person.telefono}</td>
              <td>{person.correo}</td>
              <td>
                <div className={styles.buttons}>
                <Link href={`/dashboard/persons/view/${person.id}`}>
                  <button className={`${styles.button} ${styles.ver}`}>
                    <FaEye size={23} />
                  </button>
                </Link>
                  <Link href={`/dashboard/persons/${person.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      <MdEdit size={23} />
                    </button>
                  </Link>
                  <form action={deletePerson}>
                    <input type="hidden" name="id" value={person.id} />
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

export default PersonsPage;
