import "@/App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* din vanliga startsida på "/" */}
        <Route path="/" element={<HomePage />} />

        {/* fånga ALLA andra paths (inkl. /Ambulanta-Care-v1/) och skicka till "/" */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
