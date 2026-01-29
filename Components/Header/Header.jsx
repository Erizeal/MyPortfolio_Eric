import React from 'react';
import HeaderCSS from './../Header/Header.module.css';
import about1 from '../../about1.png';

function Header() {
    AOS.init();
    return (
        <header>
            <section id="home">
                <div className={HeaderCSS.hero}>
                    <div className={HeaderCSS.hero_info}>
                        <h1 data-aos="fade-down" data-aos-duration="1500" data-aos-delay="100" >Hi, I am <span>Eric Ngaw</span></h1>
                        <p data-aos="fade-down" data-aos-duration="1500" data-aos-delay="200">
                            As a passionate and detail-oriented web developer, I specialize in crafting visually engaging and interactive digital experiences. With a strong foundation in React, CSS/SCSS, and frontend architecture, I bring creative concepts to life—whether through dynamic backgrounds, custom cursor effects, or seamless navigation. 
                            My approach blends technical precision with artistic flair, ensuring each project is not only functional but memorable. I thrive on solving complex challenges, collaborating with others, and continuously refining my craft to deliver polished, user-centric solutions. Would you like a version that’s more playful, minimalist, or tailored 
                            to a specific audience like recruiters or clients?

                        </p>

                        <div className={HeaderCSS.social_container}>
                            <div className={HeaderCSS.social_icons}><i className="fa-brands fa-facebook-f" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="300"></i></div>
                            <div className={HeaderCSS.social_icons}><i className="fa-brands fa-instagram" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="400"></i></div>
                            <div className={HeaderCSS.social_icons}><i className="fa-brands fa-linkedin-in" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="500"></i></div>
                            <div className={HeaderCSS.social_icons}><i className="fa-brands fa-github" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="600"></i></div>
                        </div>

                        <div className={HeaderCSS.hero_btns} data-aos="fade-down" data-aos-duration="1500" data-aos-delay="700">
                            <button>Hire Me</button>
                            <button>Contact</button>
                        </div>
                    </div>
           
                    <div className={HeaderCSS.hero_img} data-aos="fade-down" data-aos-duration="1500" data-aos-delay="800">
                        <img src={about1} alt="Hero_img" />
                    </div>
                    
                </div>
            </section>
        </header>
    );
}

export default Header;