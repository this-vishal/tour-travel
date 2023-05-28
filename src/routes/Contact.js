import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import ContactImg from "../assets/8.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
const Contact=()=>{



    return (
        <>
           <Navbar/>
        <Hero 

            cNmae ="hero"

            heroImage ={ContactImg}

            title="Contact"

            text="Choose Your Fevourite Destination."
            url="/"

            btnClass="show"

            buttonText="Travel Plan"
         />
         <ContactForm/>
        <Footer/>
        </>
    )
}

export default Contact;