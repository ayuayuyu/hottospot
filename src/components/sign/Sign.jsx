import { useForm } from "react-hook-form";
import { FormInput } from "../../layout/FormInput";
import { label } from "motion/react-client";
import styls from "./Sign.module.scss";
import { GradationButton } from "../../layout/GradationButton";

function Sign(login) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
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
      {login.login ? (
        <div>
          <div className={styls.createAccount}>サインイン</div>
          <form onSubmit={handleSubmit(onSubmit)} className={styls.signInForm}>
            {signInSendForm.map((form, index) => {
              return (
                <div key={index} className={styls.signInCard}>
                  <FormInput
                    key={index}
                    label={form.label}
                    register={register}
                    fieldName={form.fieldName}
                  />
                </div>
              );
            })}
            {/* <button type="submit" className={styls.signInButton}>サインイン</button> */}
            <div className={styls.signInButton}>
              <GradationButton color="red">ログイン</GradationButton>
            </div>
          </form>
        </div>
      ) : (
        <>
          <div className={styls.createAccount}>アカウントの作成</div>
          <form onSubmit={handleSubmit(onSubmit)}  className={styls.signInForm}>
            {signUpSendForm.map((form, index) => {
              return (
                <div key={index} className={styls.signUpCard}>
                  <FormInput
                    key={index}
                    label={form.label}
                    register={register}
                    fieldName={form.fieldName}
                  />
                </div>
              );
            })}
            <div className={styls.signUpButton}>
              <GradationButton color="red">作成</GradationButton>
            </div>
          </form>
        </>
      )}
      {/* <Title /> */}
    </div>
  );
}

export default Sign;
