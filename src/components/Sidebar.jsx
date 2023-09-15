import { PencilLine } from "phosphor-react";
import styles from "./Sidebar.module.css";

import sidebarLand from "../assets/sidebar-land.png";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={sidebarLand} alt="sidebar-land" />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/4731098?v=4"
          alt="profile image"
        />
        <strong>Rian Perassoli</strong>
        <span>Web Develop</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/> Edit your profile
        </a>
      </footer>
    </aside>
  );
}
