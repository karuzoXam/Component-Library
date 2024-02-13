import './IconFrame.css';

export default function IconFrame({ text, name, job }) {
  return (
    <div className="icon-frame">
      <img className="icon" loading="eager" alt="qoutes icon picture" src=".\src\assets\Icon.png" />
      <h3 className="quote">{text}</h3>
      <div className="role-name-frame">
        <b className="name">{name}</b>
        <div className="role">{job}</div>
      </div>
    </div>
  );
}
