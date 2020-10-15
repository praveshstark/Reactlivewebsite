import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/img2.jpeg';

const Image=(props)=>{
    return(
        <>      
               
                <img src={props.imgsrc} className="card-img-top" id="ccc" alt="Satyam" />
              
               
               
        </>
    );
};


export default Image;