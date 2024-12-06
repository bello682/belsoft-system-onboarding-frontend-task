import React from "react";
import "../CSS/foundersFridays2.css";
import imageBg1 from "../assets/images/Frame 26.jpg";

const FoundersFridays2 = () => {
	return (
		<div className="founders_friday2_container">
			<div className="founders_friday2_sub_container">
				<div className="founders_friday2_images_div">
					<img src={imageBg1} alt="" className="founders_friday2_img1" />
				</div>
				<div className="founders_friday2_content_div">
					<h1 className="founders_friday2_heading">
						At Founder’s Friday, Every Friday Is a Learning Experience!
					</h1>
					<p className="founders_friday2_text">
						Join us in our mission to transform ideas into impact and shape the
						future of Nigeria’s startup landscape.
					</p>
					<div className="founders_friday2_button">
						<button className="founders_friday2_link">Register →</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoundersFridays2;
