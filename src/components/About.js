import React from 'react'
import pizza from "../images/pizza.jpg"

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-6 p-25">
                    <h3>About us</h3>
                    <h1>WELCOME TO MAESTRO PIZZINI</h1>
                    <p>
                    Investigationes demonstraverunt lectores legere me lius quod ii
                    legunt saepius. Claritas est etiam processus dynaus, quise
                    sequitur mutationem consuetudium lectorum.
                    </p>
                    <div className="about__btn">
                        <a href="" className="btn btn__smart">READ MORE</a>
                    </div>
                    </div>
                    <div className="col-6">
                        <div className="about__img">
                        <img src={pizza} alt="not found"/>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    )
    }

export default About