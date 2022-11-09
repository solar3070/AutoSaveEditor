import PostPage from "./PostPage.js";

export default function App({ $target }) {
  const postsPage = new PostPage({ $target });

  postsPage.render();
}
