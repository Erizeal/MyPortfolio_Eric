import React from "react";
import ServiceCSS from "./../Services/Service.module.css";

function Service() {
    AOS.init();
    return (
        
<section id="services">
    <div className={ServiceCSS.service}> 
            <h2 data-aos="fade-down" data-aos-duration="1500">Service</h2>
            <p data-aos="fade-down" data-aos-duration="1500"   >I offer end-to-end digital solutions—from data insights to full-stack development and intuitive design.</p>

            <div className={ServiceCSS.service_cards}>
                <div className={ServiceCSS.Service_card}>
                    <i className="fa-solid fa-chart-line" id={ServiceCSS.icon} data-aos="fade-up" data-aos-duration="1500"></i>

                    <h3 data-aos="fade-up" data-aos-duration="1500">Analyst</h3>
                    <p data-aos="fade-up" data-aos-duration="1500">I turn complex data into clear, actionable insights that drive smarter decisions.</p>

                    <a href="#" data-aos="fade-up" data-aos-duration="1500">
                        Read More <i className="fa-solid fa-arrow-right" data-aos="fade-up" data-aos-duration="1500"></i>
                    </a>
                </div>

                <div className={ServiceCSS.Service_card}>
                    <i className="fa-solid fa-code" id={ServiceCSS.icon} data-aos="fade-up" data-aos-duration="1500"></i>

                    <h3 data-aos="fade-up" data-aos-duration="1500">Web Development</h3>
                    <p data-aos="fade-up" data-aos-duration="1500">I build responsive websites and apps with clean code and smooth user experiences.</p>

                    <a href="#" data-aos="fade-up" data-aos-duration="1500">
                        Read More <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>

                 <div className={ServiceCSS.Service_card}>
                    <i className="fa-brands fa-codepen" id={ServiceCSS.icon} data-aos="fade-up" data-aos-duration="1500"></i>
                    <h3 data-aos="fade-up" data-aos-duration="1500">UI/UX Design</h3>
                    <p data-aos="fade-up" data-aos-duration="1500">I design intuitive, user-friendly interfaces that enhance user experience and engagement.</p>

                    <a href="#" data-aos="fade-up" data-aos-duration="1500">
                        Read More <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>

                
                 <div className={ServiceCSS.Service_card}>
                    <i className="fa-brands fa-gear" id={ServiceCSS.icon} data-aos="fade-up" data-aos-duration="1500"></i>
                    <h3 data-aos="fade-up" data-aos-duration="1500">Other</h3>
                    <p data-aos="fade-up" data-aos-duration="1500">I offer additional services tailored to your unique digital needs, ensuring comprehensive support and solutions.</p>

                    <a href="#" data-aos="fade-up" data-aos-duration="1500">
                        Read More <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>


            </div>
    </div>

</section>
   
    )
}

export default Service;