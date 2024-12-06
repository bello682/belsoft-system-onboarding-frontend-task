import React from "react";
import imageBanner from "../assets/images/IMG_2647 1.png";
import logoImageBanner from "../assets/images/WhatsApp Image 2024-07-02 at 19.41.31_2c96fd5a 1.png";
import "../CSS/bannerFounderFridayComing.css";

const BannerFounderFridayComing = () => {
	return (
		<div className="banner_founder_friday_coming_container">
			<img
				src={imageBanner}
				alt=""
				className="banner_founder_friday_coming_image_bg"
			/>
			<div className="banner_founder_friday_coming_sub_container">
				<div className="banner_founder_friday_coming_content">
					<div className="banner_founder_friday_coming_content_text_desc_btn">
						<h1 className="banner_founder_friday_coming_content_label">
							Founders Friday is coming to
						</h1>

						<div>
							<h1 className="banner_founder_friday_coming_content_leading_dynamic_change">
								Kaduna
							</h1>
						</div>

						<p className="banner_founder_friday_coming_content_body">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
							rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
							dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
							suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
							turpis. Pellentesque habitant morbi tristique senectus et netus et
							malesuada fames ac turpis egestas. 
						</p>

						<button className="banner_founder_friday_coming_content_button_register">
							Register →
						</button>
					</div>
					<div className="banner_founder_friday_coming_content_img_logo_banner">
						<img src={logoImageBanner} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default BannerFounderFridayComing;
