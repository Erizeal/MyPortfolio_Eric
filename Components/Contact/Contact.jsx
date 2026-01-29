import React from "react";
import ContactCSS from "./../Contact/Contact.module.css";

function Contact() {
    AOS.init();
    return ( 
        <>
            <section id="contact">
                <div className={ContactCSS.contact}>
                    <div>
                        <h2 data-aos="fade-down" data-aos-duration="1500">Contact Me</h2>
                        <p data-aos="fade-up" data-aos-duration="1500">
                            Feel free to reach out for collaborations, project inquiries, or just to connect. I’m always open to new ideas and opportunities to build something impactful.
                        </p>
                    </div>

                    <form>
                        <label data-aos="fade-down" data-aos-duration="1500">Name :</label>
                        <input type="text" placeholder="Enter Name *" id="name" required/>
                        <label data-aos="fade-down" data-aos-duration="1500">Email :</label>
                        <input type="email" placeholder="Enter Email *" id="email" required/>
                        <label data-aos="fade-down" data-aos-duration="1500">Message :</label>
                        <input type="phone" placeholder="Enter Message *" id="phone" required/>

                        <button data-aos="fade-down" data-aos-duration="1500">Contact</button>

                    </form>
                
                </div>
            </section>
        </>
    )
}

export default Contact;