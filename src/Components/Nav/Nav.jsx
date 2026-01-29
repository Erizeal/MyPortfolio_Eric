import React, { useState } from 'react';
import NavCSS from './../Nav/Nav.module.css'

// useState (and all React hooks) must be called directly inside a React function

function Nav() {
    AOS.init();
    let [navbar, setnavbar] = useState({height: 0, padding: 0})

    const activeNav = () => {
        if(navbar.height === 0){
            setnavbar({height: '250px', padding: '20px'})
        }
        else{
            setnavbar({height: 0, padding: 0})
        }
    }
    return(
        <>
            <section>
                <header className={NavCSS.header}>
                    <div className={NavCSS.logo} data-aos="fade-down" data-aos-duration="1500">
                        <h2 data-aos="fade-down" data-aos-duration="1500">E<span>.Ngaw</span></h2>
                    </div>
                    <div className={NavCSS.nav} style={{ height: navbar.height, padding: navbar.padding }}>

                        <a href="#home" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="100">Home</a>
                        <a href="#about" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="200">About Me</a>
                        <a href="#services" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="300">Services</a>
                        <a href="#projects" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="400">Projects</a>
                        <a href="#contact" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="500">Contact</a>
                    </div>
                    
                    <div className={NavCSS.bars} onClick={activeNav}>
                        <span></span>
                        <span></span>
                        <span></span>

                    </div>
                
                </header>

            </section>
        </>
    )

}

export default Nav;