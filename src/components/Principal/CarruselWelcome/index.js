import './style.css'
import React from 'react'
import { Carousel } from 'antd';

import Slider1 from '../../assets/Slider1.png'
import Slider2 from '../../assets/Slider2.png'
import Slider3 from '../../assets/Slider3.png'


const CarruselWelcome = ({setCarruselWelcome, setRouterRole}) =>{

      function onChange(a, b, c) {
        console.log(a, b, c);
      }
      
      const contentStyle = {
        height: '90vh',
        color: 'black',
        lineHeight: '160px',
        textAlign: 'center',
        background: 'white',
      };
    


    return(
     <div>
        <Carousel afterChange={onChange}>
            <div>
                <img src={Slider1} />
            </div>
            <div>
                <img src={Slider2} />
            </div>
            <div>
                <img className="img-carrusel" src={Slider3} />
                <button className="button-start" onClick={() =>{
                setRouterRole(true)
                setCarruselWelcome(false)
                }}>Comenzar</button>
            </div>
        </Carousel>
     </div>   
    )
}

export default CarruselWelcome