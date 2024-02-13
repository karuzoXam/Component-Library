import './Testimonial.css';

export default function Testimonial({ imgSrc, text, name, job }) {
  const className = imgSrc ? 'testimonial-with-img' : 'testimonial-without-img';

  return (
    <div className="testimonial">
      <img
        src={imgSrc}
        alt={`A profile picture of ${name}, ${job}`}
        className="testimonial-img"
      ></img>
      <img src=".\src\assets\Icon.png" alt="qoutes" className="testimonial-qoutes"></img>
      <p className="testimonial-text">{text}</p>
      <div className="testimonial-info">
        <p className="testimonial-name">{name}</p>
        <p className="testimonial-job">{job}</p>
      </div>
    </div>
  );
}
