import { faGlobe, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import AddProject from './AddProject'
import EditProject from './EditProject'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function MyProject() {
  return (
   <>
   <div className="container container-fluid shadow my-3 py-3">
    <div className="div d-flex justify-content-between py-3">
      <h4 className='text-success'>My Project</h4>
      <button className="btn " ><AddProject/></button>
    </div>
    <div className="contentRow d-flex bg-secondary justify-content-between shadow rounded p-2 ">
      <h5>Project Name</h5>
      <div className='d-flex align-items-center p-2'>
      <EditProject/>
      <FontAwesomeIcon icon={faGlobe} className='text-danger me-2' />
      <FontAwesomeIcon icon={faGithub} className='text-danger me-2' />
      <FontAwesomeIcon icon={faTrash} className='text-danger me-2' />
      </div>
    </div>
   </div>
   </>
  )
}

export default MyProject