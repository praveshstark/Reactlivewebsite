import React, { useState } from 'react';


const Contact=()=>{
  const [data,setData]=useState({
    fullname:"",
    phone:"",
    email:"",
    msg:"",
  });

  const InputEvent=(event)=>{
    const{name,value}=event.target;

    setData((preval)=>{
      return{
        ...preval,
        [name]:value,
      };
    });
  };

  const formSubmit=(e)=>{
    e.preventDefault();
    alert(`My name is ${data.fullname} , my phone Node. is ${data.phone} , email ID is ${data.email} and Message is ${data.msg} !THANKS FOR CONTACT` );
  };
    return(
        <>
        <div className="my-5">
        <h1 className="text-center">Contact US</h1>
        </div>
        <div className="container contact_div">
        <div className="row">
        <div className="col-md-6 col-10 mx-auto">
    <form onSubmit={formSubmit}>
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">
    Name</label>
    <input
     type="text" 
    class="form-control" 
    id="exampleFormControlInput1" 
    name="fullname"
    value={data.fullname}
    onChange={InputEvent}
    placeholder="Enter Your name" />
  </div>
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">
    Mobile no.</label>
    <input
     type="number" 
    class="form-control" 
    id="exampleFormControlInput1" 
    name="phone"
    value={data.phone}
    onChange={InputEvent}
    placeholder="Enter Your Mobile No." />
  </div>
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">
    Email address</label>
    <input
     type="email" 
    class="form-control" 
    id="exampleFormControlInput1" 
    name="email"
    value={data.email}
    onChange={InputEvent}
    placeholder="name@example.com" />
  </div>
 
  <div class="form-group">
    <label 
    for="exampleFormControlTextarea1">
     Message</label>
    <textarea class="form-control" 
    id="exampleFormControlTextarea1" 
    rows="3"
    name="msg"
    value={data.msg}
    onChange={InputEvent}></textarea>
  </div>
  <br/>
        <div className="col-12" >
        <button className="btn btn-outline-primary" type="onSubmit">
        Submit form
        </button>
        </div>
    </form>
        </div>
        </div>
        </div>
        </>
    );
};


export default Contact;