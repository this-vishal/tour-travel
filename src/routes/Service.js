import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import ServiceImg from "../assets/9.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

const Service=()=>{



    return (
        <>
         <Navbar/>
        <Hero 

            cName ="hero"

            heroImage = {ServiceImg}

            title="Service"

            text="Choose Your Fevourite Destination."
            url="/"

            btnClass="show"

            buttonText="Travel Plan"
         />
         <Trip/>
 <Footer/>

        </>
    )
}

export default Service
;