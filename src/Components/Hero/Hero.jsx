import "./Hero.scss";
import HeroImg from "../../assets/davis-assets/hero-img1.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <section className="hero">
      <div className="hero_container wrapper">
        <div className="hero_left" data-aos="fade-right">
          <h3>Hello, I'm </h3>
          <h1>
            Swapnil Priyadarshni
            <br />
          </h1>

          <h2>Web Developer</h2>
          <a href="#" className="btn">
            Hier Me
          </a>
        </div>

        <div className="hero_right" data-aos="fade-left">
          <div className="hero_right-img">
            <img src={HeroImg} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
