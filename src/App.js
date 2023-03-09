import logo from "./logo.svg";
import "./App.css";
import Abv from "./components/Abv";
import Ibu from "./components/Ibu";

function App() {
  return (
    <div className="App">
      <h1 className="beer-head">Beer Calculations</h1>
      <Abv />
      <br />
      <br />
      <Ibu />

      <h2 className="hops-chart-head">Hops Utilization Chart</h2>

      <img className="bitter-image" src="/bitterness-chart.jpeg" />
    </div>
  );
}

export default App;
