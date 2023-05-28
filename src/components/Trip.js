import TripData from './TripData';
import './TripStyles.css'
import m1 from '../assets/12.jpg';

import m3 from '../assets/10.jpg';
import m4 from '../assets/8.jpg';


const Trip = () => {

    return (
        <>


            <div className='trip'>

                <h1>Recent Trips</h1>
                <p>You can Discover unique
                    destinationu using Google Maps</p>

                <div className='tripcard'>
                    <TripData

                        image={m1}

                        heading="Trip In Indonesia"

                        text="Indonesia, officially the Republic of Indonesia, 
                    is a country in Southeast Asia and Oceania between the
                     Indian and Pacific oceans. It consists of over 17,000
                      islands, including Sumatra, 
                    Java, Sulawesi, and parts of Borneo and New Guinea."

                    />
           

                <TripData

                    image={m3}

                    heading="Trip In Goa"

                    text="Goa is a state in western India with c
            oastlines stretching along the Arabian Sea.
            Its long history as a Portuguese colony prior to 
            1961 is evident in its preserved 17th-century churches 
            and the area’s tropical spice plantations. Goa is also
                known for its beaches"

                />
        
    
            <TripData

                image={m4}

                heading="Trip In Uganda"

                text="Kabalega Falls, is a fantastic waterfall that lets the Nile River cascade between Lakes Albert and Kyoga. The 140 ft. high pool of the waterfall is known as ‘The Devil’s Cauldron’. The waterfall is located in The Murchison Falls Conservation Area that houses almost 450 species of birds and lions, leopards, giraffes, chimpanzees, etc."

            />
   
   </div>
              
              </div>


        </>
    )
}

export default Trip;