import "./Resume.scss";

import { projectInfo } from "../../Data";
import { projectInfo_right } from "../../Data";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <section className="resume section-padding">
      <div className="section-title" data-aos="fade-up">
        <h4>Projects </h4>
      </div>

      <div className="resume_container wrapper">
        <div className="resume_left">
          <div className="resume_title" data-aos="fade-up"></div>
          <div className="resume_projects container" data-aos="fade-up">
            {projectInfo.map(({ name, link, app, desc }) => (
              <div className="resume_card" key={name}>
                <h3>{name}</h3>

                <h4>{app}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="resume_right">
          <div className="resume_title" data-aos="fade-up"></div>
          <div className="resume_projects container" data-aos="fade-up">
            {projectInfo_right.map(({ name, link, app, desc }) => (
              <div className="resume_card" key={name}>
                <h3>{name}</h3>

                <h4>{app}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <a
        href="https://drive.google.com/file/d/15lpJE3ixEByqQq3DN7seOqKvYwG7MIaI/view?usp=sharing"
        className="btn"
        data-aos="fade-up"
        target="blank"
      >
        Download Resume
      </a> */}
    </section>
  );
};

export default Resume;
