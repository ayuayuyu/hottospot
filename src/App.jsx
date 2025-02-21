import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Top from "./pages/Top";
import Map from "./pages/Map";
import Ranking from "./pages/Ranking";
import Login from "./pages/Login";
import FriendsModalSheet from "./components/friendsModalSheet/FriendsModalSheet";
import './App.css';
import Auth from './firebase/Auth';
import Element from "./pages/Element";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/map" element={<Map />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/friendsmodal" element={<FriendsModalSheet />} />
          <Route path="*" element={<h1>Not Found Page</h1>} />
          <Route path="/sign" element={<Element />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
