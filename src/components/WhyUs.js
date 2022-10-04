import "./WhyUs.css";
import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Jempol from "../img/jempol.png";
import Harga from "../img/harga.png";
import Waktu from "../img/waktu.png";
import Sopir from "../img/sopir.png";

function WhyUs() {
	return (
		<div className="container">
			<div className="WhyUs">
				<div className="row WhyUs text-start">Why Us?</div>
				<div className="row Mengapa">Mengapa harus pilih Binar Car Rental?</div>
			</div>
			<div className="CardGroup d-flex m-auto justify-content-center">
				<CardGroup className="CardGroup d-flex">
					<div className="Card">
						<Card>
							<Card.Img variant="top" src={Jempol} />
							<Card.Body>
								<Card.Title className="JudulCard">Mobil Lengkap</Card.Title>
								<Card.Text className="CaptionCard">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat.</Card.Text>
							</Card.Body>
						</Card>
					</div>
					<div className="Card">
						<Card>
							<Card.Img variant="top" src={Harga} />
							<Card.Body>
								<Card.Title className="JudulCard">Harga Murah</Card.Title>
								<Card.Text className="CaptionCard">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain.</Card.Text>
							</Card.Body>
						</Card>
					</div>
					<div className="Card">
						<Card>
							<Card.Img variant="top" src={Waktu} />
							<Card.Body>
								<Card.Title className="JudulCard">Layanan 24 Jam</Card.Title>
								<Card.Text className="CaptionCard">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu.</Card.Text>
							</Card.Body>
						</Card>
					</div>
					<div className="Card">
						<Card>
							<Card.Img variant="top" src={Sopir} />
							<Card.Body>
								<Card.Title className="JudulCard">Sopir Profesional</Card.Title>
								<Card.Text className="CaptionCard">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu.</Card.Text>
							</Card.Body>
						</Card>
					</div>
				</CardGroup>
			</div>
		</div>
	);
}

export default WhyUs;
