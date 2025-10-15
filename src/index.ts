import express from "express";
import { prismaClient } from "./db.js";

export const app = express();
app.use(express.json());

app.post("/sum", async (req, res) => {
  const { a, b } = req.body;

  const result = a + b;

  await prismaClient.request.create({
    data: {
      a,
      b,
      ans: result,
      type: "Sum",
    },
  });
  res.json({ answer: result });
});

app.post("/multiply", async (req, res) => {
  const { a, b } = req.body;

  const result = a * b;

  await prismaClient.request.create({
    data: {
      a,
      b,
      ans: result,
      type: "Multiply",
    },
  });
  res.json({ answer: result });
});
