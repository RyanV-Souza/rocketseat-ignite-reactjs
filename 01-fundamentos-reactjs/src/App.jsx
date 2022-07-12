import { Post } from "./Post";
import { Header } from "./components/Header";

import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Ryan Vieira Souza"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nesciunt
            culpa aspernatur nobis esse ea, pariatur repudiandae libero? Aspernatur
            optio, quasi inventore provident qui error fuga ipsa aut distinctio
            perferendis!"
          />
          <Post author="Ryan Vieira" content="23233232!" />
        </main>
      </div>
    </div>
  );
}
