import "./SewaSekarang.css";
import React from "react";
import Button from "react-bootstrap/Button";

function SewaSekarang() {
	return (
		<div class="Container align-items-center m-auto">
			<div className="container-fluid">
				<div className="Jumbotron container text-center rounded">
					<div className="row">
						<p className="text-center Semo m-auto mt-5">Sewa Mobil di (Lokasimu) Sekarang</p>
					</div>
					<div className="row mt-3">
						<p className="text-center m-auto Lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
					</div>
					<div className="row">
						<div className=" mt-5">
							<Button variant="success">Mulai Sewa Mobil</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SewaSekarang;
