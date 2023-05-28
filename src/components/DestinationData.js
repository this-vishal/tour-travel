

import { Component } from "react";
import "./DestinationStyles.css"
import m1 from "../assets/3.jpg";
import m2 from "../assets/4.jpg";
import m3 from "../assets/5.jpg";
import m4 from "../assets/6.jpg";

class DestinationData extends Component
{
    constructor(props){
        super(props);
        this.props = props;
    }

    render(){
        return (

            <>
                <div className="destination">
                
                    <div className={this.props.className}>
    
                        <div className="des-text">
                            <h2>{this.props.heading}</h2>
                          <p>
                         {this.props.text}
                           </p>
                        </div>
    
            <div  className="image">
    
                    <img alt="" src={this.props.img1} />
                    <img alt="" src={this.props.img2} />
    
            </div>
    
                    </div>
                </div>
            </>
        )
    }
        
    
}
export default DestinationData