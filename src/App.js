import Search from "./Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Search />
      <footer>
        {" "}
        <a href="/"> Open-sourced in Github</a> and hosted on{" "}
        <a href="/">Netlify</a>
      </footer>
    </div>
  );
}

export default App;
