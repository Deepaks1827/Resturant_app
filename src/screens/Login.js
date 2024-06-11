import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate();
  const [credentials,setCredentials]=useState({password:'',email:''})
  const  submitHandler = async(e)=>{
      e.preventDefault();
      const response = await fetch("http://localhost:8000/api/loginuser",{
          method:'POST',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify({ email:credentials.email, password:credentials.password})
      }
  );
  const json = await response.json()
  console.log(json);
  if(!json.success){
      alert("Enter Valid Credentials.")
  }
  if(json.success){
    localStorage.setItem("authToken",json.authToken)
    console.log(localStorage.getItem("authToken"));
    navigate("/");
}

  }
  const onChange =(event)=>{
     setCredentials({...credentials,[event.target.name]:event.target.value})
  }
  return (
    <>
    <div className='container'> 
     <form onSubmit={submitHandler}>
    
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={credentials.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={credentials.password} id="exampleInputPassword1"  onChange={onChange}/>
  </div>
 
  
  <button type="submit" className="btn btn-success">Submit</button>
  <Link to = "/signup" className='m-3 btn btn-danger'>I am a new User.</Link>
</form>
</div>
    </>
  )
}
