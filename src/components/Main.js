import { Twitter, Facebook, Instagram, LinkedIn } from '@material-ui/icons';
import React from 'react';
import './styles/Main.css'
import anu from "./assets/asset1.png"
const Main =() => {
    return(
        <div className='main'>
            <div className="main__container">

                <div className="main__content">       
            <div className="text">
                <p>Hello Everyone !</p>
                <h1>
                    I am Adonijah Kiplimo
                </h1>
                <p>Front-end Developer & Designer</p>
      <div  className='icons'>
        <Twitter className='icon'/>
        <Instagram className='icon'/>
        <Facebook className='icon'/>
        <LinkedIn className='icon'/>

      </div>
      <div className='buttons'>
        <button> See Me</button>
        <button> Hire Me</button>
      </div>

            </div>
             </div> 
             <div className='main__img'>
                <img src={anu} alt="" />
             </div>
                </div>
        </div>
    )
}
export default Main