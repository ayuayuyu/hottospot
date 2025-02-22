import React, { useEffect, useState } from "react";
import Title from "../../layout/home/Title";
import { WhiteButton } from "../../layout/WhiteButton";
import HotModalSheet from "../hotModalSheet/HotModalSheet";
import SignInModal from "../sign/SignInModal";
import ModalSheet from "../../layout/ModalSheet";
import { motion } from "framer-motion";
import Sign from "../sign/Sign";
import style from "./LoginPage.module.scss";
import SignInGoole from "../../firebase/SignInGoole";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [isOpen, setIsOpen] = useState(false); //マーカー選択
  const [login, setLogin] = useState(false); //trueだったらサインインの選択
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [isSign, setIsSign] = useState(false);
  const navigate = useNavigate();

  const conectMap = async () => {
    navigate("/map");
  };

  const handleSignIn = () => {
    setIsOpen(true);
    setLogin(true);
  };
  const handleSignUp = () => {
    setIsOpen(true);
    setLogin(false);
  };

  const handleClick = () => {
    setIsOpen(false);
  };

  const afterGoogle = () => {
    console.log("aftergoogle");
    setIsSign(true);
  };

  if (isSign == true) {
    conectMap();
    console.log("isSign2", isSign);
  }
  // console.log("isSign", isSign);

  return (
    <div>
      {isOpen && <div className={style.modalOverlay} onClick={handleClick} />}
      <div className={style.title}>
        <Title />
      </div>
      <div className={style.sign}>
        <span className={style.explanation}>
          HottoSpot<span className={style.explanationHello}>へようこそ</span>
        </span>
        <div className={style.signIn}>
          <WhiteButton color="red" onClick={handleSignIn}>
            サインイン
          </WhiteButton>
        </div>
        <div className={style.signUp}>
          <WhiteButton color="red" onClick={handleSignUp}>
            サインアップ
          </WhiteButton>
        </div>
        <div className={style.google} onClick={afterGoogle}>
          <SignInGoole />
        </div>
      </div>
      <div className={style.form}>
        <ModalSheet setIsOpen={setIsOpen} isOpen={isOpen} height={550}>
          <Sign login={login} setLogin={setLogin} />
        </ModalSheet>
      </div>
      {/* <SignInModal login={login} setIsOpen={setIsOpen} isOpen={isOpen} /> */}
    </div>
  );
}

export default LoginPage;
