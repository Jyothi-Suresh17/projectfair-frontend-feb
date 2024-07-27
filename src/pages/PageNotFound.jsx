import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <>
    <div className="row text-center">
    <div style={{height:'90vh'}}  className='col-md-6  d-flex justify-content-center align-item-center mt-5'>
      <img src="https://www.scopycode.com/includes/images/blog/error_404.gif" alt="no image"  className='img-fluid'/>
      
    </div>

   <div className=' col-md-6'>
   <h2 className='text-center'>Opps!!! Looks like you are lost</h2>
   <Link to='/' style={{textDecoration:'none'}} > <button className="btn btn-outline-success my-3"><FontAwesomeIcon icon={faArrowLeft} />Back to Home</button></Link>
   </div>
    </div>
    </>
  )
}

export default PageNotFound