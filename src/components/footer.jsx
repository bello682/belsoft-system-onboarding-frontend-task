import React from "react";
import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../CSS/footer.css";

const Footer = ({ activeLink, setActiveLink }) => {
	return (
		<div className="footer_container">
			<div className="footer_sub_container">
				<div className="footer_social_media_icon_div">
					<a href="#" className="social_media_icon_a">
						<SiFacebook className="fa-facebook" />
					</a>
					<a href="#" className="social_media_icon_a">
						<FaInstagram className="fa-instagram" />
					</a>
					<a href="#" className="social_media_icon_a">
						<FaXTwitter className="fa-twitter" />
					</a>
				</div>

				<div className="footer_links_divs">
					<ul className="footer_ul">
						<li
							className={activeLink === "Home" ? "active" : ""}
							onClick={() => setActiveLink("Home")}
						>
							<Link to="/">Home</Link>
						</li>
						<li
							className={activeLink === "About Us" ? "active" : ""}
							onClick={() => setActiveLink("About Us")}
						>
							<Link to="/who-are">About Us</Link>
						</li>
						<li
							className={activeLink === "Gallery" ? "active" : ""}
							onClick={() => setActiveLink("Gallery")}
						>
							<Link to="/founder-friday">Gallery</Link>
						</li>
						<li
							className={activeLink === "Contact Us" ? "active" : ""}
							onClick={() => setActiveLink("Contact Us")}
						>
							<Link to="/sponsor-next-friday">Contact Us</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
