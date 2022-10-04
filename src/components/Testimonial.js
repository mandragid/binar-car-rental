import "./Testimonial.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import User from "../img/user.png";

function Testimonial() {
	return (
		<div class="Container align-items-center m-auto">
			<div className="align-items-center m-auto">
				<div className="row justify-content-center m-auto Testi mt-5">Testimonial</div>
				<div className="row justify-content-center m-auto Berbagai mt-2">Berbagai review positif dari para pelanggan kami</div>
			</div>
			<br></br> <br></br> <br></br>
			<Carousel>
				<Carousel.Item class>
					<img className="d-block UserLogo m-auto" src={User} />
					<br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
					<Carousel.Caption>
						<h3 className="text-center">Ujang Katresna</h3>
						<p className="text-center">
							“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur ”
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block UserLogo m-auto" src={User} />
					<br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
					<Carousel.Caption>
						<h3 className="text-center">Sambo Marpaung</h3>
						<p className="text-center">
							“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
							adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem
							ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block UserLogo m-auto" src={User} />
					<br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
					<Carousel.Caption>
						<h3 className="text-center">Jack Ho</h3>
						<p className="text-center">
							“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
							adipiscing elit, sed do eiusmod”
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Testimonial;
