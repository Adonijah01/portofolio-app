import React from "react";
import './styles/Section.css';
import anu2 from './assets/asset2.png'

const Section = () => {
    return(
        <div className="sections">
            <div className="sections__container">
                <div className="section__img">
                    <img src={anu2} alt = ""/>
                </div>

                <div className="section__content">
                    <h1> Adonijah Kiplimo</h1>
                    <p> Experience in frontend and backend development</p>
                    <p> Javascript development</p>
                    <p> Java</p>
                    <p> Python</p>
                    <p> UI and UX Designer</p>


                </div>
            </div>

        </div> 
    )
}

export default Section