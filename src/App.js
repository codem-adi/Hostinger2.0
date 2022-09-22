import "./style/App.css";
import English from "./sites/English.js";
// import Hindi from "./sites/Hindi.js";
// import Urdu from "./sites/Urdu.js";
// import Russian from "./sites/Russian.js";
// import Spanish from "./sites/Spanish.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<English />} />

          {/* <Route path="/Hindi" element={<Hindi />} />

          <Route path="/Urdu" element={<Urdu />} />

          <Route path="/Russian" element={<Russian />} />

          <Route path="/Spanish" element={<Spanish />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
