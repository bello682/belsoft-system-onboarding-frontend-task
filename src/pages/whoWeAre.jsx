import React from "react";
import who_we_image from "../assets/images/IMG_2857 2.png";
import "../CSS/whoWeAre.css";

const WhoWeAre = () => {
	return (
		<div>
			<div className="who_we_are_container">
				<div className="who_we_are_sub_container">
					<div className="who_we_are_image_div">
						<img src={who_we_image} alt="" />
					</div>
					<div className="bordered-container">
						<div className="border-text top-text">Who Are We?</div>
						<div className="content">
							<p>
								Born from the vibrant startup ecosystem of Abuja, we recognized
								the need for a consistent, high-quality networking platform
								where founders, innovators, and tech enthusiasts could connect,
								share ideas, and foster collaboration.
							</p>
							<div className="buttons">
								<button className="register-button">Register →</button>
								<button className="donate-button">Donate 💰</button>
							</div>
						</div>
						<div className="border-text bottom-text">
							Founder's Friday is more than just a meetup — it's a movement.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhoWeAre;
