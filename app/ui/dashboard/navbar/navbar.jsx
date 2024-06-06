"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

const Navbar = () => {
  const pathname = usePathname();
  let title = pathname.split("/").pop();

  if (pathname === "/dashboard") {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    let greeting;
    if (currentHour >= 5 && currentHour < 12) {
      greeting = "Buenos días";
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = "Buenas tardes";
    } else {
      greeting = "Buenas noches";
    }

    title = `${greeting}, admin`;


  } else if (pathname === "/dashboard/users") {
    title = "Administrador de usuarios";
  } else if (pathname.startsWith("/dashboard/users/add")) {
    title = "Agregar usuario nuevo";
  

  } else if (pathname.startsWith("/dashboard/employees")) {
    title = "Trabajadores";
  } else if (pathname.startsWith("/dashboard/employees/add")) {
    title = "Agregar trabajador nuevo";

  } else if (pathname.startsWith("/dashboard/clients")) {
    title = "Clientes";
  } else if (pathname.startsWith("/dashboard/clients/add")) {
    title = "Agregar cliente nuevo";

  }else if (pathname.startsWith("/dashboard/contracts")) {
    title = "Contratos";
  }else if (pathname.startsWith("/dashboard/contracts/add")) {
    title = "Agregar contrato nuevo";


  } else if (pathname.startsWith("/dashboard/projects")) {
    title = "Proyectos";
  } else if (pathname.startsWith("/dashboard/projects/add")) {
    title = "Agregar proyecto nuevo";
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default Navbar;
