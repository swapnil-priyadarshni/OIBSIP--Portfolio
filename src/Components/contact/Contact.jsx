import "./Contact.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import hello from "../../assets/davis-assets/hello.jpeg";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_gcmzvr5", "template_48pgth1", form.current, {
        publicKey: "itohsKWbcbmRy69oE",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="contact section-padding">
      <div className="section-title " data-aos="fade-up">
        <h4>Contact</h4>
      </div>
      <div className="contact_container wrapper">
        <div className="contact_left" data-aos="fade-right">
          <h3>Get in touch</h3>

          <form action="#" ref={form} onSubmit={sendEmail}>
            <input
              type="text "
              name="from_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email "
              name="from_email"
              placeholder="Your Email"
              required
            />
            <input type="text " placeholder="Subject" required />
            <textarea
              name="message"
              placeholder="Message"
              id="#"
              cols="30"
              rows="10"
            ></textarea>
            <button className="btn" type="submit" value="Send">
              Send Message
            </button>
          </form>
        </div>

        <div className="contact_right" data-aos="fade-left">
          <img src={hello} alt="#" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
