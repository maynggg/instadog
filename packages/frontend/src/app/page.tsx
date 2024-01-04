import { redirect } from "next/navigation";
import styles from "./page.module.css";
import { cookies } from "next/headers";
import { getClient } from "@/utils/apollo-provider";
import { GET_USER_BY_ID } from "@/graphql/queries/getUserById.gql";
import { ACCESS_TOKEN_KEY, USER_ID_KEY } from "./constants";

export default async function Home() {
  const accessToken = cookies().get(ACCESS_TOKEN_KEY)?.value;
  const userId = cookies().get(USER_ID_KEY)?.value;

  if (!accessToken || !userId) {
    redirect("accounts/login");
  }

  const client = getClient();
  try {
    const { data } = await client.query({
      query: GET_USER_BY_ID,
      variables: {
        id: userId,
      },
    });

    const { userName } = data.getUserById;

    return (
      <main className={styles.main}>
        <h1>instadog homepage</h1>
        <div>{userName}</div>
      </main>
    );
  } catch (error) {
    console.log(error);
    redirect("accounts/login");
  }
}
