import React from "react";
import AboutCSS from "./../About/About.module.css";
import About_img from "../../about2.png";

function About() {
  AOS.init();
  return (
    <>
      <section id="about" className={AboutCSS.about}>
        <div className={AboutCSS.About}>
          <div className={AboutCSS.About_img} data-aos="fade-right" data-aos-duration="1500">
            <img src={About_img} alt="" />
          </div>

          <div className={AboutCSS.about_info}>
            <p data-aos="fade-left" data-aos-duration="1500">About Me</p>
            <h2 data-aos="fade-left" data-aos-duration="1500">Eric Ngaw</h2>
            <h3 data-aos="fade-left" data-aos-duration="1500">
              Hi, I am <span>Full-Stack</span> Digital Product Developer
            </h3>
            <p data-aos="fade-left" data-aos-duration="1500">
              I’m a Full-Stack Digital Product Developer skilled in web development, data analysis, and UI/UX design. I create intuitive, data-driven interfaces that blend technical precision with thoughtful user experience.
            </p>
            <button data-aos="fade-left" data-aos-duration="1500">Download CV</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
