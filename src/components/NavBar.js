import "./NavBar.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import GambarMobil from "../img/mercy.png";

function NavBar() {
	return (
		<div>
			<div className="NavBar">
				<Navbar expand="lg d-flex">
					<Container className="d-flex justify-content-end float-end">
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
				<div className="GambarMobil">
					{" "}
					<img className="float-right" alt="Mercy" src={GambarMobil} />
				</div>
				<div className="Sewa">Sewa &amp; Rental Mobil Terbaik di kawasan (Lokasimu)</div>
				<div className="Selamat">
					Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
				</div>
				<div className="TombolSewa">
					<Button>Mulai Sewa Mobil</Button>{" "}
				</div>
			</div>
		</div>
	);
}

export default NavBar;
