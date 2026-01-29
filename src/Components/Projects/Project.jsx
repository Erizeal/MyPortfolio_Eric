import React from "react";
import ProjectCSS from "./../Projects/Project.module.css";
import img1 from '../../Sample1.jpg';
import img2 from '../../Sample2.jpg';
import img3 from '../../Sample3.jpg';
import img4 from '../../Sample4.jpg';

function Project() {
AOS.init();
return (
    <>
        <section id="projects">
    <div className={ProjectCSS.project}> 
            <h2  data-aos="fade-down" data-aos-duration="1500">Project Title</h2>
            <p data-aos="fade-down" data-aos-duration="1500">This project showcases my ability to integrate design, development, and data into a cohesive digital experience. From concept to execution, I focused on delivering a solution that is both visually engaging and functionally robust—tailored to meet real user needs with precision and creativity.</p>
            
            <div className={ProjectCSS.project_cards}>
                <div className={ProjectCSS.project_card} data-aos="fade-up" data-aos-duration="1500">
                    <img src={img1} alt="Project-img-1" />

                    <div>
                        <h4 data-aos="fade-up" data-aos-duration="1500">Example</h4>
                        <p data-aos="fade-up" data-aos-duration="1500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati adipisci laboriosam quia commodi soluta sit magni tempora accusamus vitae iure aliquam alias quam mollitia, libero eaque veniam quod perferendis?</p>

                        <a href="#" data-aos="fade-up" data-aos-duration="1500"> Read more <i className="fa-solid fa-arrow-right-long" data-aos="fade-up" data-aos-duration="1500"> </i></a>
                    </div>
                </div>

                <div className={ProjectCSS.project_card} data-aos="fade-up" data-aos-duration="1500">
                    <img src={img2} alt="Project-img-2"  />

                    <div>
                        <h4 data-aos="fade-up" data-aos-duration="1500">Example</h4>
                        <p data-aos="fade-up" data-aos-duration="1500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati adipisci laboriosam quia commodi soluta sit magni tempora accusamus vitae iure aliquam alias quam mollitia, libero eaque veniam quod perferendis?</p>
                        <a href="#" data-aos="fade-up" data-aos-duration="1500"> Read more <i className="fa-solid fa-arrow-right-long" data-aos="fade-up" data-aos-duration="1500"> </i></a>
                    </div>
                </div>

                <div className={ProjectCSS.project_card}>
                    <img src={img3} alt="Project-img-3" />

                    <div>
                        <h4 data-aos="fade-up" data-aos-duration="1500">Example</h4>
                        <p data-aos="fade-up" data-aos-duration="1500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati adipisci laboriosam quia commodi soluta sit magni tempora accusamus vitae iure aliquam alias quam mollitia, libero eaque veniam quod perferendis?</p>

                        <a href="#" data-aos="fade-up" data-aos-duration="1500"> Read more <i className="fa-solid fa-arrow-right-long" data-aos="fade-up" data-aos-duration="1500"> </i></a>
                    </div>
                </div>

                <div className={ProjectCSS.project_card} data-aos="fade-up" data-aos-duration="1500">
                    <img src={img4} alt="Project-img-4" />

                    <div>
                        <h4 data-aos="fade-up" data-aos-duration="1500">Example</h4>
                        <p data-aos="fade-up" data-aos-duration="1500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati adipisci laboriosam quia commodi soluta sit magni tempora accusamus vitae iure aliquam alias quam mollitia, libero eaque veniam quod perferendis?</p>

                        <a href="#" data-aos="fade-up" data-aos-duration="1500"> Read more <i className="fa-solid fa-arrow-right-long" data-aos="fade-up" data-aos-duration="1500"> </i></a>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </>
)
}

export default Project;