import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Testimonial from "./components/Testimonial";
import SewaSekarang from "./components/SewaSekarang";
import Faq from "./components/Faq";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<NavBar />
		<Services />
		<WhyUs />
		<Testimonial />
		<SewaSekarang />
		<Faq />
	</React.StrictMode>
);
