import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!!");
});

app.listen(5000, () => {
  console.log(`Server running`);
});
