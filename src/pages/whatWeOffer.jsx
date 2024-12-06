import React from "react";
import { FaPlus } from "react-icons/fa6";
import "../CSS/WhatWeOffer.css";

const WhatWeOffer = () => {
	const data = [
		{
			title: "Monthly Meetups",
			description:
				"Our cornerstone event, held on the last Friday of every month, featuring keynote speakers, panel discussions, and ample networking opportunities.",
		},
		{
			title: "Diverse Network",
			description:
				"Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts.",
		},
		{
			title: "Knowledge Sharing",
			description:
				"Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts.",
		},
		{
			title: "Collaboration   Opportunities",
			description:
				"Find potential co-founders, mentors, or partners for your next big venture.",
		},
		{
			title: "Community Support",
			description:
				"Be part of a supportive ecosystem that celebrates successes and provides guidance through challenges.",
		},
	];

	return (
		<div className="what_we_offer_container">
			<div className="what_we_offer_sub_container">
				<h1 className="what_we_offer_label">What We Offer</h1>

				{data.map((item) => {
					return (
						<div className="what_we_offer_contents">
							<div className="what_we_offer_circle"></div>
							<h1 className="what_we_offer_title">{item.title}</h1>
							<span className="what_we_offer_span">{item.description}</span>
							<FaPlus className="what_we_offer_icon" />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default WhatWeOffer;
