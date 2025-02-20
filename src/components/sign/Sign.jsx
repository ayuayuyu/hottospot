import React from "react";
import Title from "./Title";
import { useForm } from "react-hook-form";
import { FormInput } from "../../layout/FormInput";

function Sign() {
    const { register, handleSubmit } = useForm(); // useForm() を使う

    const onSubmit = () => {
        console.log("fo-mu")
    }


  return (
    <div>
      <Title />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput label="name" register={register} fieldName="name"/>
        <button type="submit">送信</button>
      </form>
    </div>
  );
}

export default Sign;
