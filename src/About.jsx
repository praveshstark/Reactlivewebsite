import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/img1.jpg';
import Common from './Common';

const About=()=>{
    return(
        <>
            <Common 
                name="Welcome to About ME!" 
                imgsrc={web} 
                visit="/Contact" 
                btname="Contact me"
            />
        </>
    ); 
};


export default About;