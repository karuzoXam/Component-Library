import './Card.css';

export default function Card({ icon, iconColor, title, text }) {
  return (
    <div className="card">
      <div className="card-icon" style={{ backgroundColor: iconColor }}>
        {icon}
      </div>
      <h1 className="card-title">{title}</h1>
      <p className="card-text">{text}</p>
    </div>
  );
}
