import React from 'react';
import './Home.css';
import Me from '../../assets/me.jpg';
import HeaderSocials from './HeaderSocials';
//import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' width='350' />
                <h1 className="home__name">Roshan Ravindran</h1>
                <span className="home__education">Hired or Not, I’m Building<br/>
                I Take Initiative and Run With It.</span>

                <HeaderSocials />

                <a href="#contact" className="btn"> Contact Me</a>
                {/* Include the ScrollDown component  <ScrollDown />    */}
                
            </div>

            <Shapes />
        </section>
    )
}

export default Home