import React from "react";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchEmployees } from "@/app/lib/data";
import { deleteEmployee  } from "@/app/lib/actions";
import { MdDelete } from "react-icons/md";

const EmployeesPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, employees } = await fetchEmployees(q, page);

  return (

    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user" />
        <Link href="/dashboard/employees/add">
          <button className={styles.addButton}>+</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
          
            <td>Nombre</td>
            <td>Apellido</td>
            <td>Telefono</td>
            <td>Cargo</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
             
              <td>{employee.nombre}</td>
              <td>{employee.apellido}</td>
              <td>{employee.telefono}</td>
              <td>{employee.cargo}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/employees/${employee.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                    <FaRegEdit size={20}/>
                    </button>
                  </Link>
                  <form action={deleteEmployee}>
                    <input type="hidden" name="id" value={employee.id} />
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

export default EmployeesPage;
