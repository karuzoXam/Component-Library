import './Tooltip.css';
import { Tooltip } from 'react-tooltip';

export default function MyTooltip({ color, title, text }) {
  return (
    <div className="tooltip-container">
      <a data-tooltip-id="my-tooltip" data-tooltip-place="top" className="tooltip-anchor">
        Hover for Tooltip
      </a>
      <Tooltip id="my-tooltip" className={`tooltip tooltip-${color}`}>
        <div>
          <h3 className={`tooltip-title tooltip-title-${color}`}>{title}</h3>
          <p className={`tooltip-text tooltip-text-${color}`}>{text}</p>
        </div>
      </Tooltip>
    </div>
  );
}
