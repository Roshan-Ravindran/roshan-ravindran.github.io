import React from 'react';
import './Services.css';
import Image1 from '../../assets/CKA.png'
import Image2 from '../../assets/AWS-solution-architect.png'
import Image3 from '../../assets/google-cloud.png'
import Image4 from '../../assets/cisco-nwess.png'

const data = [
    {
        id: 1,
        image: Image1,
        title: "Certified Kubernetes Administrator",
        description:
            "Successfully passed the Certified Kubernetes Administrator exam conducted by the Cloud Native Computing Foundation",
        link: "https://www.credly.com/badges/24f0187c-c470-4221-af3a-ef5f66e0fc0b/public_url"
    },
    {
        id: 2,
        image: Image2,
        title: "AWS Certified Solutions Architect Associate ",
        description:
            "Currently preparing for the AWS Certified Solutions Architect Associate exam",
    },
    {
        id: 3,
        image: Image3,
        title: "Google Cloud Fundamentals for AWS Professionals",
        description:
            "This course is designed to help AWS professionals to get up to speed with Google Cloud Platform",
        link: "https://www.cloudskillsboost.google/public_profiles/fa54f44f-3e48-4e4a-9f00-26125ee3a5c8/badges/11256999"
    },
    {
        id: 4,
        image: Image4,
        title: "Cisco Networking Essentials",
        description:
            "Obtained the certification with fundamental knowledge on Networking",
        link: "https://www.linkedin.com/in/roshan-ravindran/details/certifications/1635545855008/single-media-viewer/?profileId=ACoAABagZP0B0eDL62FF3FpGmwA-i7nWxrtP1Fc"
    }
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