import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import Aboutus from "../components/Aboutus";

const About=()=>{



    return (
        <>
             <Navbar/>
        <Hero 

            cName ="hero-mid"

            heroImage = {AboutImg}

            title="ABOUT US"

            // text="Choose Your Fevourite Destination."
            url="/"

            // btnClass="show"

            // buttonText="Travel Plan"
         />
          <Aboutus

                heading="Our History"
                text="Before the railway system was invented, people mostly travelled on foot (budget travel) or by water (the first-class travel at that time). However, when in the 1840s, an extensive network of railways was built, people started to travel for fun. Mid-19th century definitely marks a real beginning of modern tourism."

          />
                <Aboutus

heading="Our Mission"
text="The best brands combine physical, emotional, and logical elements into one exceptional customer (and employee) experience that you value as much as they do. A good mission statement will not only explain your brand’s purpose, but will also foster a connection with customers.

When your brand creates a genuine connection with customers and employees, they'll stay loyal to your company, thereby increasing your overall profitability.

Mission statements also help you stand out in the marketplace, differentiating your brand from the competition."

/>
<Aboutus

heading="Our Vision"
text="genuine connection
 with customers and employees, they'll stay loyal to your company, 
 thereby increasing your overall profitability.

Mission statements also help you stand out in the marketplace, 
differentiating your brand from the competition."

/>

        <Footer/>
        </>
    )
}

export default About;