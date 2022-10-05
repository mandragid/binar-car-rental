import "./Footer.css";
import React from "react";
import Facebook from "../img/facebook.png";
import Twitter from "../img/twitter.png";
import Email from "../img/email.png";
import Instagram from "../img/instagram.png";
import Twitch from "../img/twitch.png";

function Footer() {
	return (
		<div class="container-fluid footer">
			<div className="container m-auto">
				<div className="row">
					<div className="col-3">
						<ul>
							<li>
								{" "}
								<a href="#">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</a>
							</li>
						</ul>
					</div>
					<div className="col-2">
						<ul>
							<li>
								{" "}
								<a href="#">Our Services</a>
							</li>
						</ul>
					</div>
					<div className="col-3">
						<p>Connect With Us</p>
					</div>
					<div className="col">
						<p> Copyright Binar 2022</p>
					</div>
				</div>
				<div className="row">
					<div className="col-3">
						<p>binarcarrental@gmail.com</p>
					</div>
					<div className="col-2">
						<ul>
							<li>
								<a href="#">Why Us</a>
							</li>
						</ul>
					</div>
					<div className="col-1 d-flex">
						<img src={Facebook} alt="FacebookLogo"></img>
						<img src={Instagram} alt="InstagramLogo"></img>
						<img src={Twitter} alt="TwitterLogo"></img>
						<img src={Email} alt="EmailLogo"></img>
						<img src={Twitch} alt="TwitchLogo"></img>
					</div>

					<div className="col biru"></div>
				</div>
				<div className="row">
					<div className="col-3">081-233-334-808</div>
					<div className="col">
						<ul>
							<li>
								<a href="#">FAQ</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
