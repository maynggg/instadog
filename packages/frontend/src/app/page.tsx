import { Greeting } from "@airbnbclone/common/types/greeting";
import axios from "axios";
import styles from "./page.module.css";

async function fetchGreeting(): Promise<Greeting> {
  return new Promise((resolve) => {
    axios.get<Greeting>("http://localhost:3000").then((res) => resolve(res.data));
  });
}

export default async function Home() {
  const greeting: Greeting = await fetchGreeting();
  return <main className={styles.main}>{greeting.message}</main>;
}
