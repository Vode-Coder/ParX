import { useState } from "react";

export default function Behavior({ goBack }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = async () => {
    setOutput("⏳ Thinking...");

    const res = await fetch("/api/behavior", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ problem: input })
    });

    const data = await res.json();
    setOutput(data.response);
  };

  return (
    <div className="section">
      <button onClick={goBack}>⬅ Back</button>
      <h2>🧠 Behaviour Help</h2>

      <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSubmit}>Get Guidance</button>

      <div className="output">{output}</div>
    </div>
  );
}