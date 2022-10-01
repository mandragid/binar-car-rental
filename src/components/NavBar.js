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
		<div class="Hero d-flex justify-content-center">
			<div className="NavBar">
				<Navbar expand="lg d-flex">
					<Container className="container d-flex me-auto">
						<Navbar.Brand href="#home">BCR</Navbar.Brand>
						<Navbar.Toggle aria-controls="me-auto basic-navbar-nav" />
						<Navbar.Collapse id="me-auto">
							<Nav className="me-auto">
								<Nav.Link href="#home">Our Services</Nav.Link>
								<Nav.Link href="#link">Why Us</Nav.Link>
								<Nav.Link href="#link">Testimonial</Nav.Link>
								<Nav.Link href="#link">FAQ</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
				<div className="container SectionSatu  d-md-flex">
					<div className="kiri">
						<div className="Sewa d-flex ms-5">Sewa dan Rental Mobil Terbaik di kawasan (Lokasimu)</div>
						<div className="Selamat ms-5 mt-3 text-wrap">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau.</div>
						<div className="Tombol ms-5 mt-5">
							<Button variant="success">Mulai Sewa Mobil</Button>
						</div>
					</div>
					<div className="Kanan d-flex">
						<img className="img-fluid" alt="Mercy" src={GambarMobil} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
