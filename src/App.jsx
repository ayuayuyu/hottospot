import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Top from "./pages/Top";
import Map from "./pages/Map";
import Ranking from "./pages/Ranking";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/map" element={<Map />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="*" element={<h1>Not Found Page</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
