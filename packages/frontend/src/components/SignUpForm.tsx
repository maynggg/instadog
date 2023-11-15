"use client";

import { signUp } from "@/actions/signUp";
import { useRef } from "react";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";

const initialFormState = {
  message: "",
};

const SignUpForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { pending } = useFormStatus();
  const [formState, signUpAction] = useFormState(signUp, initialFormState);

  async function formAction(formData: FormData) {
    formRef?.current?.reset();
    await signUpAction(formData);
  }

  return (
    <div>
      <form action={formAction} ref={formRef}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit" disabled={pending}>
          {pending ? "Signing Up" : "Sign Up"}
        </button>
        {!!formState?.message && <p>{formState.message}</p>}
      </form>
    </div>
  );
};

export default SignUpForm;
