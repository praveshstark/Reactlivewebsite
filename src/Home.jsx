import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/img2.jpeg';
import Common from './Common';

const Home=()=>{
    return(
        <>
            <Common 
            name="Good Times + Crazy Friends = Great Memories!" 
            imgsrc={web} 
            visit="/Service" 
            btname="Let's Go"
             />
        </>
    );
};


export default Home;