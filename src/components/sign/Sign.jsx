import { useForm } from "react-hook-form";
import { FormInput } from "../../layout/FormInput";
import { label } from "motion/react-client";
import styls from "./Sign.module.scss";
import { GradationButton } from "../../layout/GradationButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import signUpUser from "../../firebase/SignUp/signUpUser";
import { signInWithPopup } from "firebase/auth";
import signInUser from "../../firebase/SignIn/signInUser";
import React from "react";
import ModalWindow from "../../layout/ModalWindow";
import { useAtom } from "jotai";
import { isHotModalAtom } from "../../atoms/isHotModalAtom";
import { modalWindowAtom } from "../../atoms/modalWindowAtom";

function Sign({ login, setLogin }) {
  // const from2{ register, handleSubmit } = useForm();
  const form1 = useForm();
  const form2 = useForm();

  const navigate = useNavigate();
  const [isHotModal, setIsHotModalAtom] = useAtom(isHotModalAtom);
  const [modalWindowIsOpen, setModalWindowIsOpen] = useAtom(modalWindowAtom);
  const [isSign, setIsSign] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onCreateAcount = async (data) => {
    console.log("サインアップ", data);

    if (data.pass != data.password) {
      console.log("パスワードが違います");
      setIsSign(true);
      setErrorMessage("パスワードが違います");
    }

    if (!data.name || !data.email || !data.pass || !data.password) {
      console.log("正しく入力してください");
      setIsSign(true);
      setErrorMessage("正しく入力してください");
    }

    try {
      await signUpUser(data.name, data.email, data.password);
    } catch (error) {
      console.error("ユーザー作成エラー:", error);
      setIsSign(true);
      console.log("middle", error);
      setErrorMessage(error);
      throw new Error("ユーザーエラー");
    }

    conectMap();
  };

  const conectMap = async () => {
    navigate("/map");
  };

  const onLoginAcount = async (data) => {
    console.log("ログイン", data);

    try {
      if (!data.email && !data.pass) {
        throw new Error("メールアドレスとパスワードを入力してください");
      } else if (!data.email && data.pass) {
        throw new Error("メールアドレスを入力してください");
      } else if (!data.pass && data.email) {
        throw new Error("パスワードを入力してください");
      }

      console.log(`email: ${data.email} , password:${data.pass}`);
      const result = await signInUser(data.email, data.pass);

      console.log("result", result.operationType);

      if (result.operationType === "signIn") {
        console.log("if内", `${isSign}`);
        conectMap();
      } else {
        setIsSign(true);
        console.log("else内", `${error.message}`);
        setErrorMessage(error.message);
        return error.message;
      }
    } catch (error) {
      console.error("サインインエラー:", error.code, error.message);
      setIsSign(true);
      console.log("error内", `${error.message}`);
      setErrorMessage(error.message);
      return error.message;
    }
  };

  const signUpSendForm = [
    { label: "name", fieldName: "name" },
    { label: "e-mail address", fieldName: "email" },
    { label: "password", fieldName: "pass" },
    { label: "asign-password", fieldName: "password" },
  ];

  const signInSendForm = [
    { label: "e-mail address", fieldName: "email" },
    { label: "password", fieldName: "pass" },
  ];

  return (
    <div>
      <ModalWindow setIsOpen={setIsSign} isOpen={isSign}>
        <div
          style={{
            borderRadius: "30px",
            width: "84%",
            color: "#2C3E50",
            padding: "20px 0",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div style={{ fontSize: "30px", fontWeight: "bold" }}>
            エラーメッセージ
          </div>
          <div style={{ fontSize: "12px" }}>{errorMessage}</div>
        </div>
      </ModalWindow>
      <div className={styls.signStyle}>
        {login ? (
          <div>
            <div className={styls.createAccount}>サインイン</div>
            <form className={styls.signInForm}>
              {signInSendForm.map((form, index) => {
                return (
                  <div key={index} className={styls.signInCard}>
                    <FormInput
                      register={form1.register}
                      key={index}
                      label={form.label}
                      // register={register}
                      fieldName={form.fieldName}
                    />
                  </div>
                );
              })}
              <div
                className={styls.signInButton}
                onClick={form1.handleSubmit(onLoginAcount)}
              >
                <GradationButton color="red">ログイン</GradationButton>
              </div>
            </form>
          </div>
        ) : (
          <>
            <div>
              <div className={styls.createAccount}>アカウントの作成</div>
              <form className={styls.signInForm}>
                {signUpSendForm.map((form, index) => {
                  return (
                    <div key={index} className={styls.signUpCard}>
                      <FormInput
                        register={form2.register}
                        label={form.label}
                        // register={register}
                        fieldName={form.fieldName}
                      />
                    </div>
                  );
                })}
                <div
                  className={styls.signInButton}
                  onClick={form2.handleSubmit(onCreateAcount)}
                >
                  <GradationButton color="red">作成</GradationButton>
                </div>
              </form>
            </div>
          </>
        )}
        {/* <Title /> */}
      </div>
    </div>
  );
}

export default Sign;
