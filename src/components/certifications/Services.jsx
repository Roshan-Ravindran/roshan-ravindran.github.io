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
            "Sucessfully achieved the certification",
        link: "https://www.credly.com/badges/24f0187c-c470-4221-af3a-ef5f66e0fc0b/public_url"
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
            "Obtained the certification with fundamental knowledge on Networking",
        link: "https://www.linkedin.com/in/roshan-ravindran/details/certifications/1635545855008/single-media-viewer/?profileId=ACoAABagZP0B0eDL62FF3FpGmwA-i7nWxrtP1Fc"
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Certifications</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description,link }) => {
                    return (
                        
                        <div className="services__card" key={id}>
                            <a href={link} target="_blank" rel="noreferrer" >
                            <img href={link} src={image} alt='' className='services__img' width="80" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p> </a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services