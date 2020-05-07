import React from "react";
import Link from "next/link";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar className="navbar-toggleable-sm">
      <Navbar.Brand href="/">
        <img
          alt=""
          src="/favicon.ico"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/" passHref>
            <Nav.Link>Accueil</Nav.Link>
          </Link>
          <Link href="/posts/fizzbuzz" passHref>
            <Nav.Link>FizzBuzz</Nav.Link>
          </Link>
          <Link href="/posts/bubblesort" passHref>
            <Nav.Link>BubbleSort</Nav.Link>
          </Link>
        </Nav>
        <Nav>
          <NavDropdown title="Me contacter" id="basic-nav-dropdown">
            <NavDropdown.Item href="https://github.com/aktasC" target="_blank">
              Github
            </NavDropdown.Item>
            {/* No use for a <Link> for this one since it's not navigation based. */}
            <NavDropdown.Item
              href="mailto:ceb.akt@gmail.com?subject=nextjs"
              target="_blank"
            >
              Email
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              href="https://fr.linkedin.com/in/cebrailaktas"
              target="_blank"
            >
              LinkedIn
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
