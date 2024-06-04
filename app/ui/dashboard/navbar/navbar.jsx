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
    title = "BRYAN PUTA";
  } else if (pathname === "/dashboard/products") {
    title = "BRYAN BONITO";
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default Navbar;
