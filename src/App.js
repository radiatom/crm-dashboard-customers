import { Customers } from "./components/Customers/Customers";
import Nav from "./components/Nav/Nav";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header></header>
      <main className="container">
          <Nav />
          <div className="content">
            <Customers />
          </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
