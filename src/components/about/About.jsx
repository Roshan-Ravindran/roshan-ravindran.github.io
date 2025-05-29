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
  Hi, I’m Roshan! A recent Master’s graduate in Cybersecurity from SFU and an engineer who thrives at the intersection of Cloud, Automation, and security. 

  <br /><br />

  💻 <strong>What I Bring to the Table</strong><br /><br />
  {'▹'} <strong>Cloud Security & DevOps:</strong> I’ve worked hands-on with AWS, Kubernetes, Terraform, and Github Actions to deploy secure, scalable systems. I’ve implemented CIS benchmark-based auto-remediation in multi-account AWS setups, improving compliance and real-time threat response.<br /><br />
  {'▹'} <strong>Startup Mindset:</strong> At Vosyn.ai, I led the development of a full-stack demo prototype (VosynConnect), collaborated with the frontend team using Next.js, and handled deployment on AWS — all under tight deadlines, quick iterations.<br /><br />
  {'▹'} <strong>Ownership Mentality:</strong> Whether it's building a cafeteria ordering system solo during my early internship or stepping up to lead demo development for a startup, I take initiative and deliver.<br />

  <br /><br />

  🚀 <strong>Where I Thrive</strong><br /><br />
{'▹'} As a fresh graduate, I’m in the phase of my career where <strong> learning, and hands-on experience matter most</strong><br />
{'▹'} I’m open to working with <strong>minimal salary</strong> if the role challenges me and aligns with what I believe in<br />
{'▹'} When I’m genuinely interested in the work, <strong>I’m all in, regardless of the hours</strong><br />
{'▹'} I bring energy, adaptability, and a builder’s mindset to any team I join
  <br /><br />

  🔧 <strong>Tools & Tech I Work With</strong>
</p>

<ul className="about__list">
  <li>AWS (IAM, EC2, S3, Lambda, ECR, ECS)</li>
  <li>Kubernetes (self-hosted & cloud-managed)</li>
  <li>Terraform & Infrastructure as Code</li>
  <li>Jenkins & GitHub Actions for CI/CD</li>
  <li>Docker, Node.js</li>
  <li>CIS Benchmarks & Security Automation</li>
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