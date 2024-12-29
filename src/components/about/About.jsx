import React from 'react';
import './About.css';
import Image from '../../assets/me-2.jpg';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        Hi there! I'm Roshan, and I’m currently based in Vancouver, Canada. I recently completed my Master’s in Cybersecurity at SFU and have gained hands-on experience through my co-op at Vosyn. <br /><br />
                        It’s been an exciting journey so far, and I’m eager to continue growing in the field of Cybersecurity, Cloud Computing, and DevOps. These days, I’m focused on refining my skills by working on projects, contributing to open-source repositories, and preparing for certifications to expand my knowledge. <br /><br />
                        Currently, I’m working on enhancing my technical abilities, collaborating with teams, and exploring new opportunities in the tech space. <br /><br />
                        Here are some of the technologies I’ve been diving into recently:
                        </p>
                        <ul className="about__list">
                            <li>AWS Cloud Practioner Certification</li>
                            <li>Certified Kubernetes Administrator</li>
                            <li>Terraform</li>
                            <li>Javascript</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Download CV</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About