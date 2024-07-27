//for authentication..login and register in a single page

import { faArrowLeft, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { loginApi, registerApi } from "../services/allApi";

// for tostify

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Auth({register}) {

  // for navigation
  const navigate=useNavigate()

  const [userDetails,setUserDetails] =useState({
    username:'',
    email:'',
    password:''
  })

  console.log(userDetails);

  //function for register
  const handleRegister=async(e)=>{
    e.preventDefault()
    const {username,email,password}=userDetails;
    if(!username || !email || !password){
      toast.info('Please fill all the fields')
    }
    else{  
      const result=await registerApi(userDetails);
      //alert('Registration Successfull');
      console.log(result);
      if(result.status==200){
        toast.success('Registration Successfull');
        navigate('/login');
      }
      else{
        toast.error('Registration Failed');
      }  
    }   
  }

  //function for login

  const handleLogin = async(e)=>{

    e.preventDefault()
    const{email,password}=userDetails;
    if(!email || !password){
      toast.info('Please fill the fields completely')
    }

    else{

      const result = await loginApi({email,password})
      console.log(result);

      if(result.status==200){
        toast.success('Login Successfull')
        sessionStorage.setItem('exsistngUser',JSON.stringify(result.data.exsistingUser));
        sessionStorage.setItem('token',result.data.token);
        setUserDetails({
          username:'',
          email:'',
          password:''
        })
        setTimeout(() => {
          navigate('/')
        },2000);
      }
      else{
        toast.error(result.response.data);
      }
    }
  }

  return (
    <>
       <Container fluid className='d-flex flex-column  align-items-center  justify-content-center' style={{height:'600px',marginTop:'100px',marginBottom:'100px'}}>
    <Link to="/" style={{textDecoration:'none'}}>

    <p><FontAwesomeIcon icon={faArrowLeft} /> Back to Home</p>

    </Link>
      <Card  className='p-1 mt-3 rounded-3 w-75 bg-success text-white'>
        <Row>
        <Col sm={12} md={6} className='p-5 d-flex justify-content-center align-items-center'>
          <img src='https://cdn-icons-png.flaticon.com/512/4661/4661334.png' alt="" className='w-75'  />
        </Col>
        <Col sm={12} md={6} className='p-5 d-flex justify-content-center align-items-center flex-column'>
          <h3><FontAwesomeIcon icon={faPuzzlePiece} className=' fa-2x me-1'/> Project Fair</h3>
          {register?<h5>Sign Up to Your Accrount</h5>:
          <h5>Sign In to Your Account</h5>}
          <form action="" className='mt-4 w-75'>
            <div className='mb-3'>
           {register&&<input type="text" placeholder='Username' className='form-control rounded-4'  onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})}/>}
            </div>
            <div className='mb-3'>
            <input type="email" placeholder='Email' className='form-control rounded-4'  onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})} />
            </div >
            <div >
            <input type="password" placeholder='Password' className='form-control rounded-4'  onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})} />
            </div>
            <div className='mb-3'>
            {register?<div>
            <Button variant="warning" type="button" className='w-75 my-2 rounded-5 mt-3' onClick={handleRegister}>Register</Button>
            <p className="mt-2">Already a User? Click here to  <Link to='/login' className='text-danger fs-4' style={{textDecoration:'none'}}>Login</Link></p>
            </div>:
            <div>
            <Button variant="danger" type="submit" className='w-75 my-2 rounded-5' onClick={handleLogin} >Login</Button>
            <p className="mt-2">New User? Click here to<Link to='/register' className='text-danger fs-4' style={{textDecoration:'none'}}>Register</Link> </p>
            </div>}

            </div> 
          </form>
        </Col>
        </Row>
    </Card>
    <ToastContainer  position="top-center"  theme='colored'  autoClose={2000}  />
    </Container>
    </>
  );
}

export default Auth;
