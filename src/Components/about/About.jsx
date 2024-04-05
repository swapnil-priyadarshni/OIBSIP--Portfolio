import "./About.scss";
import Img from "../../assets/davis-assets/about.jpg";
import { aboutInfo } from "../../Data";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <section className="about section-padding">
      <div className="section-title" data-aos="fade-up">
        <h4>About Me</h4>
      </div>

      <div className="about_container wrapper">
        <div className="about_left" data-aos="fade-right">
          <div className="about_left-img">
            <img src={Img} alt="about me " />
          </div>
        </div>

        <div className="about_right" data-aos="zoom-in-up">
          <h2>Hello there ! I'm Swapnil Priyadarshni</h2>
          <h4>Web Developer</h4>
          <p>
            I'm a second year Chemical Engineering student and a web Developer
            with a strong focus on building user-friendly websites and a passion
            for crafting seamless digital experiences. Whether it's building
            responsive websites, implementing user-friendly interfaces, or
            optimizing performance, I strive to push the boundaries of what's
            possible on the web. I believe in continuous learning and growth,
            and I'm always on the lookout for new challenges that sharpen my
            skills and expand my horizons.
          </p>

          <div className="about_right-info-container">
            {aboutInfo.map(({ name, details }) => (
              <div className="about_right-info" key={name}>
                <p> {name} </p>
                <p>: {details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
