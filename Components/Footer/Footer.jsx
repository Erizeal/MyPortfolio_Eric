import React from "react";
import FooterCSS from "./Footer.module.css";

function Footer() {
  AOS.init();
  return (
    <>
      <section>
        <div className={FooterCSS.footer}>
          <div className={FooterCSS.links}>
            <h1 data-aos="fade-down" data-aos-duration="1500">Eric Montes Ngaw</h1>
            <div>
              <p data-aos="fade-up" data-aos-duration="1500">
                Thanks for visiting my portfolio. I’m passionate about building thoughtful digital experiences—feel free to connect with me through the links below.
              </p>

              <div className={FooterCSS.social}>
                <i className="fa-brands fa-facebook-f" data-aos="fade-up" data-aos-duration="1500"></i>
                <i className="fa-brands fa-instagram" data-aos="fade-up" data-aos-duration="1500"></i>
                <i className="fa-brands fa-linkedin-in" data-aos="fade-up" data-aos-duration="1500"></i>
                <i className="fa-brands fa-github" data-aos="fade-up" data-aos-duration="1500"></i>
              </div>
            </div>
          </div>

        <div className={FooterCSS.links }>
          <h3 data-aos="fade-up" data-aos-duration="1500">Useful Links</h3>
          <ul>
            <li data-aos="fade-up" data-aos-duration="1500">
              <a href="#">About</a>
            </li>
            <li data-aos="fade-up" data-aos-duration="1500">
              <a href="#">Services</a>
            </li>
            <li data-aos="fade-up" data-aos-duration="1500">
              <a href="#">Portfolio</a>
            </li>
          </ul>
        </div>

        <div className={FooterCSS.links}>
          <h3 data-aos="fade-up" data-aos-duration="1500">Information</h3>
          <ul>
            <li data-aos="fade-up" data-aos-duration="1500">
              <a href="#">Privacy & Policy</a>
            </li>
            <li data-aos="fade-up" data-aos-duration="1500">
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        </div>
      </section>
    </>
    
  );
}

export default Footer;
