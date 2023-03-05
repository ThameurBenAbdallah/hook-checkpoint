
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function MoviesNavbar({onSearchMovie}) {
  const [search, setSearch] = useState('');
  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     onSearchMovie(search);
      
  //   };
  useEffect(() => {
    onSearchMovie(search)

  }
   , [search]);
  return (
    <Navbar bg="light" expand="lg" fixed= "top">
      <Container fluid>
        <Navbar.Brand href="/">Movie List </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About us</Nav.Link>
            
          </Nav>
          <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) =>{ setSearch(e.target.value)}}
            />
            
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MoviesNavbar;