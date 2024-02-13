import IconFrame from './IconFrame';
import './Testimonial.css';

export default function Testimonial({ imgSrc, text, name, job }) {
  return (
    <div className="with-overlapping-imagedesktop">
      <section className="plate">
        <div className="inner-frame-wrapper">
          <div className="inner-frame">
            <div className="wrapper-image">
              <img
                className="image-icon"
                loading="eager"
                alt="A profile Picture of a Person"
                src={imgSrc}
              />
            </div>
          </div>
        </div>
        <IconFrame text={text} name={name} job={job} />
      </section>
    </div>
  );
}
