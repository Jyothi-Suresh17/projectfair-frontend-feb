import { faArrowRight,faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import projectimg from '../assets/image2.png'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'

function Home() {

  const [isLogin,setIsLogin]=useState(false);

  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      setIsLogin(true)
    }
    else{
      setIsLogin(false)
    }
  },[])
  return (
   <>
   <div className="container-fluid bg-success d-flex " style={{height:'188vh'}}>
   <div className="row align-items-center p-3 p-md-5">
    <div className="col-md-6 ps-5">
     <h1 className='text-light mt-3' style={{fontSize:'50px'}} >Project Fair</h1>
     <h5 className='text-primary'>one stop destination for all software development Projects</h5>

    {!isLogin? <Link to={'/login'} style={{textDecoration:'none'}}><button className="btn btn-warning mt-4 mx-2">Get Started<FontAwesomeIcon icon={faArrowRight} /></button></Link>:
     <Link to={'/dashboard'} style={{textDecoration:'none'}}><button className="btn btn-warning mt-4">Manage Projects<FontAwesomeIcon icon={faArrowRight} /></button></Link>}
     
    </div>
    <div className="col-md-6 mt-5">
<img src={projectimg} alt="projectimage" className='img-fluid mainIM w-75'  />
    </div>
   </div>
   </div>

   <div className="container-fluid mt-5">
    <h1>Explore our Projects</h1>
    <div className="row mt-5">
      <div className="col-md-4 p-4">
        {/* project cards will be visible here one by one  */}
        <ProjectCard/> 
        
      </div>

      <div className="col-md-4 p-4">
        {/* project cards will be visible here one by one  */}
        <ProjectCard/> 
        
      </div>

      <div className="col-md-4 p-4">
        {/* project cards will be visible here one by one  */}
        <ProjectCard/> 
        
      </div>

    </div>
    <Link to={'/project'} style={{textDecoration:'none'}}><h5 className='text-center text-danger'>See More Projects <FontAwesomeIcon icon={faAngleRight} /></h5></Link>
   </div>
   </>
  )
}

export default Home