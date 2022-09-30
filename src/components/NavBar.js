import "./NavBar.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import GambarMobil from "../img/mercy.png";

function NavBar() {
	return (
		<div class="container">
			<div className="NavBar">
				<Navbar expand="lg d-flex">
					<Container className="container d-flex justify-content-end float-end">
						<Navbar.Brand href="#home">BCR</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="justify-content-end float-end">
							<Nav className="justify-content-end float-end">
								<Nav.Link href="#home">Our Services</Nav.Link>
								<Nav.Link href="#link">Why Us</Nav.Link>
								<Nav.Link href="#link">Testimonial</Nav.Link>
								<Nav.Link href="#link">FAQ</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>

				<div class="row">
					<div class="col">column</div>
					<div class="col gambar">gambar</div>
				</div>
				<div class="row">
					<div class="col">column</div>
				</div>
				<div class="row">
					<div class="col">column</div>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
