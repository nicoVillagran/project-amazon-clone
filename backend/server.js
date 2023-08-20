import express from "express";
import cors from "cors";
import data from "./data.js";

const app = express();

app.use(cors());
app.get("/api/products", (req, res) => {
  res.json(data.products);
  // res.send(data.products);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.info(`serveat http://localhost:${port}`);
});
