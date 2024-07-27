import { faFacebook, faGithub, faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons'
import {  faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import React from 'react'


function Footer() {
  return (
    <>
   <div className=" bg-success mt-5 container-fluid">
      <div className="row w-100">
        <div className="col-md-4 p-4 ms-md-5">
          <h4 className='' > <FontAwesomeIcon icon={faPuzzlePiece}   size='1x'/>Project Fair</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet, obcaecati distinctio recusandae nesciunt sunt perferendis consectetur odit. A repudiandae eveniet corporis pariatur nulla provident dolores illum reiciendis unde omnis?</p>
        </div>

        <div className="col-md-2 p-4 justify-content-center d-md-flex">
         <div>
         <h4>Links</h4>
        
          <p className='mt-4 '> <Link to={'/'} className='text-primary' style={{textDecoration:'none'}}>Home</Link></p>
          <p><Link to={'/project'} className='text-primary' style={{textDecoration:'none'}}>Project</Link></p>
          <p><Link to={'/dashboard'} className='text-primary' style={{textDecoration:'none'}}>Dashboard</Link></p>
         </div>
        </div>

        <div className="col-md-2 p-4">
          <h4>Guides</h4>
          <p>React</p>
          <p>React Bootstrap</p>
          <p>Bootstrap</p>
        </div>

        <div className="col-md-3 p-4">
          <h4>Contact Us</h4>
          <div className="d-flex mt-4">
            <input type="text" className='form-control' placeholder='Email Id' />
            <button className="btn btn-warning ms-3">Subscribe</button>
            
          </div>

          <div className='d-flex justify-content-between mt-3'>
          <FontAwesomeIcon icon={faFacebook} size='2xl'/>
          <FontAwesomeIcon icon={faLinkedin}  size='2xl' />
          <FontAwesomeIcon icon={faGithub}  size='2xl' />
          <FontAwesomeIcon icon={faInstagram}  size='2xl' />

          </div>
        </div>

        <div className="col-md-1"></div>
      </div>
    </div>
    
    
    </>
  )
}

export default Footer