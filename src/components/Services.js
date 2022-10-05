import "./Services.css";
import React from "react";
import Cewek from "../img/cewe.png";
import Check from "../img/check.png";

function Services() {
	return (
		<div>
			<div className="container-fluid">
				<div className="container">
					<div className="row">
						<div className="col-4 offset-1 mt-3">
							<img className="img-fluid" src={Cewek} alt="Cewek" />
						</div>
						<div className="Best offset-1 col-5 mt-5">
							Best Car Rental for any kind of trip in (Lokasimu)!
							<div className="row mt-4">
								<div className="Semo col">
									Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata,
									bisnis, wedding, meeting, dll.
								</div>
							</div>
							<div className="row mt-4">
								<div className="col-1">
									<img className="CheckIcon" src={Check} alt="CheckIcon" />
								</div>
								<div className="col List">Sewa Mobil Dengan Supir di Bali 12 Jam</div>
							</div>
							<div className="row">
								<div className="col-1">
									<img className="CheckIcon" src={Check} alt="CheckIcon" />
								</div>
								<div className="col List">Sewa Mobil Lepas Kunci di Bali 24 Jam</div>
							</div>
							<div className="row">
								<div className="col-1">
									<img className="CheckIcon" src={Check} alt="CheckIcon" />
								</div>
								<div className="col List">Sewa Mobil Jangka Panjang Bulanan</div>
							</div>
							<div className="row">
								<div className="col-1">
									<img className="CheckIcon" src={Check} alt="CheckIcon" />
								</div>
								<div className="col List">Gratis Antar - Jemput Mobil di Bandara</div>
							</div>
							<div className="row">
								<div className="col-1">
									<img className="CheckIcon" src={Check} alt="CheckIcon" />
								</div>
								<div className="col List">Layanan Airport Transfer / Drop In Out</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Services;
