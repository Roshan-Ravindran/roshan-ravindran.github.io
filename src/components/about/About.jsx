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
                        I’m Roshan. A recent Master’s graduate in Cybersecurity from SFU with a passion for solving complex problems and automating solutions. My journey has been shaped by hands-on experience in cloud computing, DevOps, and cybersecurity.
                        <br /><br />
                        💻 What I Do <br /><br />
                        {'>'} Cloud Security & DevOps: I’ve worked on deploying secure solutions using AWS, Kubernetes, and Jenkins, ensuring compliance with industry benchmarks like CISv1.4.0.<br />
                        {'>'} At Vosyn, I led a team to develop and deploy the VosynConnect demo prototype while collaborating on frontend development and GCP hosting.<br />
                        <br /><br />
                        🎯 What Drives Me<br /><br />
                        I thrive on exploring emerging technologies and enhancing my skills to make a tangible impact.<br /><br />

                        🚀 My current goals include:<br /><br />
                        {'>'} Gaining Certifications to showcase my skills<br />
                        {'>'} Building personal projects to showcase my expertise in cloud and DevOps<br />
                        {'>'} Contributing to open-source communities<br />
                         <br /><br />
                        Here are some of the technologies I’ve been diving into recently:
                        </p>
                        <ul className="about__list">
                            <li>AWS Solution Architect Certification</li>
                            <li>Terraform</li>
                            <li>Jenkins</li>
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