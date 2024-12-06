import React from "react";
import "../CSS/registerAndBePartCommunity.css";
import { BsBoxArrowUpRight } from "react-icons/bs";
import image_image_circle from "../assets/images/Vector 2.png";
import image_line from "../assets/images/Frame 610.png";

const RegisterAndBePartCommunity = () => {
	return (
		<div className="register_and_be_part_community_container">
			<div className="register_and_be_part_community_sub_container">
				<div className="register_and_be_part_community_text">
					<h1>Register and be part of our community</h1>
					<p>
						Join our community of over 1000+ founders, developers, and tech
						junkies in general.Be inspired by people who live to inspire!
					</p>
				</div>
			</div>

			<div className="register_and_be_part_community_container_bg">
				<img
					src={image_line}
					alt=""
					className="register_and_be_part_community_container_bg_image_2"
				/>
				<img
					src={image_image_circle}
					alt=""
					className="register_and_be_part_community_container_bg_image_1"
				/>
			</div>

			<div className="register_and_be_part_community_btn">
				<button>Register Now →</button>
			</div>
		</div>
	);
};

export default RegisterAndBePartCommunity;
