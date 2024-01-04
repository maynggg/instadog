"use server";

import { getClient } from "../utils/apollo-provider";
import { LoginMutation } from "@/generated/graphql";
import { cookies } from "next/headers";
import { LOGIN } from "@/graphql/mutations/login.gql";
import { z } from "zod";
import { redirect } from "next/navigation";
import { ACCESS_TOKEN_KEY, USER_ID_KEY } from "@/app/constants";

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

      const token = data?.login?.token as string;
      const userId = data?.login?.user?._id as string;

      // Set access token and userId as cookies
      cookies().set(ACCESS_TOKEN_KEY, token);
      cookies().set(USER_ID_KEY, userId);
    } catch (error) {
      console.log(`Failed to log in: ${error}`);
      return { error: "Failed to log in, please try again" };
    }

    redirect("/");
  } else {
    return { error: "Please enter your username and password" };
  }
};
