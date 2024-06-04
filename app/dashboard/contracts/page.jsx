import React from "react";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchContracts } from "@/app/lib/data";
import { deleteContract } from "@/app/lib/actions";
import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";

const ContractsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, contracts } = await fetchContracts(q, page);
  console.log(contracts);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product" />
        <Link href="/dashboard/contracts/add">
          <button className={styles.addButton}>+</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Titulo</td>
            <td>Fecha Inicio</td>
            <td>Fecha Fin</td>
            <td>Estado</td>
            <td>Tipo</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {contracts.map((contract) => (
            <tr key={contract.id}>
              <td>{contract.titulo}</td>
              <td>{contract.fechainicio?.toString().slice(4, 16)}</td>
              <td>{contract.fechafin?.toString().slice(4, 16)}</td>
              <td>{contract.estado}</td>
              <td>{contract.tipo}</td>

              <td>
                <div className={styles.buttons}>
                  <button className={`${styles.button} ${styles.ver}`}>
                    <FaEye size={23} />
                  </button>
                  <Link href={`/dashboard/contracts/${contract.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      <MdEdit size={23} />
                    </button>
                  </Link>
                  <form action={deleteContract}>
                    <input type="hidden" name="id" value={contract.id} />
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

export default ContractsPage;
