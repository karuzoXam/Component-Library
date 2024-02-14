import './Card.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function Card({
  icon = <FontAwesomeIcon icon={faCloudArrowUp} />,
  iconColor,
  title,
  text,
}) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-icon" style={{ backgroundColor: iconColor }}>
          {icon}
        </div>
        <h1 className="card-title">{title}</h1>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}
