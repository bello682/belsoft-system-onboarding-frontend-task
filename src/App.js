import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/footer";
import WhoWeAre from "./pages/whoWeAre";
import HeroSection from "./pages/heroSection";
import WhatWeOffer from "./pages/whatWeOffer";
import FoundersFriday from "./pages/foundersFriday";
import SponsorTheNextFriday from "./pages/sponsorTheNextFriday";
import BannerFounderFridayComing from "./pages/bannerFounderFridayComing";
import RegisterAndBePartCommunity from "./pages/registerAndBePartCommunity";
import FoundersFridays2 from "./pages/foundersFridays2";
import WhatOurAttendessSays from "./pages/whatOurAttendessSays";
import FAQs from "./pages/faqs";
import WantToBePartOfAbuja from "./pages/wantToBePartOfAbuja";

function App() {
	const [activeLink, setActiveLink] = useState("Home");
	const location = useLocation();

	const isLandingPage = location.pathname === "/";

	return (
		<div className="App">
			<Header activeLink={activeLink} setActiveLink={setActiveLink} />

			{isLandingPage ? (
				<>
					<HeroSection />
					<WhoWeAre />
					<WhatWeOffer />
					<FoundersFriday />
					<SponsorTheNextFriday />
					<BannerFounderFridayComing />
					<RegisterAndBePartCommunity />
					<FoundersFridays2 />
					<WhatOurAttendessSays />
					<FAQs />
					<WantToBePartOfAbuja />
				</>
			) : (
				<Outlet />
			)}

			<Footer activeLink={activeLink} setActiveLink={setActiveLink} />
		</div>
	);
}

export default App;
