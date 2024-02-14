import IconFrame from './IconFrame';
import './Testimonial.css';
import './TestimonialWithoutImg.css';

export default function Testimonial({ imgSrc, text, name, job }) {
  if (imgSrc)
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

  if (!imgSrc) {
    return (
      <div className="testimonial-without-img_container">
        <section>
          <h1 className="title">
            Work<span className="title-span">cation</span>
          </h1>
          <p className="text">"{text}"</p>
          <p className="info">
            {name}
            <span className="info-span_1"> / </span>
            <span className="info-span_2">{job}</span>
          </p>
        </section>
      </div>
    );
  }
}
