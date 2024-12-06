import React, { useState } from "react";
import "../CSS/faqs.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const FAQs = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const faqsData = [
		{
			title: "What is Founder Fridays?",
			content:
				"Founder Fridays is a weekly networking event where entrepreneurs, industry experts, and startup enthusiasts come together to share knowledge, build connections, and collaborate on innovative ideas.",
		},
		{
			title: "Who can attend Founder Fridays?",
			content:
				"Anyone with an interest in entrepreneurship, startups, or innovation is welcome to attend. Whether you're a seasoned founder, an aspiring entrepreneur, or simply curious, Founder Fridays is for you!",
		},
		{
			title: "Is there a cost to attend Founder Fridays?",
			content:
				"Attendance is typically free for participants. However, if there are special events or guest speakers, there may be a nominal registration fee to cover costs.",
		},
		{
			title: "How can I sponsor a Founder Friday event?",
			content:
				"Sponsoring a Founder Friday event is simple! Reach out to our team via email or the contact form, and we’ll provide all the details you need to get started. Sponsors receive brand visibility and a chance to connect with a targeted audience.",
		},
		{
			title: "What are the benefits of sponsoring Founder Fridays?",
			content:
				"Sponsoring Founder Fridays provides exposure to a highly engaged audience, brand association with innovation, and the opportunity to make a positive impact on the entrepreneurial ecosystem.",
		},
		{
			title: "Where are Founder Fridays held?",
			content:
				"Founder Fridays are held in various cities and venues, depending on the week’s theme and organizers. Check our event calendar to find the next Founder Friday near you!",
		},
	];

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="faqs_container">
			<h1 className="faqs_title">FAQs</h1>
			<div className="faqs_grid">
				{faqsData.map((faq, index) => (
					<div
						key={index}
						className={`faq_item ${openIndex === index ? "open" : ""}`}
						onClick={() => toggleFAQ(index)}
					>
						<div className="faq_title">
							<p>{faq.title}</p>
							<span className="faq_icon">
								{openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
							</span>
						</div>
						{openIndex === index && (
							<div className="faq_content">
								<p>{faq.content}</p>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default FAQs;
