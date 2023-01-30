import React, { useState } from 'react'
import './Home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons' ;
import { faEye ,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const  Home= () => 
 { 
  const Navigate= useNavigate();
  const[ passwordshow , setpasswordshown]=useState(true);
  const[eye,seteye] =useState(false);
  const togglepasswordvisiblity=() =>{
    setpasswordshown(passwordshow ? false : true);
  seteye(eye ?false :true);  
  }
  const{
    register,
    handleSubmit,
    formState:{errors,isVaild },
  }=useForm({mode:"onChange"});
   return ( 
    <body>
      <form onSubmit={handleSubmit}>
    <div className="main">
          <div className="sub-main">
          <div className="imgs">
          < FontAwesomeIcon  icon={faRightToBracket}/> <br></br>
      <strong className='welcome'>Welcome!</strong><br></br>
        <p className='sign'>Sign in to your account</p>
     <div> <label className='label'>Name</label>
      <input    className='nameline' type="text"
       {...register
      ("name",{
        required: " Name is required",
        minLength:{
          value:5,
          message:"this should be minimum 5 characters"
        }, 
        pattern:/^[A-Za-z]+$/i
      })}
      required
       />
       {errors && <p className='Display'>{errors.name?.message}</p>}
      <FontAwesomeIcon icon={faUser} className="faUser"/></div>
      <div>
      <label className='passlabel'>Password</label>
      <input   
       className='passwordline' 
        type = { passwordshow ? "password": "type"}  
          {...register("password",{
        required: "  password is required",
        minLength:{
          value:10,
          message:"This should be minimum 10 characters"
        }
        })}
       />
           <span onClick={togglepasswordvisiblity} > {eye ? < FontAwesomeIcon className='faEyeSlash' icon={faEyeSlash}/> : < FontAwesomeIcon  icon={faEye} />}</span> 
       {errors && <p className='passworddisplay'>{errors.password?.message}</p>}
   
      </div>
       <span className='box'><input type="checkbox"/>remember me?</span>
      <p className='forgot'>  
        <a href ='#url'  className='got'>forgot password? </a>
      </p> 
      <div>
      <button  type='submit' className='submitbutton' onClick={()=> {  Navigate(" /Timesheet");}}>login  <FontAwesomeIcon className="submitarrow" icon={faArrowRight}/></button>
      <button  type='submit' className='create'  onClick={()=>{Navigate("/Create");}} >Create<FontAwesomeIcon  className='createarrow' icon={faArrowRight}/></button>
      </div> 
      </div>
      </div>
  </div>
  </form>
  </body> 
     
     )}
     export default Home;