import React, { useState } from "react";
import Title from "../../layout/home/Title";
import { WhiteButton } from "../../layout/WhiteButton";
import HotModalSheet from "../hotModalSheet/HotModalSheet";
import SignInModal from "../sign/SignInModal";
import ModalSheet from "../../layout/ModalSheet";
import { motion } from "framer-motion";
import Sign from "../sign/Sign";
import style from "./LoginPage.module.scss";

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

  const handleClick = () => {
    setIsOpen(false);
  };
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
        <div>
          <div className={style.signUp}>
            <WhiteButton color="red" onClick={handleSignUp}>
              サインアップ
            </WhiteButton>
          </div>
        </div>
      </div>

      <div className={style.form} onClick={handleSignIn}>
        <ModalSheet setIsOpen={setIsOpen} isOpen={isOpen}>
          <Sign login={login} setLogin={setLogin} />
        </ModalSheet>
      </div>

      {/* <SignInModal login={login} setIsOpen={setIsOpen} isOpen={isOpen} /> */}
    </div>
  );
}

export default LoginPage;
