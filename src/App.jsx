import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './firebase/Auth';
import Top from './pages/Top';
import Map from './pages/Map';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/map" element={<Map />} />
          <Route path="*" element={<h1>Not Found Page</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
