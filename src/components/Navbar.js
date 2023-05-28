import React, { Component, useState } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";



class Navbar extends Component{


    constructor(){
        super();
        this.state = {
            clicked :false,
        }
    }

    handleClick=()=>{

        this.setState({
            clicked : 
            !this.state.clicked,
        })

    }
    



    render(){
        
    return (
        <>
            <nav className="navbarItems">
                <h1 className="navbar-logo">Trippy</h1>
                <div className="menu-icons" onClick={this. handleClick}>
               
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                 
                   
                  
                </div>
                <ul className={this.state.clicked ? "nav-menu active": "nav-menu"}>
                    {MenuItems.map((item, index) => {

                        return (
                            <li key={index}>

                                <a className={item.cName} href={item.url}><i class={item.icon}></i>
                                    {item.title}
                                </a>

                            </li>
                        )

                    })}
                    <button>Signup</button>
               
                </ul>

            </nav>
        </>
    );

    }

}
export default Navbar;