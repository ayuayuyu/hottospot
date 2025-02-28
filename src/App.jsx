import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Top from "./pages/Top";
import Map from "./pages/Map";
import Ranking from "./pages/Ranking";
import Login from "./pages/Login";
import FriendsModalSheet from "./components/friendsModalSheet/FriendsModalSheet";
import "./App.css";
import Auth from "./firebase/Auth";
import Profile from "./pages/Profile";
import Element from "./pages/Element";
import AddFriends from "./pages/AddFriends";
import DisplayQrCode from "./pages/DisplayQrCode";
import QrCodeScan from "./pages/QrCodeScan";
import NotFound from "./pages/NotFound";
import AlbumMap from "./pages/AlbumMap";

// import AlbumMap from "./pages/AlbumMap";

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/displayqr" element={<DisplayQrCode />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/sign" element={<Element />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addfriends" element={<AddFriends />} />
          <Route path="/scanqr" element={<QrCodeScan />} />
          <Route path="/albummap" element={<AlbumMap />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
