import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";

import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
return (
<section className="contact container section" id="contact">
    <h2 className="section__title">Get In Touch</h2>
    <div className="contact__container grid">
        <div className="contact__info">
            <h3 className="contact__title">Let's talk about everything!</h3>
            <p className="contact__details">
                Send me an <a href="mailto:itsroshanr@gmail.com" className="contact__email" >email.</a> 👋
            </p>
        </div>
        </div>
    </section>
    );
};

export default Contact;
