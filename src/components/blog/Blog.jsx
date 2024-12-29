import React from 'react';
import './Blog.css';

import Image1 from '../../assets/blog-3.svg';
import Image2 from '../../assets/SSO.png';
import Image3 from '../../assets/ZAP.jpg';

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Latest Posts</h2>

            <div className="blog__container grid">
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://www.usenix.org/conference/usenixsecurity23/presentation/gavazzi"><span className="blog__category">SSO</span></a>
                        <a href="https://medium.com/@itsroshanr/mfa-incorporated-b86ebe3918b6"><img src={Image2} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">SSO Incorporated</h3>
                        <div className="blog__meta">
                            <span>10 October, 2023</span>
                            <span className="blog__dot">.</span>
                            <span>Roshan</span>
                        </div>
                    </div>
                </div>
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://msrc.microsoft.com/update-guide/vulnerability/CVE-2023-21768"><span className="blog__category">Windows</span></a>
                        <a href="https://medium.com/@itsroshanr/how-windows-ancillary-function-driver-for-winsock-led-to-privilege-escalation-vulnerability-f65b590845ba"><img src={Image1} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">How Windows Ancillary Function Driver for WinSock led to Privilege Escalation Vulnerability..</h3>
                        <div className="blog__meta">
                            <span>14 December, 2023</span>
                            <span className="blog__dot">.</span>
                            <span>Roshan</span>
                        </div>
                    </div>
                </div>
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://www.hackthebox.com/machines/devel"><span className="blog__category">Devel - HTB</span></a>
                        <a href="https://medium.com/@itsroshanr/journey-into-the-abyss-compromising-the-devel-machine-on-hack-the-box-7ea7664dd063"><img src={Image1} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Journey into the Abyss: Compromising the “Devel” Machine on Hack The Box</h3>
                        <div className="blog__meta">
                            <span>14 December, 2023</span>
                            <span className="blog__dot">.</span>
                            <span>Roshan</span>
                        </div>
                    </div>
                </div>
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://www.zaproxy.org/"><span className="blog__category">ZAP</span></a>
                        <a href="https://medium.com/@itsroshanr/exploring-zap-a-web-application-security-testing-tool-961d867c14b8"><img src={Image3} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Exploring ZAP: A Web Application Security Testing Tool</h3>
                        <div className="blog__meta">
                            <span>14 December, 2023</span>
                            <span className="blog__dot">.</span>
                            <span>Roshan</span>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    )
}

export default Blog