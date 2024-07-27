import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
  <>

<div className="container container-fluid ">
    
    <FontAwesomeIcon icon={faPenToSquare} onClick={handleShow}  className='text-danger '/>
      

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title className='text-success'> Add Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row >
            <Col sm={12} md={6}>
              <label htmlFor="projImg">
                <input id='projImg' type="file"  style={{display:'none'}}/>
                <img src="https://cdn.pixabay.com/photo/2017/05/03/22/08/image-2282302_960_720.png" className='w-100 img-fluid' alt="no image" />
              </label>
            
            </Col>
            <Col sm={12} md={6}>
            <input type="text" className='form-control my-2'  placeholder='Project Title'/>
          <input type="text" className='form-control my-2'  placeholder='Language'/>
          <input type="text" className='form-control my-2'  placeholder='Github'/>
          <input type="text" className='form-control my-2'  placeholder='Website'/>
          <textarea  className='form-control my-2' placeholder='Overview' rows={'4'}></textarea>

            </Col>
          </Row>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Add Project
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  
  </>
  )
}

export default EditProject