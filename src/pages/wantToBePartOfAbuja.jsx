import React from "react";
import "../CSS/wantToBePartOfAbuja.css";
import imageWhatapp from "../assets/images/WhatsApp Image 2024-07-02 at 19.41.31_2c96fd5a 1.svg";
import { FaAngleDoubleRight } from "react-icons/fa";

const WantToBePartOfAbuja = () => {
	return (
		<div className="want_part_abuja_container">
			<div className="want_part_abuja_sub_ontainer">
				<img
					src={imageWhatapp}
					alt=""
					className="want_part_abuja_sub_image_logo"
				/>
				<div className="want_part_abuja_content">
					<h2>Want To Be A Part Of Abuja’s Biggest Tech Community?</h2>

					<button className="want_part_abuja_btn_icon_FaAngleDoubleRight">
						Register For Our Next Event{" "}
						<FaAngleDoubleRight className="btn_icon_FaAngleDoubleRight" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default WantToBePartOfAbuja;
