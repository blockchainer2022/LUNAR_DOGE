import { useEffect } from "react";
import Home from "./pages/Home";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
