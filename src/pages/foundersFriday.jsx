import React from "react";
import imageBg from "../assets/images/Vector 3.png";
import imageBg1 from "../assets/images/IMG_2501 3.png";
import imageBg2 from "../assets/images/IMG_2519 2.png";
import "../CSS/foundersFriday.css";

const FoundersFriday = () => {
	return (
		<div className="founder_friday_container">
			<img src={imageBg} alt="" className="founder_friday_container_image_bg" />
			<div className="founder_friday_sub_container">
				<div className="founder_friday_content_div">
					<p className="founder_friday_label">Founders Friday</p>
					<h1 className="founder_friday_heading">
						What Happens At Founders Friday
					</h1>
					<p className="founder_friday_text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
						rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
						dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
						suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
						turpis. Pellentesque habitant morbi tristique senectus et netus et
						malesuada fames ac turpis egestas. 
					</p>
					<div className="founder_friday_button">
						<button className="founder_friday_link">Learn More →</button>
					</div>
				</div>
				<div className="founder_friday_images_div">
					<img src={imageBg1} alt="" className="founder_friday_img1" />
					<img src={imageBg2} alt="" className="founder_friday_img2" />
				</div>
			</div>
		</div>
	);
};

export default FoundersFriday;
