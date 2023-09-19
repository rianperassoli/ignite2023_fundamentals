import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";

import sidebarLand from "../assets/sidebar-land.png";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={sidebarLand} alt="sidebar-land" />

      <div className={styles.profile}>
        <Avatar
          src="https://github.com/rianperassoli.png"
          alt="profile image"
        />
        <strong>Rian Perassoli</strong>
        <span>Web Develop</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} /> Edit your profile
        </a>
      </footer>
    </aside>
  );
}
