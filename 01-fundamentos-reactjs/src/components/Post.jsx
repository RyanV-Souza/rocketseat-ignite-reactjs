import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/RyanV-Souza.png"
          />
          <div className={styles.authorInfo}>
            <strong> Ryan Vieira </strong>
            <span> Web Developer </span>
          </div>
        </div>

        <time title="12 de Julho às 08:01h" dateTime="2022-07-12 08:01:20">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          dicta totam a optio iste asperiores quos laborum dolores quam eius
          autem accusamus minus beatae consectetur est, suscipit reiciendis
          nesciunt distinctio?
        </p>
      </div>
    </article>
  );
}
