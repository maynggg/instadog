"use client";
import React from "react";
import { logIn } from "@/actions/logIn";
import styles from "./LogInForm.module.css";
import { useRef } from "react";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";

const initialFormState = {
  error: "",
};

const LogInForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { pending } = useFormStatus();
  const [formState, logInAction] = useFormState(logIn, initialFormState);

  async function formAction(formData: FormData) {
    formRef?.current?.reset();
    await logInAction(formData);
  }

  return (
    <form className={styles.form} action={formAction} ref={formRef}>
      <input className={styles.formInput} type="text" name="username" placeholder="Username" required />
      <input className={styles.formInput} type="password" name="password" placeholder="Password" required />
      <button className={styles.loginButton} type="submit" disabled={pending}>
        {pending ? "Logging in" : "Log in"}
      </button>
      {!!formState.error && <p>{formState.error}</p>}
    </form>
  );
};

export default LogInForm;
