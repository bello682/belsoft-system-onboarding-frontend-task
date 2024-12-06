import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Frame 8.png";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import "../CSS/header.css";

const Header = ({ activeLink, setActiveLink }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="header_container">
			<div className="header_sec_container">
				<div className="image_logo">
					<img src={logo} alt="" className="img_logo" />
				</div>

				<div className={`header-links-button ${isOpen ? "active-menu" : ""}`}>
					<div className="header_links">
						<ul className="header_ul">
							<li
								className={activeLink === "Home" ? "active" : ""}
								onClick={() => {
									setActiveLink("Home");
									setIsOpen(!isOpen);
								}}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={activeLink === "About Us" ? "active" : ""}
								onClick={() => {
									setActiveLink("About Us");
									setIsOpen(!isOpen);
								}}
							>
								<Link to="/who-are">About Us</Link>
							</li>
							<li
								className={activeLink === "Gallery" ? "active" : ""}
								onClick={() => {
									setActiveLink("Gallery");
									setIsOpen(!isOpen);
								}}
							>
								<Link to="/founder-friday">Gallery</Link>
							</li>
							<li
								className={activeLink === "Contact Us" ? "active" : ""}
								onClick={() => {
									setActiveLink("Contact Us");
									setIsOpen(!isOpen);
								}}
							>
								<Link to="/sponsor-next-friday">Contact Us</Link>
							</li>
						</ul>
					</div>

					<div className="header_button">
						<button className="header_btn">
							Register <FaArrowRight />
						</button>
					</div>
				</div>

				<div className="hamburger" onClick={toggleMenu}>
					{isOpen ? (
						<FaTimes className="closeFaTimes" />
					) : (
						<FaBars className="openFaBars" />
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
