export default function FeatureCard({ title, desc, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}