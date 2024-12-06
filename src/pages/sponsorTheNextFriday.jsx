import React from "react";
import "../CSS/sponsorTheNextFriday.css";

const SponsorTheNextFriday = () => {
	const data = [
		{
			title: "Networking Opportunities",
			description:
				"Connect with industry leaders, founders, and potential partners.",
		},
		{
			title: "Community Impact",
			description:
				"Support the growth and development of the startup ecosystem.",
		},
		{
			title: "Brand  Association",
			description:
				"Align your brand with innovation and entrepreneurial success.",
		},
		{
			title: "Visibility",
			description:
				"Gain exposure to a targeted audience of young professionals and entrepreneurs.",
		},
	];

	const colors = ["#a25ce3", "#EDDBFF", "#EDDBFF", "#a25ce3"];

	return (
		<div className="sponsor_the_next_friday_container">
			<div className="sponsor_the_next_friday_sub_container">
				<h1 className="font-extrabold text-xl text-[#a25ce3]">
					Sponsor The Next Friday
				</h1>

				<div className="w-full flex justify-center items-center m-auto Sponsor_founder_h1_div">
					<h1 className=" font-bold text-5xl mt-10 mb-10  ml-auto mr-auto sponsor_the_next_friday_leading_text">
						Why Sponsor Founders Friday?
					</h1>
				</div>
				<div className="sponsor_the_next_friday_content">
					<div className="sponsor_the_next_friday_circle_div">
						{data.map((item, index) => (
							<div
								className="sponsor_the_next_friday_circle"
								key={index}
								style={{
									backgroundColor: colors[index % colors.length],
								}}
							>
								<h2>{item.title}</h2>
								<p>{item.description}</p>
							</div>
						))}
					</div>

					<div className="sponsor_the_next_friday_text_form_div">
						<h1>How To Sponsor</h1>
						<h2>Ready to Make an Impact?</h2>
						<p>
							Fill out the form below or contact us at [contact email/phone
							number] to learn more about how you can sponsor the next Founders
							Friday
						</p>
						<form className="sponsor_form_input">
							<div className="sponsor_label_input_1">
								<div className="flex flex-col w-full">
									<label htmlFor="">Name</label>
									<input type="text" placeholder="full name" />
								</div>
								<div className="flex flex-col w-full">
									<label htmlFor="">Company (optional)</label>
									<input type="text" placeholder="company name" />
								</div>
							</div>
							<div className="sponsor_label_input_2">
								<div className="flex flex-col w-full">
									<label htmlFor="">Email</label>
									<input type="text" placeholder="email address" />
								</div>
								<div className="flex flex-col w-full">
									<label htmlFor="">Phone</label>
									<input type="text" placeholder="phone number" />
								</div>
							</div>
						</form>
						<div className="mt-9">
							<button className="sponsor_btn">Sponsor →</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SponsorTheNextFriday;
