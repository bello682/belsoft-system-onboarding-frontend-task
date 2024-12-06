import React from "react";
import "../CSS/whatOurAttendessSays.css";
import Card from "../components/card";
import imageFrame from "../assets/images/Frame 602.png";
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";

const WhatOurAttendessSays = () => {
	const cardsData = [
		{
			image: imageFrame,
			name: "Mr Belba Ngoy",
			description: "Always a remarkable experience for my team and myself",
		},
		{
			image: imageFrame,
			name: "Mr Belba Ngoy",
			description: "Always a remarkable experience for my team and myself",
		},
		{
			image: imageFrame,
			name: "Mr Belba Ngoy",
			description: "Always a remarkable experience for my team and myself",
		},
	];

	return (
		<div className="what_do_our_attendees_say_container">
			<div className="what_do_our_attendees_say_sub_container">
				<div className="what_do_our_attendees_say_content">
					<h1>What Do Our Attendees Have To Say?</h1>
					<div className="what_do_our_attendees_say_content_wrapper">
						<div className="what_do_our_attendees_say_content_sub_div">
							<p>Well See For Yourself!</p>
							<div className="what_do_our_attendees_say_icons">
								<div>
									<IoArrowBackOutline className="icon_FaArrowLeft" />
								</div>
								<div>
									<IoArrowForward className="icon_FaArrowRight" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="what_do_our_attendees_say_card_map ">
					{cardsData.map((card, index) => (
						<Card
							key={index}
							image={card.image}
							name={card.name}
							description={card.description}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default WhatOurAttendessSays;
