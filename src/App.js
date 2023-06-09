import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OptionChain from "./screens/OptionChain";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="*" element={<OptionChain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
