import React from "react";
import './DestinationStyles.css';
import m1 from "../assets/3.jpg";
import m2 from "../assets/4.jpg";
import m3 from "../assets/5.jpg";
import m4 from "../assets/6.jpg";

import m5 from "../assets/9.jpg";
import m6 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
const Destination = () => {


    return (

        <>
            <div className="destination">
                <h1>Popular Destinations</h1>
                <p>Tours give you the opportunity to see a lot , within a time frame</p>
            </div>
            <DestinationData

                className="first-des"

                heading="Jammu & Kashmir"

                text=" The Jewel of Srinagar, the Dal Lake is synonymous 
            to a visit to Srinagar and is almost a visual definition 
            of the town. Spread over 15 kms, it is the second-largest
             lake in Jammu & Kashmir. The mirror-like Dal Lake reflects 
             the snow-dusted 
             tic manner. Under this scheme, four centres of 
             excellence are being created in different Agro-Climatic
              Zones with common facilities like water harvesting
              , vermicompost,
              greenhouses, organic farming and farm mechanisat
            peaks of the Pir Panjal mountains while the colourful 
            sh..."
                img1={m3}
                img2={m4}
            />

            <DestinationData
                className="first-des-reverse"

                heading="Katra , Himanchal Pradesh"

                text=" Himachal Pradesh is a northern 
              Indian state in the Himalayas. 
              Agriculture being the main occupation of the people
               of Himachal Pradesh has an important role in the
                economy of the State. It provides direct employment
                 to about 69 per cent of the main working population.
                  Income from
               agriculture and allied sectors accounts for nearl
              It's home to scenic mountain towns
               and resorts such as Dalhousie. 
               Host to the Dalai Lama, Himachal 
               Pradesh has a strong Tibetan 
               presence. This is reflected in 
               its Buddhist temples and 
               monasteries, as well as its 
               vibrant Tibetan New Year 
               celebrations."
                img1={m5}
                img2={m6}
            />


        </>
    )
}
export default Destination;