import React from 'react'
import { RiFireLine, RiCupLine, RiAmazonFill } from 'react-icons/ri';
import { SiKubernetes } from "react-icons/si";
import { FaPython } from "react-icons/fa";


const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <RiFireLine className='about__icon' />

                <div>
                    <h3 className="about__title">1</h3>
                    <span className="about__subtitle">Year of Experience</span>
                </div>
            </div>

            <div className="about__box">
                <SiKubernetes className='about__icon' />

                <div>
                    <h3 className="about__title">70%</h3>
                    <span className="about__subtitle">Kubernetes</span>
                </div>
            </div>

            <div className="about__box">
                <RiAmazonFill className='about__icon' />

                <div>
                    <h3 className="about__title">80%</h3>
                    <span className="about__subtitle">AWS</span>
                </div>
            </div>

            <div className="about__box">
                <FaPython className='about__icon' />

                <div>
                    <h3 className="about__title">70%</h3>
                    <span className="about__subtitle">Python</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox