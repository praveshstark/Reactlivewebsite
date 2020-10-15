import React from 'react';
import Sdata1 from './Sdata1';
import Image from './Image';

const Gallery=()=>{
    return(
        <>
        <div className="my-5">
        <h1 className="text-center" id="mem">Memories</h1>
        </div>
        <div className="col-md-10 col-10 mx-auto">
            {Sdata1.map((val,ind)=>{
                        return <Image key={ind} gb
                            imgsrc={val.imgsrc}
                            title={val.title}
                            text={val.text}
                        />
                    })}
  

        </div>
        </>
    ); 
};


export default Gallery;