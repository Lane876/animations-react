import "./App.css";
import Navbar from "./components/Navbar";
import TopButton from "./components/TopButton";
import First from "./screens/First";
import Second from "./screens/Second";
import Third from "./screens/Third";

function App() {
  return (
    <div className="App">
      <Navbar showBelow={200} />
      <TopButton showBelow={400} />
      <First />
      <Second />
      <Third />
    </div>
  );
}

export default App;
