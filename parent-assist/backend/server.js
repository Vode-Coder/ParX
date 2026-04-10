const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Homework API
app.post("/api/homework", (req, res) => {
  const { question } = req.body;

  res.json({
    answer: `📘 Simple Explanation:\n\n${question} explained simply.\n\nExample:\n2 + 2 = 4\n\nTry this:\n5 + 3 = ?`
  });
});

// Behavior API
app.post("/api/behavior", (req, res) => {
  const { problem } = req.body;

  res.json({
    response: `🧠 Guidance:\n\n1. This is often normal at certain ages.\n2. It may happen due to emotional development.\n\n✔ What to do:\n- Stay calm\n- Set boundaries\n- Reward good behavior\n\n⚠ Seek help if frequent or severe.`
  });
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});