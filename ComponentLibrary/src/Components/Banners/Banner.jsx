import './Banner.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faTriangleExclamation,
  faCircleXmark,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';

export default function Banner({ status, title, text }) {
  let icon;
  let textColor;
  if (status === 'success') {
    icon = (
      <FontAwesomeIcon style={{ color: '#34D399' }} className="header-icon" icon={faCircleCheck} />
    );
    textColor = '#047857';
  }
  if (status === 'warning') {
    icon = (
      <FontAwesomeIcon
        style={{ color: '#FBBF24' }}
        className="header-icon"
        icon={faTriangleExclamation}
      />
    );
    textColor = '#B45309';
  }
  if (status === 'error') {
    icon = (
      <FontAwesomeIcon style={{ color: '#F87171' }} className="header-icon" icon={faCircleXmark} />
    );
    textColor = '#B45309';
  }
  if (status === 'neutral') {
    icon = (
      <FontAwesomeIcon style={{ color: '#60A5FA' }} className="header-icon" icon={faCircleInfo} />
    );
    textColor = '#1C51B9';
  }

  return (
    <div className={`banner banner-${status}`}>
      <div className="banner-header">
        {icon}
        <h1>{title}</h1>
      </div>
      {text && (
        <p className="header-text" style={{ color: textColor }}>
          {text}
        </p>
      )}
    </div>
  );
}
