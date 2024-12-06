import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ErrorPage from "./components/ErrorPage";
import HeroSection from "./pages/heroSection";
import WhoWeAre from "./pages/whoWeAre";
import WhatWeOffer from "./pages/whatWeOffer";
import FoundersFriday from "./pages/foundersFriday";
import SponsorTheNextFriday from "./pages/sponsorTheNextFriday";
import BannerFounderFridayComing from "./pages/bannerFounderFridayComing";
import RegisterAndBePartCommunity from "./pages/registerAndBePartCommunity";
import FoundersFridays2 from "./pages/foundersFridays2";
import WhatOurAttendessSays from "./pages/whatOurAttendessSays";
import FAQs from "./pages/faqs";
import WantToBePartOfAbuja from "./pages/wantToBePartOfAbuja";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "/who-are", element: <WhoWeAre /> },
			{ path: "/what-we-offer", element: <WhatWeOffer /> },
			{ path: "/founder-friday", element: <FoundersFriday /> },
			{ path: "/sponsor-next-friday", element: <SponsorTheNextFriday /> },
			{
				path: "/founder-friday-coming-up",
				element: <BannerFounderFridayComing />,
			},
			{ path: "/join-our-community", element: <RegisterAndBePartCommunity /> },
			{ path: "/founder-friday-info", element: <FoundersFridays2 /> },
			{ path: "/what-our-attendees-say", element: <WhatOurAttendessSays /> },
			{ path: "/faqs", element: <FAQs /> },
			{ path: "/be-a-part-today", element: <WantToBePartOfAbuja /> },
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
