import { useState } from "react";

export default function Homework({ goBack }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = async () => {
    setOutput("⏳ Thinking...");

    const res = await fetch("/api/homework", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ question: input })
    });

    const data = await res.json();
    setOutput(data.answer);
  };

  return (
    <div className="section">
      <button onClick={goBack}>⬅ Back</button>
      <h2>📚 Homework Help</h2>

      <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSubmit}>Get Answer</button>

      <div className="output">{output}</div>
    </div>
  );
}