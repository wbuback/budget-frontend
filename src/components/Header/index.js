import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
 return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">H7</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="/clientes">Clientes</Nav.Link>
        <Nav.Link href="/orcamentos">Orcamento</Nav.Link>
        <Nav.Link href="/produtos">Produtos e Serviços</Nav.Link>
        </Nav>
        <Form inline>
        <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
        <Button variant="outline-light">Buscar</Button>
        </Form>
    </Navbar>
 );
}

export default Header;