import React from "react";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchProjects } from "@/app/lib/data";
import { deleteProject } from "@/app/lib/actions";
import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";

const ProjectsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, projects } = await fetchProjects(q, page);
  console.log(projects);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product" />
        <Link href="/dashboard/projects/add">
          <button className={styles.addButton}>+</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Fecha Inicio</td>
            <td>Fecha Fin</td>
            <td>Estado</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.nombre}</td>
              <td>{project.fechainicio?.toString().slice(4, 16)}</td>
              <td>{project.fechafin?.toString().slice(4, 16)}</td>
              <td>{project.estado}</td>

              <td>
                <div className={styles.buttons}>
                  <button className={`${styles.button} ${styles.ver}`}>
                    <FaEye size={23} />
                  </button>
                  <Link href={`/dashboard/projects/${project.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      <MdEdit size={23} />
                    </button>
                  </Link>
                  <form action={deleteProject}>
                    <input type="hidden" name="id" value={project.id} />
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

export default ProjectsPage;
