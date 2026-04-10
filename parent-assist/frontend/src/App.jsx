import { useState } from "react";
import Header from "./components/Header";
import FeatureCard from "./components/FeatureCard";
import Homework from "./components/Homework";
import Behavior from "./components/Behavior";

export default function App() {
  const [active, setActive] = useState(null);

  return (
    <div className="app">
      <Header />

      {!active && (
        <div className="features">
          <FeatureCard
            title="📚 Homework Help"
            desc="Explain any topic simply"
            onClick={() => setActive("homework")}
          />
          <FeatureCard
            title="🧠 Behaviour Guide"
            desc="Understand child behavior"
            onClick={() => setActive("behavior")}
          />
        </div>
      )}

      {active === "homework" && <Homework goBack={() => setActive(null)} />}
      {active === "behavior" && <Behavior goBack={() => setActive(null)} />}
    </div>
  );
}