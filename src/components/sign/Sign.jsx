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

function Sign({ login, setLogin }) {
  // const from2{ register, handleSubmit } = useForm();
  const form1 = useForm();
  const form2 = useForm();

  const navigate = useNavigate();

  const onCreateAcount = async (data) => {
    console.log("サインアップ", data);

    if (data.pass != data.password) {
      console.log("パスワードが違います");
      return;
    }

    try {
      await signUpUser(data.name, data.email, data.password);
    } catch (error) {
      console.error("ユーザー作成エラー:", error);
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
      await signInUser(email, password);
    } catch (error) {
      console.error("サインインエラー:", error.code, error.message);
      return error.message;
    }

    conectMap();
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
  );
}

export default Sign;
