import "./style/App.css";
import English from "./sites/English.js";
import Hindi from "./sites/Hindi.js";
import Urdu from "./sites/Urdu.js";
import Russian from "./sites/Russian.js";
import Spanish from "./sites/Spanish.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<English />} />

        <Route exact path="/Hindi" element={<Hindi />} />

        <Route exact path="/Urdu" element={<Urdu />} />

        <Route exact path="/Russian" element={<Russian />} />

        <Route exact path="/Spanish" element={<Spanish />} />
      </Routes>
    </div>
  );
}

export default App;
