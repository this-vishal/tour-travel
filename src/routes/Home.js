import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

const Home=()=>{




    return (
        <>
        <Navbar/>
        <Hero 

            cName ="hero"

            heroImage = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"

            title="Your Journey Your Story"

            text="Choose Your Fevourite Destination."
            url="/"

            btnClass="show"

            buttonText="Travel Plan"
         />
            <Destination/>
            <Trip/>
            <Footer/>



        </>
    )
}

export default Home;