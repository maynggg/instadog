"use server";

import { getClient } from "../utils/apollo-provider";
import { LoginMutation } from "@/generated/graphql";
import { LOGIN } from "@/graphql/mutations/login.gql";
import { z } from "zod";

const schema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export const logIn = async (_prevState: any, formData: FormData) => {
  const validatedInput = schema.parse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  if (validatedInput.username && validatedInput.password) {
    const client = getClient();
    try {
      const { data } = await client.mutate<LoginMutation>({
        mutation: LOGIN,
        variables: {
          userName: validatedInput.username,
          password: validatedInput.password,
        },
      });

      const token = data?.login?.token;
      console.log({ token });
      return { message: `Logged in successfully` };
    } catch (error) {
      console.log(`Failed to log in: ${error}`);
      return { message: "Failed to log in, please try again" };
    }
  } else {
    return { message: "Please enter your username and password" };
  }
};
