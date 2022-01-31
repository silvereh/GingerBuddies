import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

import './Header.scss';
import logo from './logo.svg';

const Header = () => (
	<header className="Header" data-testid="Header">
		<a className="Header-skip-nav" href="#main">
			Skip to site content.
		</a>
		<Navbar className="Header-navbar" variant="dark" expand='md' fixed="top">
			<Container>
				<Navbar.Brand href="/">
					<img src={ logo } width="250" height="50" alt="" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto"></Nav>
					<Nav className='mr-auto'>
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/#about">About</Nav.Link>
						<Nav.Link href="/#roadmap">Roadmap</Nav.Link>
						<Nav.Link href="/#team">Team</Nav.Link>
						<Nav.Link href="/#faq">FAQ</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	</header>
);

export default Header;
