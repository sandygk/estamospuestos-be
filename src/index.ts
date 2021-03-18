import express from "express";

const port = 8080;
const app = express();

app.get("/", (request: any, response: any) => {
  response.send("Hello world!");
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
