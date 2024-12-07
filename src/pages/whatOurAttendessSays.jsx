import React, { useState, useEffect } from "react";
import "../CSS/whatOurAttendessSays.css";
import Card from "../components/card";
import imageFrame from "../assets/images/Frame 602.png";
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";

const WhatOurAttendessSays = () => {
	const cardsData = [
		{
			image: imageFrame,
			name: "Mr Belba Ngoy 1",
			description: "Always a remarkable experience for my team and myself",
		},
		{
			image: imageFrame,
			name: "Mr Belba Ngoy 2",
			description: "Always a remarkable experience for my team and myself",
		},
		{
			image: imageFrame,
			name: "Mr Belba Ngoy 3",
			description: "Always a remarkable experience for my team and myself",
		},
		{
			image: imageFrame,
			name: "Mr Belba Ngoy 4",
			description: "Always a remarkable experience for my team and myself",
		},
		{
			image: imageFrame,
			name: "Mr Belba Ngoy 5",
			description: "Always a remarkable experience for my team and myself",
		},
		{
			image: imageFrame,
			name: "Mr Belba Ngoy 6",
			description: "Always a remarkable experience for my team and myself",
		},
		{
			image: imageFrame,
			name: "Mr Belba Ngoy 7",
			description: "Always a remarkable experience for my team and myself",
		},
		{
			image: imageFrame,
			name: "Mr Belba Ngoy 8",
			description: "Always a remarkable experience for my team and myself",
		},
		{
			image: imageFrame,
			name: "Mr Belba Ngoy 9",
			description: "Always a remarkable experience for my team and myself",
		},
		{
			image: imageFrame,
			name: "Mr Belba Ngoy 10",
			description: "Always a remarkable experience for my team and myself",
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
