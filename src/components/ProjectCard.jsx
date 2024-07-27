import React from 'react'
import projectCardImg from '../assets/ProjectCard.webp'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

function ProjectCard() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className="container-fluid">
    <Card style={{ width: '100%' }} className='shadow' onClick={handleShow}>
      <Card.Img variant="top" src="https://assets.asana.biz/transform/d2ffb5c8-a7c2-4e39-8447-f8e2501c5bdc/article-project-planning-project-design-2x" width={'100%'} />
      <Card.Body className='text-center '>
        <Card.Title className=' fs-4'>Project Name</Card.Title>
      </Card.Body>
    </Card>


    {/* modal to display card on click */}
    <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Media Player</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Row>
            <Col sm={12} md={6} >
            <img src={projectCardImg} alt=""  width={"100%"}/>
            </Col>
            <Col sm={12} md={6}>
            <h4>Discription : </h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vero beatae, quidem soluta iste inventore iure earum commodi excepturi quisquam asperiores distinctio recusandae quos vethen jhiljritatis enim ratione ea dolor quia!
            Aut veniam assumenda ab cellendus illo perferendis deleniti ullam.</p>
            <h4>Technologies : </h4>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center '>
          <Link to={''} ><FontAwesomeIcon icon={faGithub}  className='fa-2x'/></Link>
          <Link to={''} ><FontAwesomeIcon icon={faLink}  className='fa-2x ms-4'/></Link>
        </Modal.Footer>
      </Modal>

    </div>
    </>
  )
}

export default ProjectCard