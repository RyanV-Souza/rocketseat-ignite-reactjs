import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Post
        author="Ryan Vieira Souza"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nesciunt
        culpa aspernatur nobis esse ea, pariatur repudiandae libero? Aspernatur
        optio, quasi inventore provident qui error fuga ipsa aut distinctio
        perferendis!"
      />
      <Post author="Ryan Vieira" content="23233232!" />
    </div>
  );
}
