import React, { useState, useEffect } from "react";
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
			name: "Mr Belba",
			description:
				"A cornerstone of innovation and reliability, making every project shine.",
		},
		{
			image: imageFrame,
			name: "Mrs Jane",
			description:
				"Her dedication and attention to detail create an atmosphere of trust and excellence.",
		},
		{
			image: imageFrame,
			name: "Mr James",
			description:
				"Always going above and beyond to ensure perfection in every endeavor.",
		},
		{
			image: imageFrame,
			name: "Mr Smith",
			description:
				"A trailblazer whose leadership fosters creativity and confidence.",
		},
		{
			image: imageFrame,
			name: "Mrs Phillips",
			description:
				"Her passion and expertise turn challenges into incredible opportunities.",
		},
		{
			image: imageFrame,
			name: "Miss Kim",
			description:
				"A dynamic force of energy and innovation, making every moment memorable.",
		},
		{
			image: imageFrame,
			name: "Mr Leo",
			description:
				"A visionary thinker whose work consistently exceeds expectations.",
		},
		{
			image: imageFrame,
			name: "Mr Kenneth",
			description:
				"A brilliant mind whose commitment and ingenuity inspire all around him.",
		},
		{
			image: imageFrame,
			name: "Mr Benedit",
			description:
				"A leader who transforms ideas into impactful realities, time and time again.",
		},
		{
			image: imageFrame,
			name: "Mr Elum Musk",
			description:
				"A true innovator, always pushing boundaries to achieve the extraordinary.",
		},
		{
			image: imageFrame,
			name: "Mr Bill Gates",
			description:
				"A pioneer of progress, whose wisdom and generosity know no bounds.",
		},
	];

	const [currentSlide, setCurrentSlide] = useState(0);

	const cardsPerSlide = () => {
		if (window.innerWidth < 768) return 1;
		if (window.innerWidth < 1024) return 2;
		return 3;
	};

	const [visibleCards, setVisibleCards] = useState(cardsPerSlide);

	useEffect(() => {
		const handleResize = () => setVisibleCards(cardsPerSlide());
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const autoSlide = setInterval(() => {
			setCurrentSlide((prev) =>
				prev + 1 >= Math.ceil(cardsData.length / visibleCards) ? 0 : prev + 1
			);
		}, 5000);
		return () => clearInterval(autoSlide);
	}, [visibleCards, cardsData.length]);

	const slideLeft = () => {
		setCurrentSlide((prev) =>
			prev === 0 ? Math.ceil(cardsData.length / visibleCards) - 1 : prev - 1
		);
	};

	const slideRight = () => {
		setCurrentSlide((prev) =>
			prev + 1 >= Math.ceil(cardsData.length / visibleCards) ? 0 : prev + 1
		);
	};

	const startIndex = currentSlide * visibleCards;
	const endIndex = startIndex + visibleCards;
	const visibleCardsData = cardsData.slice(startIndex, endIndex);

	return (
		<div className="what_do_our_attendees_say_container">
			<div className="what_do_our_attendees_say_sub_container">
				<div className="what_do_our_attendees_say_content">
					<h1>What Do Our Attendees Have To Say?</h1>
					<div className="what_do_our_attendees_say_content_wrapper">
						<div className="what_do_our_attendees_say_content_sub_div">
							<p>Well See For Yourself!</p>
							<div className="what_do_our_attendees_say_icons">
								<div onClick={slideLeft}>
									<IoArrowBackOutline className="icon_FaArrowLeft" />
								</div>
								<div onClick={slideRight}>
									<IoArrowForward className="icon_FaArrowRight" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="what_do_our_attendees_say_card_map">
					{visibleCardsData.map((card, index) => (
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
