import React from "react";
import "../CSS/card.css";

const Card = ({ image, name, description }) => {
	return (
		<div className="card">
			<img src={image} alt={name} className="card-image" />
			<div className="card-content">
				<h2 className="card-title">{name}</h2>
				<p className="card-description">{description}</p>
			</div>
		</div>
	);
};

export default Card;
