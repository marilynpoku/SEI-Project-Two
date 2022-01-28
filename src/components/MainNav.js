import React from 'react'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const MainNav = () => {


  return (

    <>
      <Container className='w-100 nav-wrapper' >
        <Navbar.Brand href='/'className='nav-brand'>Cocktails🍸</Navbar.Brand>
      </Container>
    </>
  )
}


export default MainNav