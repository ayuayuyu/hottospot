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
  const [login, setLogin] = useState(false); //trueだったらサインインの選択
  const [position, setPosition] = useState({ latitude: null, longitude: null });

  const handleSignIn = () => {
    setIsOpen(true);
    setLogin(true);
  };
  const handleSignUp = () => {
    setIsOpen(true);
    setLogin(false);
  };
  return (
    <div>
      <div className="title">
        <Title />
      </div>
      <div className="sign">
        <span className="explanation">
          HottoSpot<span className="explanation-hello">へようこそ</span>
        </span>
        <div className="sign-in">
          <WhiteButton color="red" onClick={handleSignIn}>
            サインイン
          </WhiteButton>
        </div>
        <div className="sign-up">
          <WhiteButton color="red" onClick={handleSignUp}>
            サインアップ
          </WhiteButton>
        </div>
      </div>

      <SignInModal login={login} setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
}

export default LoginPage;
