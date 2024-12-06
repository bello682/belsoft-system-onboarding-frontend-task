import React from "react";
import "../CSS/herosection.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import image1 from "../assets/images/Frame 16.png";
import image2 from "../assets/images/Frame 17.png";
import image3 from "../assets/images/Frame 20.png";
import image4 from "../assets/images/Frame 22.png";
import image5 from "../assets/images/Frame 18.png";
import { BsBoxArrowUpRight } from "react-icons/bs";

const HeroSection = () => {
	return (
		<div className="hero_container">
			<div className="hero_sec_container">
				<div className="hero_details--1">
					<div className="hero_details_sub_wrap">
						<span className="span_1">
							Join Abuja's premier monthly meetup for startup founders and tech
							visionaries
						</span>
						<h1>Connect, Collaborate, Innovate!</h1>
						<p>
							Every last Friday of the month, we bring together the brightest
							minds in our local tech ecosystem. Whether you're a seasoned
							entrepreneur or just starting your journey, Founder's Friday is
							your launchpad for new ideas, valuable connections, and
							game-changing opportunities.
						</p>

						<div className="hero_button_span">
							<button>
								Register For Our Next Event{" "}
								<FaAngleDoubleRight className="btn_icon_FaAngleDoubleRight" />
							</button>
							<span className="span_2">
								Join Us for our next meetup on the 26th of July 2024
							</span>

							<div className="hero_company_logos">
								<img src={image5} alt="" />
								<div className="hero_small_text_icon">
									<small className="">Become a collaborator today </small>{" "}
									<BsBoxArrowUpRight className="icon_BsBoxArrowUpRight" />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="hero_details--2">
					<div className="flex flex-col justify-center items-center">
						<div className="div-image-1">
							<img src={image1} alt="" className="img_1" />
							<img src={image2} alt="" className="img_2" />
						</div>

						<div className="div-image-2">
							<img src={image3} alt="" className="img_3" />
							<img src={image4} alt="" className="img_4" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
