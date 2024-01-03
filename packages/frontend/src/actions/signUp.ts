"use server";

import { request } from "graphql-request";
import { RegisterMutation } from "@/generated/graphql";
import { REGISTER } from "@/graphql/mutations/register.gql";
import { z } from "zod";

const schema = z.object({
  email: z.string().email().min(1),
  username: z.string().min(1),
  password: z.string().min(1),
});

export const signUp = async (_prevState: any, formData: FormData) => {
  const validatedInput = schema.parse({
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
  });

  if (validatedInput.email && validatedInput.username && validatedInput.password) {
    try {
      const data = await request<RegisterMutation>("http://localhost:4000/graphql", REGISTER, {
        input: {
          userName: validatedInput.username,
          email: validatedInput.email,
          password: validatedInput.password,
        },
      });

      const token = data?.register?.token;
      console.log({ token });
      return { message: `Signed up successfully` };
    } catch (error) {
      console.log(`Failed to sign up user: ${error}`);
      return { message: "Failed to sign up, please try again" };
    }
  } else {
    return { message: "Please enter an email, username and password" };
  }
};
