import express, { Request, Response } from "express";
import type { Greeting } from "@airbnbclone/common/types/greeting";
const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  const greeting: Greeting = {
    message: "hello",
  };
  res.json(greeting);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
