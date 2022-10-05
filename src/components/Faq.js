import "./Faq.css";
import React from "react";
import Accordion from "react-bootstrap/Accordion";

function Faq() {
	return (
		<div class="Container">
			<div className="container-fluid">
				<div className="container d-flex flex-wrap justify-content-center mt-5">
					<div className="left">
						<div className="row Faq">Frequently Asked Question</div>
						<div className="row Ipsum">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
					</div>
					<div className="right">
						<div className="row">
							<div className="col">
								<Accordion>
									<Accordion.Item eventKey="0">
										<Accordion.Header>Apa saja syarat yang dibutuhkan?</Accordion.Header>
										<Accordion.Body>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
											occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="1">
										<Accordion.Header>Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
										<Accordion.Body>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
											occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="2">
										<Accordion.Header>Berapa hari sebelumnya sabaiknya booking sewa mobil?</Accordion.Header>
										<Accordion.Body>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
											occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="3">
										<Accordion.Header>Apakah Ada biaya antar-jemput?</Accordion.Header>
										<Accordion.Body>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
											occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="4">
										<Accordion.Header>Bagaimana jika terjadi kecelakaan</Accordion.Header>
										<Accordion.Body>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
											occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										</Accordion.Body>
									</Accordion.Item>
								</Accordion>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Faq;
