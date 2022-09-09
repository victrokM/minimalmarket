import "./App.css";
import Aside from "./components/Aside";
import Home from "./views/Home";


function App() {
  return (
    <div className="App">
      <div>
        <Aside />
        <Home />
      </div>
    </div>
  );
}

export default App;
