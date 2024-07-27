import { faPuzzlePiece,faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header({dash}) {
  return (
    <>
      <Navbar className="bg-success">
        <Container>
         <Link to={'/'} style={{textDecoration:'none'}} >
         <Navbar.Brand  className='text-light fs-4'>
          <FontAwesomeIcon icon={faPuzzlePiece}   size='1x'/>
            Project Fair
          </Navbar.Brand>
         </Link>

         {dash&&<button className="btn btn-warning"><FontAwesomeIcon icon={faPowerOff} />Logout</button>}
        </Container>
      </Navbar>
    </>
  )
}

export default Header