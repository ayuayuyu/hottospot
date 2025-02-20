import React from "react";
import { Link } from "react-router-dom";
import Title from "../../layout/home/Title";
import Background from "../../layout/home/background";
import "./LoginPage.css";
import { WhiteButton } from "../../layout/WhiteButton";

function LoginPage() {
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
          <WhiteButton color="red">サインイン</WhiteButton>
        </div>
        <div className="sign-out">
          <WhiteButton color="red">サインアップ</WhiteButton>
        </div>
      </div>

      <Background />
    </div>
  );
}

export default LoginPage;
