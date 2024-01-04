"use server";

import { HttpLink } from "@apollo/client";
import { NextSSRInMemoryCache, NextSSRApolloClient } from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { cookies } from "next/headers";
import { ACCESS_TOKEN_KEY } from "@/app/constants";
import { setContext } from "@apollo/client/link/context";
import { SERVER_ENDPOINT } from "@/config";

export const { getClient } = registerApolloClient(() => {
  const httpLink = new HttpLink({
    uri: SERVER_ENDPOINT,
  });

  const authLink = setContext((_, { headers }) => {
    const token = cookies().get(ACCESS_TOKEN_KEY)?.value;

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: authLink.concat(httpLink),
  });
});
