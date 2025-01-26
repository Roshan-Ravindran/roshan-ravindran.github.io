import React from 'react';
import './Services.css';
import Image1 from '../../assets/CKA.png'
import Image2 from '../../assets/AWS-solution-architect.png'
import Image3 from '../../assets/cisco-nwess.png'

const data = [
    {
        id: 1,
        image: Image1,
        title: "Certified Kubernetes Administrator",
        description:
            "Sucessfuly achieved the certification",
    },
    {
        id: 2,
        image: Image2,
        title: "AWS Certified Solutions Architect Associate ",
        description:
            "Currently pursuing an Udemy course to achieve the certification",
    },
    {
        id: 3,
        image: Image3,
        title: "Cisco Networking Essentials",
        description:
            "Obtained the certification with fundamental knowledge on Protocols, DHCP address, IPv4 and IPv6 address, Network security, VPN, etc.",
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Certifications</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt='' className='services__img' width="80" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services