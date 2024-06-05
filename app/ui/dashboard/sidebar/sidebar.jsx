import React from "react";
import styles from "./sidebar.module.css";
import Image from "next/image";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdLogout,
} from "react-icons/md";
import { FaProjectDiagram  } from "react-icons/fa";
import MenuLink from "./menuLink/menuLink";
import { auth } from "@/app/auth";
import { signOut } from "../../../auth";

const menuItems = [
  {
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Administradores",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      // {
      //   title: "Products",
      //   path: "/dashboard/products",
      //   icon: <MdShoppingBag />,
      // },
      {
        title: "Trabajadores",
        path: "/dashboard/employees",
        icon: <MdAnalytics />,
      },
      {
        title: "Clientes",
        path: "/dashboard/clients",
        icon: <MdPeople />,
      },
      {
        title: "Personas",
        path: "/dashboard/persons",
        icon: <MdPeople />,
      },
      {
        title: "Contratos",
        path: "/dashboard/contracts",
        icon: <MdWork />,
      },
      {
        title: "Proyectos",
        path: "/dashboard/projects",
        icon: <FaProjectDiagram  />,
      },
    ],
  },
];

const Sidebar = async () => {
  const { user } = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={user.img || "/noavatar.png"}
          alt="sad"
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>{user.username}</span>
          <span className={styles.userTitle}>{user.email}</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>

      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className={styles.logout}>
          <MdLogout />
          Cerrar sesión
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
