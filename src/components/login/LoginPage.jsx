import React, { useState } from "react";
import { Link } from "react-router-dom";
import Title from "../../layout/home/Title";
import Background from "../../layout/home/background";
import "./LoginPage.css";
import { WhiteButton } from "../../layout/WhiteButton";
import HotModalSheet from "../hotModalSheet/HotModalSheet";
import SignInModal from "../sign/SignInModal";

function LoginPage() {
  const [isOpen, setIsOpen] = useState(false); //マーカー選択

  const [position, setPosition] = useState({ latitude: null, longitude: null });

  const handleSignIn = () => {
    console.log("hello");
    setIsOpen(true)
  };
  const handleSignUp = () => {
    console.log("app");
  };
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "15rem",
          right: 0,
          left: 0,
          margin: "0 auto",
        }}
      >
        <Title />
        <span className="explanation">
          HottoSpot<span className="explanation-hello">へようこそ</span>
        </span>
        <div className="sign-in">
          <WhiteButton color="red" onClick={handleSignIn}>
            サインイン
          </WhiteButton>
        </div>
        <div className="sign-out">
          <WhiteButton color="red" onClick={handleSignUp}>
            サインアップ
          </WhiteButton>
        </div>
      </div>

      <SignInModal
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        setPosition={setPosition}
        position={position}
      />
    </div>
  );
}

export default LoginPage;
