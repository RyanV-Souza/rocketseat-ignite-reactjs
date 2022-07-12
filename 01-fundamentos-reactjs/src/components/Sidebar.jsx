import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1613376023733-0a73315d9b06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGFuaW1lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
      ></img>
      <div className={styles.profile}>
        <strong> Ryan Vieira</strong>
        <span> Developer</span>
      </div>

      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  );
}
