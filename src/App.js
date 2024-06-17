import Search from "./Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Search />
      <footer>
        {" "}
        <a
          href="https://github.com/Lebo1094/react-github-homework"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Open-sourced in Github
        </a>{" "}
        and hosted on{" "}
        <a href="/" target="blank" rel="noreferrer">
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
