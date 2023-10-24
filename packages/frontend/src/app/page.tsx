import styles from "./page.module.css";
import { getClient } from "@/apollo-provider";
import { GetUserByIdQuery } from "@/generated/graphql";
import { GET_USER_BY_ID } from "@/graphql/queries/getUserById.gql";
import Image from "next/image";

export default async function Home() {
  const client = getClient();
  const { data } = await client.query<GetUserByIdQuery>({
    query: GET_USER_BY_ID,
    variables: { id: "6536f893acaf8c71dd9194f0" },
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  const user = data?.getUserById;

  return (
    <main className={styles.main}>
      <h1>username: {user?.userName}</h1>
      <h2>email: {user?.email}</h2>
      <h2>bio: {user?.bio}</h2>
      <div style={{ position: "relative", height: "300px", width: "300px" }}>
        <Image src={user?.avatarUrl as string} layout="fill" objectFit="contain" alt="Profile picture" />
      </div>
    </main>
  );
}
