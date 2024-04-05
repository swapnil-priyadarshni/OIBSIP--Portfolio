import "./Skills.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { skillsInfo } from "../../Data";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <section className="skills section-padding">
      <div className="section-title" data-aos="fade-up">
        <h4>Skills</h4>
      </div>

      <div className="skills_container wrapper">
        {skillsInfo.map(({ name, Img }) => (
          <div className="skills_card" key={name} data-aos="zoom-in-up">
            <div className="skills_card-img">
              <img src={Img} alt="card " />
            </div>
            <h2>{name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
